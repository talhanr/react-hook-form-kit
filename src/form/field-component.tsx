import { FieldComponents, FieldProps, FieldType } from "../types";
import { ButtonField, DivField, InputField } from "./fields";

const fieldComponents: FieldComponents = {
  Input: InputField,
  Button: ButtonField,
  Div: DivField,
};
export const FieldComponent = <T extends FieldProps>(
  type: FieldType,
  props: T
): JSX.Element => {
  const Component = fieldComponents[type] as React.FC<Record<string, any>>;
  return <Component {...props} />;
};
