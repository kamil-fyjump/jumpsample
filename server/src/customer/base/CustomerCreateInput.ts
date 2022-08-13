/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumCustomerDesiredRole } from "./EnumCustomerDesiredRole";
import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { ScoreCreateNestedManyWithoutCustomersInput } from "./ScoreCreateNestedManyWithoutCustomersInput";
import { Type } from "class-transformer";
@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumCustomerDesiredRole,
    isArray: true,
  })
  @IsEnum(EnumCustomerDesiredRole, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumCustomerDesiredRole], {
    nullable: true,
  })
  desiredRole?: Array<
    | "Frontend"
    | "Backend"
    | "DataScience"
    | "BusinessAnalyst"
    | "UiUx"
    | "Qa"
    | "SalesEngineer"
  >;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => ScoreCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => ScoreCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => ScoreCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  scores?: ScoreCreateNestedManyWithoutCustomersInput;
}
export { CustomerCreateInput };
