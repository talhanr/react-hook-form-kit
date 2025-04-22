import { FieldComponent } from "@/components";
import { Field } from "@/enums";
import { FieldType, FormField } from "@/types";

function isFieldType(type: any): type is FieldType {
  return [Field.Input, Field.Button, Field.Div].includes(type);
}
export const renderField = (fieldData: FormField) => {
  if (!fieldData?.field || !isFieldType(fieldData?.field?.type)) {
    return null;
  }

  return FieldComponent(fieldData?.field?.type, fieldData?.field);
};
