import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScoreTitle } from "../score/ScoreTitle";

export const RoleScoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Backend" source="backend" />
        <NumberInput label="Business Analyst" source="businessAnalyst" />
        <NumberInput label="Data Science" source="dataScience" />
        <NumberInput label="Frontend" source="frontend" />
        <NumberInput label="QA" source="qa" />
        <NumberInput label="Sale Engineer" source="saleEngineer" />
        <ReferenceArrayInput
          source="scores"
          reference="Score"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScoreTitle} />
        </ReferenceArrayInput>
        <NumberInput label="UI/UX" source="uiUx" />
      </SimpleForm>
    </Edit>
  );
};
