import { ScoreCreateNestedManyWithoutRoleScoresInput } from "./ScoreCreateNestedManyWithoutRoleScoresInput";

export type RoleScoreCreateInput = {
  backend?: number | null;
  businessAnalyst?: number | null;
  dataScience?: number | null;
  frontend?: number | null;
  qa?: number | null;
  saleEngineer?: number | null;
  scores?: ScoreCreateNestedManyWithoutRoleScoresInput;
  uiUx?: number | null;
};
