import { ScoreCreateNestedManyWithoutCustomersInput } from "./ScoreCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
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
  scores?: ScoreCreateNestedManyWithoutCustomersInput;
};
