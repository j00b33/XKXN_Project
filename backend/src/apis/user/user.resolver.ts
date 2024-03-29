import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createUser.input';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserService } from './user.service';
import { UpdateUserInput } from './dto/updateUser.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    const hashedPassword = await bcrypt.hash(createUserInput.password, 10);
    createUserInput.password = hashedPassword;
    return await this.userService.create({ createUserInput });
  }

  @Query(() => [User])
  async fetchTattooists() {
    return await this.userService.fetchTattooists();
  }

  @Query(() => User)
  async fetchTattooist(@Args('tattooistId') tattooistId: string) {
    return await this.userService.fetchTattooist({ tattooistId });
  }

  @Query(() => User)
  async fetchUser(@Args('userId') userId: string) {
    return await this.userService.fetchUser({ userId });
  }

  @Mutation(() => String)
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @Args('userId') userId: string,
  ) {
    return await this.userService.update({ userId, updateUserInput });
  }

  @Mutation(() => String)
  async likeTattooist(@Args('tattooistId') tattooistId: string) {
    return await this.userService.likeTattooist({ tattooistId });
  }

  @Mutation(() => String)
  async cancelLikeTattooist(@Args('tattooistId') tattooistId: string) {
    return await this.userService.cancelLike({ tattooistId });
  }

  @Query(() => [User])
  async fetchHotTattooists() {
    return this.userService.fetchHot();
  }
}
