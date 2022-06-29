import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TattooGenre } from './entities/tattooGenere.entity';
import { TattooGenreService } from './tattooGenre.service';

@Resolver()
export class TattooGenreResolver {
  constructor(private readonly tattooGenreService: TattooGenreService) {}

  @Mutation(() => TattooGenre)
  createTattooGenre(@Args('genre') genre: string) {
    return this.tattooGenreService.create({ genre });
  }
}
