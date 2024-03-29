/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RoleScoreWhereUniqueInput } from "../../roleScore/base/RoleScoreWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class RoleScoreUpdateManyWithoutScoresInput {
  @Field(() => [RoleScoreWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoleScoreWhereUniqueInput],
  })
  connect?: Array<RoleScoreWhereUniqueInput>;

  @Field(() => [RoleScoreWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoleScoreWhereUniqueInput],
  })
  disconnect?: Array<RoleScoreWhereUniqueInput>;

  @Field(() => [RoleScoreWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RoleScoreWhereUniqueInput],
  })
  set?: Array<RoleScoreWhereUniqueInput>;
}
export { RoleScoreUpdateManyWithoutScoresInput };
