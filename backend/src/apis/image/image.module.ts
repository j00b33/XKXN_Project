import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageResolver } from './image.resolver';
import { ImageService } from './imge.service';
import { Image } from './entities/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  providers: [ImageResolver, ImageService],
})
export class ImageModule {}

// (._. )
