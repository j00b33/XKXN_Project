import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Tattoo } from '../tattoo/entities/tattoo.entity';
import { User } from '../users/entities/users.entity';
import { Receipt, RECEIPT_STATUS_ENUM } from './entities/receipt.entity';
import axios from 'axios';
import { IamportService } from '../iamport/iamport.service';
@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(Receipt)
    private readonly receiptRepository: Repository<Receipt>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Tattoo)
    private readonly tattooRepository: Repository<Tattoo>,

    private readonly iamportService: IamportService,

    private readonly connection: Connection,
  ) {}

  async create({ impUid, tattooId, price, currentUser }) {
    const IAccessToken = await this.iamportService.getAccessToken();
    const PurchaseData = await this.iamportService.getImpUid({
      IAccessToken,
      impUid,
    });

    console.log('🥲', impUid);

    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect(); // now, queryRunner is available
    await queryRunner.startTransaction('SERIALIZABLE'); // Transaction Start =======>

    try {
      // 타투에서 아이디 가져오기
      const tattooData = await queryRunner.manager.findOne(
        Tattoo,
        {
          id: tattooId,
        },
        { lock: { mode: 'pessimistic_write' } },
      );

      if (
        PurchaseData.amount !== tattooData.price ||
        PurchaseData.merchant_uid !== tattooId
      ) {
        console.log(
          '================결제에 오류가 발생했습니다================',
        );

        throw new UnprocessableEntityException('Failed to validate payment');
      }

      if (tattooData.isSold === true) {
        console.log('This tattoo has been already taken');
        throw new ConflictException('This tattoo has been already taken');
      }

      // User 검증 시작
      const userID = await queryRunner.manager.findOne(User, {
        email: currentUser.email,
      });

      const receiptTable = this.receiptRepository.create({
        impUid: impUid,
        price: Number(price),
        tattooId: tattooId,
        user: userID,
        status: RECEIPT_STATUS_ENUM.PURCHASED,
      });

      console.log(price);

      // await this.receiptRepository.save(receiptTable)
      await queryRunner.manager.save(receiptTable);

      // error 한번 던져보깅
      // throw new Error('🐙  에러발생 🐙 ')

      // 타투 업데이트
      const updateTattoo = await this.tattooRepository.create(
        // { id: Tattoo.id },
        // { isTaken: true, user: userID },
        { ...tattooData, isSold: true, purchaser: userID },
      );

      await queryRunner.manager.save(updateTattoo);

      console.log('🌿 결제내역: ', PurchaseData);
      console.log(
        '유저 결제금액',
        PurchaseData.amount,
        '상품 금액: ',
        tattooData.price,
      );
      // commit 성공 확정
      await queryRunner.commitTransaction();

      // 최종결과 프론트앤드에 돌려주기
      return receiptTable;
    } catch (error) {
      // 내부 코드를 실행하는데 오류가 났다면 rollback 되돌리기
      await queryRunner.rollbackTransaction();
    } finally {
      // 연결해체
      await queryRunner.release();
    }
  }

  // ====================================================================
  async refund({ impUid, price, tattooId, currentUser }) {
    const IAccessToken = await this.iamportService.getAccessToken();
    const PurchaseData = await this.iamportService.getImpUid({
      IAccessToken,
      impUid,
    });

    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect(); // now, queryRunner is available
    await queryRunner.startTransaction('SERIALIZABLE'); // Transaction Start =======>
    console.log('여기까지 실행이 됐다면 일단 impUid 토큰 인증 완료');

    try {
      // -------------------------- 추가 검증 --------------------------
      // 이미 취소된 상품인지 검증
      const PurchaseStatus = await queryRunner.manager.findOne(Receipt, {
        where: { impUid },
        relations: ['user'],
      });

      if (PurchaseStatus.status === 'CANCELLED') {
        console.log('이미 결제가 취소된 타투입니다');
        throw new UnprocessableEntityException('이미 결제가 취소된 타투입니다');
      }

      // 상품 구매자와 환불자의 아이디가 일치하는지 검증
      const tattooData = await queryRunner.manager.findOne(
        Tattoo,
        {
          id: tattooId,
        },
        { lock: { mode: 'pessimistic_write' } },
      );

      const userData = await queryRunner.manager.findOne(User, {
        email: currentUser.email,
      });

      console.log('Tattoo: ', Tattoo);

      console.log('🌹 USER ID', userData.id);
      console.log('🍄', currentUser);
      console.log('😡 ', PurchaseStatus.user); //

      // 구매자랑 환불자 비교 검증
      if (PurchaseStatus.user.id !== userData.id) {
        throw new UnprocessableEntityException(
          '구매자와 환불자가 일치하지 않습니다',
        );
      }

      // 환불하려는 금액과 구매한 금액이 같은지 검증
      if (PurchaseStatus.price !== price) {
        throw new UnprocessableEntityException(
          '구매한 금액과 환불할 금액이 일치하지 않습니다',
        );
      }

      console.log(PurchaseStatus.price, price);
      // ============= 검증할때 걸린게 없다면 결제 취소 API 요청 =============
      const getCancelData = await axios({
        url: 'https://api.iamport.kr/payments/cancel',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: IAccessToken, // 아임포트 서버로부터 발급받은 엑세스 토큰
        },
        data: {
          imp_uid: impUid, // imp_uid를 환불 `unique key`로 입력
          amount: price, // 가맹점 클라이언트로부터 받은 환불금액
          merchant_uid: tattooId,
        },
      });

      // 환불 결과
      const response = getCancelData.data;
      console.log('🐹 RESPONSE : ', response);

      // 그리고 타투 상품 isSold false로 update
      console.log('🦊 ', Tattoo);

      const updateTattoo = await this.tattooRepository.create({
        ...tattooData,
        isSold: true,
      });

      await queryRunner.manager.save(updateTattoo);

      console.log('🧦 ');

      const result = this.receiptRepository.create({
        impUid,
        price,
        tattooId,
        user: userData,
        status: RECEIPT_STATUS_ENUM.CANCELLED,
      });

      // await this.receiptRepository.save(receiptTable)
      await queryRunner.manager.save(result);

      // error 한번 던져보기
      // throw new Error("에러발생함 ㅅㄱ")

      console.log('🦄 ', result);
      console.log(' 🏁 여기 까지 콘솔 찍혔다면 매우 성공적 🏁 ');

      // commit 성공 확정
      await queryRunner.commitTransaction();

      // 최종 겨로가 프론트앤드에 돌려주기
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      // 연결 해제
      await queryRunner.release();
    }
  }
}
