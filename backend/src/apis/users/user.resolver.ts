import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';
import { User } from './entities/users.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/commons/auth/gql-user.param';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    const hashedPassword = await bcrypt.hash(createUserInput.password, 10);
    console.log('👀 HashedPassword : ', hashedPassword);
    createUserInput.password = hashedPassword;
    return this.userService.create({
      createUserInput,
    });
  }

  @UseGuards(GqlAuthAccessGuard) // 방어막을 쳐주는거임 => 여길 통과 못하면 밑에 리턴이 안되는거임
  // AuthGuard안에 ' ' 는 여러가지 이름이 붙을 수 있음  // google login 이면 google 쓰고 // 지금은 일단 access
  @Query(() => User)
  fetchUser(@CurrentUser() currentUser: any) {
    console.log('🌼 currentUser는 ', currentUser);
    return this.userService.findOne({ email: currentUser.email });
  }

  @Query(() => [User])
  async fetchUsers() {
    return this.userService.findAll();
  }

  @Query(() => [User])
  async fetchTattooists() {
    return this.userService.findTattooists();
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => User)
  async updateUser(
    @CurrentUser() currentUser: any,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return await this.userService.update({
      id: currentUser.id,
      updateUserInput,
    });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Boolean)
  async deleteUser(@CurrentUser() currentUser: any) {
    return await this.userService.delete({ id: currentUser.id });
  }
}
