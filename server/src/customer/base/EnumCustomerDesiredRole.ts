/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { registerEnumType } from "@nestjs/graphql";

export enum EnumCustomerDesiredRole {
  Frontend = "Frontend",
  Backend = "Backend",
  DataScience = "DataScience",
  BusinessAnalyst = "BusinessAnalyst",
  UiUx = "UiUx",
  Qa = "Qa",
  SalesEngineer = "SalesEngineer",
}

registerEnumType(EnumCustomerDesiredRole, {
  name: "EnumCustomerDesiredRole",
});
