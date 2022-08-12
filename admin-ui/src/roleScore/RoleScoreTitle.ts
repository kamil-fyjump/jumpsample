import { RoleScore as TRoleScore } from "../api/roleScore/RoleScore";

export const ROLESCORE_TITLE_FIELD = "id";

export const RoleScoreTitle = (record: TRoleScore): string => {
  return record.id || record.id;
};
