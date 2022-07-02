import { Module } from '@nestjs/common';
import { TattooResolver } from './tattoo.resolver';
import { TattooService } from './tattoo.service';

@Module({
  providers: [TattooService, TattooResolver],
})
export class TattooModule {}
