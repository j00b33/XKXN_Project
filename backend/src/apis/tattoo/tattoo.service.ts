import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TattooMethod } from '../tattooMethod/entities/tatooMethod.entity';
import { User } from '../users/entities/users.entity';
import { Tattoo } from './entities/tattoo.entity';

@Injectable()
export class TattooService {
  constructor(
    @InjectRepository(Tattoo)
    private readonly tattooRepository: Repository<Tattoo>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne({ tattooId }) {
    return await this.tattooRepository.findOne({
      where: { id: tattooId },
      relations: [
        'tattooDesign',
        'tattooMethod',
        'tattooGenre',
        'tattooRegion',
        'tattooBodypart',
        'tattooTags',
        'tattooist',
      ],
    });
  }

  async findByGenre({ tattooGenreId }) {
    return await this.tattooRepository.find({
      where: { tattooGenre: tattooGenreId },
    });
  }

  async findAll() {
    return await this.tattooRepository.find({
      relations: [
        'tattooDesign',
        'tattooMethod',
        'tattooGenre',
        'tattooRegion',
        'tattooBodypart',
        'tattooTags',
        'tattooist',
      ],
    });
  }

  // 장르별 타투 조회
  async findGenre(tattooGenreId) {
    return await this.tattooRepository.find({
      where: { tattooGenre: tattooGenreId.tattooGenreId },
      relations: [
        'tattooDesign',
        'tattooMethod',
        'tattooGenre',
        'tattooRegion',
        'tattooBodypart',
        'tattooTags',
        'tattooist',
      ],
    });
  }

  async findWithDelete() {
    return await this.tattooRepository.find({
      withDeleted: true,
    });
  }

  // createTattoo
  async create({ createTattooInput, currentUser }) {
    const tattooist = await this.userRepository.findOne({
      email: currentUser.email,
    });

    if (!tattooist.isTattooist) {
      throw new Error('Only Tattooist May Create a Post');
    }

    // 상품과 도안을 데이터베이스에 동시 저장
    const {
      tattooMethod,
      tattooGenreId,
      tattooRegionId,
      tattooBodypartId,
      // tattooTags,
      ...restTattoo
    } = createTattooInput;

    // tattooMethod 저장 - (중복제거 없이 그냥 저장) -
    // const result2 = await this.tattooMethodRepository.save({
    //   ...tattooMethod,
    // });

    // 중복 제거하기

    // // tattoo tags
    // const result3 = [];
    // for (let i = 0; i < tattooTags.length; i++) {
    //   const tagName = tattooTags[i].replace('#', '');

    //   // ----------- 이미 등록된 태그인지 확인해보기 -----------
    //   const prevTag = await this.tattooTagRepository.findOne({
    //     tag: tagName,
    //   }); // tagName이 이미 등록이 되어있는지 검증

    //   if (prevTag) {
    //     // 만약 기존 태그가 존재한다면
    //     result3.push(prevTag);
    //   } else {
    //     // 만약 기존 태그 없었다면
    //     const newTag = await this.tattooTagRepository.save({ tag: tagName });
    //     result3.push(newTag);
    //   }
    // }

    const result = await this.tattooRepository.save({
      ...restTattoo, // spread 연산자 활용하기
      tattooRegion: { id: tattooRegionId },
      tattooGenre: { id: tattooGenreId },
      tattooBodypart: { id: tattooBodypartId },
      // tattooTags: result3,
      tattooist: { id: tattooist.id },
    });
    // console.log(' 🌼 ', result);
    return result;
  }

  // restore
  async restore({ tattooId }) {
    const result = await this.tattooRepository.restore({ id: tattooId });
    return result.affected ? true : false;
  }

  // updateTattoo
  async update({ tattooId, updateTattooInput }) {
    const tattoo = await this.tattooRepository.findOne({
      where: { id: tattooId },
    });

    const newTattoo = {
      ...tattoo,
      ...updateTattooInput,
    };
    return await this.tattooRepository.save(newTattoo);
    // 리턴해줘야 리졸버로 successfully 들어가게 됨
  }

  async checkIsStarted({ tattooId }) {
    const tattoo = await this.tattooRepository.findOne({
      where: { id: tattooId },
    });
    if (tattoo.isSold)
      throw new UnprocessableEntityException('작업이 시작된 타투입니다');
  }

  async delete({ tattooId }) {
    const result = await this.tattooRepository.softDelete({ id: tattooId });
    return result.affected ? true : false;
  }
}
