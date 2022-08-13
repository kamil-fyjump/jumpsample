import { RoleScoreWhereInput } from "./RoleScoreWhereInput";
import { RoleScoreOrderByInput } from "./RoleScoreOrderByInput";

export type RoleScoreFindManyArgs = {
  where?: RoleScoreWhereInput;
  orderBy?: Array<RoleScoreOrderByInput>;
  skip?: number;
  take?: number;
};
