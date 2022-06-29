import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Image } from './entities/image.entity';
import { ImageService } from './imge.service';

@Resolver()
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}

  @Mutation(() => [Image])
  createImage(
    @Args('tattooId') tattooId: string,
    @Args({ name: 'image', type: () => [String] }) images: string[],
  ) {
    return this.imageService.create({ tattooId, images });
  }

  @Query(() => Image)
  fetchImage(@Args('tattooId') tattooId: string) {
    return this.imageService.fetch({ tattooId });
  }
}
