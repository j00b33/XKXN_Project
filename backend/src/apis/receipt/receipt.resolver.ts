import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser, ICurrentUser } from 'src/commons/auth/gql-user.param';
import { Receipt } from './entities/receipt.entity';
import { ReceiptService } from './receipt.service';

@Resolver()
export class ReceiptResolver {
  constructor(private readonly receiptService: ReceiptService) {}

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Receipt)
  async createReceipt(
    @Args('impUid') impUid: string,
    @Args('price') price: number,
    @Args('tattooId') tattooId: string,
    @CurrentUser() currentUser: ICurrentUser,
  ) {
    console.log(price, ': Price🍦 impUid: ', impUid);
    console.log('👻 TattooId: ', tattooId);
    console.log('😆 CurrentUser: ', currentUser);
    return await this.receiptService.create({
      impUid,
      price,
      tattooId,
      currentUser,
    });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Receipt)
  async deleteReceipt(
    @Args('impUid') impUid: string,
    @Args('price') price: number,
    @Args('tattooId') tattooId: string,
    @CurrentUser() currentUser: ICurrentUser,
  ) {
    return await this.receiptService.refund({
      impUid,
      price,
      tattooId,
      currentUser,
    });
  }
}
