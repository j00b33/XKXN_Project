import { UseGuards } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser, ICurrentUser } from 'src/commons/auth/gql-user.param';
import { CreateTattooInput } from './dto/createTattoo.input';
import { UpdateTattooInput } from './dto/updateTattoo.input';
import { Tattoo } from './entities/tattoo.entity';
import { TattooService } from './tattoo.service';

@Resolver()
export class TattooResolver {
  constructor(
    private readonly tattooService: TattooService, //
    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  // 타투 목록 전체
  @Query(() => [Tattoo])
  async fetchTattoos() {
    return this.tattooService.findAll();
  }

  @Query(() => Tattoo)
  fetchByGenre(@Args('tattooGenreID') tattooGenreId: string) {
    return this.tattooService.findByGenre({ tattooGenreId });
  }

  //타투 한개
  @Query(() => Tattoo)
  fetchTattoo(@Args('tattooId') tattooId: string) {
    return this.tattooService.findOne({ tattooId });
  }

  // =-=-=-=-=-= 장르별 타투 조회 =-=-=-=-=-=
  @Query(() => [Tattoo])
  fetchTattooWithGenre(@Args('tattooGenreId') tattooGenreId: number) {
    return this.tattooService.findGenre({ tattooGenreId });
  }

  // 지워진 타투까지 보여주기
  @Query(() => [Tattoo])
  fetchTattooWithDeleted() {
    return this.tattooService.findWithDelete();
  }

  // ================== createTattoo ==================
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Tattoo)
  createTattoo(
    @Args('createTattooInput') createTattooInput: CreateTattooInput,
    @CurrentUser() currentUser: ICurrentUser,
  ) {
    return this.tattooService.create({ createTattooInput, currentUser });
  }

  @Mutation(() => Tattoo)
  async updateTattoo(
    @Args('tattooId') tattooId: string,
    @Args('updateTattooInput') updateTattooInput: UpdateTattooInput,
  ) {
    // 판매 완료가 되었는지 확인해보기
    await this.tattooService.checkIsStarted({ tattooId });
    // 수정하기
    return await this.tattooService.update({ tattooId, updateTattooInput });
  }

  @Mutation(() => Boolean)
  async deleteTattoo(@Args('tattooId') tattooId: string) {
    return await this.tattooService.delete({ tattooId });
  }

  // restore
  @Mutation(() => Boolean)
  async restoreTattoo(@Args('tattooId') tattooId: string) {
    return this.tattooService.restore({ tattooId });
  }
}
