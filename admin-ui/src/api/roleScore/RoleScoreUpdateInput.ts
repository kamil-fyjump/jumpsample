import { ScoreUpdateManyWithoutRoleScoresInput } from "./ScoreUpdateManyWithoutRoleScoresInput";

export type RoleScoreUpdateInput = {
  backend?: number | null;
  businessAnalyst?: number | null;
  dataScience?: number | null;
  frontend?: number | null;
  qa?: number | null;
  saleEngineer?: number | null;
  scores?: ScoreUpdateManyWithoutRoleScoresInput;
  uiUx?: number | null;
};
