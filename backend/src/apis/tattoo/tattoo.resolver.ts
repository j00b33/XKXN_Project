import { CreateTattooInput } from './dto/createTattoo.input';
import { TattooService } from './tattoo.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TattooResolver {
  constructor(private readonly tattooService: TattooService) {}

  @Mutation(() => [Tattoo])
  async createTattoo(
    @Args('createTattooInput') createTattooInput: CreateTattooInput,
  ) {
    return this.tattooService.create({ createTattooInput });
  }
}
