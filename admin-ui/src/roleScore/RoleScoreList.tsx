import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RoleScoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Role Scores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Backend" source="backend" />
        <TextField label="Business Analyst" source="businessAnalyst" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data Science" source="dataScience" />
        <TextField label="Frontend" source="frontend" />
        <TextField label="ID" source="id" />
        <TextField label="QA" source="qa" />
        <TextField label="Sale Engineer" source="saleEngineer" />
        <TextField label="UI/UX" source="uiUx" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
