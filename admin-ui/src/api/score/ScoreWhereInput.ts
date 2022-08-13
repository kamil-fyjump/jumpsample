import { StringFilter } from "../../util/StringFilter";
import { RoleScoreListRelationFilter } from "../roleScore/RoleScoreListRelationFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ScoreWhereInput = {
  id?: StringFilter;
  roleScore?: RoleScoreListRelationFilter;
  userId?: CustomerWhereUniqueInput;
};
