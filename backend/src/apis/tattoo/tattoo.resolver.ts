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
  async fetchTattoos() {
    return this.tattooService.findAll();
  }

  @Query(() => Tattoo)
  async fetchTattoo(@Args('tattooId') tattooId: string) {
    return await this.tattooService.findOne({ tattooId });
  }

  @Query(() => [Tattoo])
  async fetchPorfolios() {
    return await this.tattooService.findPort();
  }

  @Mutation(() => Tattoo)
  async updateTattoo(
    @Args('updateTattooInput') updateTattooInput: UpdateTattooInput,
    @Args('tattooId') tattooId: string,
  ) {
    return await this.tattooService.update({ tattooId, updateTattooInput });
  }
}
