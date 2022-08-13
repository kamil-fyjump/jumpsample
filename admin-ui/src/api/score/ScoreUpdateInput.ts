import { RoleScoreUpdateManyWithoutScoresInput } from "./RoleScoreUpdateManyWithoutScoresInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ScoreUpdateInput = {
  roleScore?: RoleScoreUpdateManyWithoutScoresInput;
  userId?: CustomerWhereUniqueInput | null;
};
