import { Score } from "../score/Score";

export type Customer = {
  createdAt: Date;
  desiredRole?: Array<
    | "Frontend"
    | "Backend"
    | "DataScience"
    | "BusinessAnalyst"
    | "UiUx"
    | "Qa"
    | "SalesEngineer"
  >;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  scores?: Array<Score>;
  updatedAt: Date;
};
