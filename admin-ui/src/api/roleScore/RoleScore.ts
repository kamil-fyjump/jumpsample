import { Score } from "../score/Score";

export type RoleScore = {
  backend: number | null;
  businessAnalyst: number | null;
  createdAt: Date;
  dataScience: number | null;
  frontend: number | null;
  id: string;
  qa: number | null;
  saleEngineer: number | null;
  scores?: Array<Score>;
  uiUx: number | null;
  updatedAt: Date;
};
