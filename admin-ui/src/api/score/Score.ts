import { RoleScore } from "../roleScore/RoleScore";
import { Customer } from "../customer/Customer";

export type Score = {
  createdAt: Date;
  id: string;
  roleScore?: Array<RoleScore>;
  updatedAt: Date;
  userId?: Customer | null;
};
