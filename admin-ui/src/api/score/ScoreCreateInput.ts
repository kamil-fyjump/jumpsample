import { RoleScoreCreateNestedManyWithoutScoresInput } from "./RoleScoreCreateNestedManyWithoutScoresInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ScoreCreateInput = {
  roleScore?: RoleScoreCreateNestedManyWithoutScoresInput;
  userId?: CustomerWhereUniqueInput | null;
};
