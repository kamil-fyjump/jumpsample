import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  TextInput,
  ReferenceArrayInput,
} from "react-admin";

import { ScoreTitle } from "../score/ScoreTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Desired Role"
          source="desiredRole"
          choices={[
            { label: "Frontend", value: "Frontend" },
            { label: "Backend", value: "Backend" },
            { label: "Data Science", value: "DataScience" },
            { label: "Business Analyst", value: "BusinessAnalyst" },
            { label: "UI/UX", value: "UiUx" },
            { label: "QA", value: "Qa" },
            { label: "Sales Engineer", value: "SalesEngineer" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput
          source="scores"
          reference="Score"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScoreTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
