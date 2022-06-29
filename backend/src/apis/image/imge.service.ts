import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  async create({ tattooId, images }) {
    // 배열로 result 저장
    const result = [];
    for (let i = 0; i < images.length; i++) {
      const eachResult = await this.imageRepository.save({
        tattoo: tattooId,
        image: images[i],
      });
      result.push(eachResult);
    }
    return result;
  }

  async fetch({ tattooId }) {
    console.log('🍒', tattooId);
    return await this.imageRepository.findOne({
      where: { tattoo: tattooId },
    });
  }
}
