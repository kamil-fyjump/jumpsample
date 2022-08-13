import { ScoreUpdateManyWithoutCustomersInput } from "./ScoreUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  desiredRole?: Array<
    | "Frontend"
    | "Backend"
    | "DataScience"
    | "BusinessAnalyst"
    | "UiUx"
    | "Qa"
    | "SalesEngineer"
  >;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  scores?: ScoreUpdateManyWithoutCustomersInput;
};
