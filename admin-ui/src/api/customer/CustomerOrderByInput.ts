import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  desiredRole?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
