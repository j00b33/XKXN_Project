import { CreateTattooInput } from './dto/createTattoo.input';
import { TattooService } from './tattoo.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Tattoo } from './entities/tattoo.entity';

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
  async fetchTattoos() {
    return this.tattooService.findAll();
  }

  @Query(() => Tattoo)
  fetchTattoo(@Args('tattooId') tattooId: string) {
    return this.tattooService.findOne({ tattooId });
  }

  @Query(() => [Tattoo])
  fetchPorfolios() {
    return this.tattooService.findPort();
  }
}
