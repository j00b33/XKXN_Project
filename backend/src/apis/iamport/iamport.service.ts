import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class IamportService {
  async getAccessToken() {
    // iamport impUid 가져오기 // 인증 토큰 발급 받기
    const IamportAccessToken = await axios({
      url: 'https://api.iamport.kr/users/getToken',
      method: 'post', // POST method
      headers: { 'Content-Type': 'application/json' }, // "Content-Type": "application/json"
      data: {
        imp_key: '9817535831783963', // REST API키
        imp_secret:
          'AmcxitTEDSW2nOwLlkYS0mCh5Af7MDkmZwUiZOXDGTG4IcQ3xOWxayPg94nVHHiHdcZd0XQHQwLzJCCg', // REST API Secret
      },
    });

    console.log('lvctkucdfigukhbv jghg gvl,gbuvkhgcfhxdyhdfyg');

    const IAccessToken = IamportAccessToken.data.response.access_token;
    return IAccessToken;
  }

  async getImpUid({ IAccessToken, impUid }) {
    // 결제 상세내역 조회 - 결제 내역의 impUid
    console.log('lvctkucdfigukhbv jghg gvl,gbuvkhgcfhxdyhdfyg');

    let GetimpUid;
    try {
      GetimpUid = await axios.get(`https://api.iamport.kr/payments/${impUid}`, {
        headers: {
          'Content-Type': 'application/json', // "Content-Type": "application/json"
          Authorization: `Bearer ${IAccessToken}`, // 발행된 액세스 토큰
        },
      });
    } catch (error) {
      if (error.response.status === 404) {
        console.log('404!!!');
        throw new UnprocessableEntityException('Invalid impUid');
      }
    }

    console.log('lvctkucdfigukhbv jghg gvl,gbuvkhgcfhxdyhdfyg');

    console.log('😡  IAccessToken: ', IAccessToken);
    console.log('💩 Client ImpUid: ', impUid);
    console.log('🌼  GetimpUid', GetimpUid); // 상품에 대한 모든 정보

    const PurchaseData = GetimpUid.data.response; // 유저가 지불한 돈 = 아임포트에 유저가 지불했다고 저장되어있는 돈

    return PurchaseData;
  }
}
