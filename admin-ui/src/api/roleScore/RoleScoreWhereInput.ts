import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";

export type RoleScoreWhereInput = {
  backend?: FloatNullableFilter;
  businessAnalyst?: FloatNullableFilter;
  dataScience?: FloatNullableFilter;
  frontend?: FloatNullableFilter;
  id?: StringFilter;
  qa?: FloatNullableFilter;
  saleEngineer?: FloatNullableFilter;
  scores?: ScoreListRelationFilter;
  uiUx?: FloatNullableFilter;
};
