import { InputType, PartialType } from '@nestjs/graphql';
import { CreateTattooInput } from './createTattoo.input';

@InputType()
export class UpdateTattooInput extends PartialType(CreateTattooInput) {}
// PartialType: 필수 x
// OmitType : 골라서 빼고 가져올 수 있음
// PickType : 골라서 가져올 수 있음
