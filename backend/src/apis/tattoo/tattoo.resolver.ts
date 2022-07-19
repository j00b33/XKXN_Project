import { CreateTattooInput } from './dto/createTattoo.input';
import { TattooService } from './tattoo.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Tattoo } from './entities/tattoo.entity';
import { UpdateTattooInput } from './dto/updateTattoo.input';

@Resolver()
export class TattooResolver {
  constructor(private readonly tattooService: TattooService) {}

  @Mutation(() => Tattoo)
  async createTattoo(
    @Args('createTattooInput') createTattooInput: CreateTattooInput,
  ) {
    return this.tattooService.create({ createTattooInput });
  }

  @Query(() => [Tattoo])
  async fetchTattoos(@Args('tattooGenreId') tattooGenreId: number) {
    return this.tattooService.findAll({ tattooGenreId });
  }

  @Query(() => Tattoo)
  async fetchTattoo(@Args('tattooId') tattooId: string) {
    return await this.tattooService.findOne({ tattooId });
  }

  @Query(() => [Tattoo])
  async fetchPortfolios(@Args('tattooistId') tattooistId: string) {
    return await this.tattooService.findPort({ tattooistId });
  }

  @Query(() => [Tattoo])
  async fetchTattoosInTTPage(@Args('tattooistId') tattooistId: string) {
    return this.tattooService.fetchCreatedTattoos({ tattooistId });
  }

  @Mutation(() => Tattoo)
  async updateTattoo(
    @Args('updateTattooInput') updateTattooInput: UpdateTattooInput,
    @Args('tattooId') tattooId: string,
  ) {
    return await this.tattooService.update({ tattooId, updateTattooInput });
  }

  @Mutation(() => Tattoo)
  async markSold(@Args('tattooId') tattooId: string) {
    return await this.tattooService.markSold({ tattooId });
  }

  @Mutation(() => String)
  async markDone(@Args('tattooId') tattooId: string) {
    return await this.tattooService.markDone({ tattooId });
  }

  // @Query(() => [Tattoo])
  // async fetchHotTattoosByGenre(@Args('tattooGenreId') tattooGenreId: number) {
  //   return this.tattooService.hotGenre({ tattooGenreId });
  // }
}
