import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RoleScoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
