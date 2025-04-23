import { DivFieldProps } from "../../../types";
import { RenderField } from "../../render-field";

export const DivField = ({ props, children }: DivFieldProps) => {
  return (
    <div {...props}>
      {children?.map((fieldData, index) => (
        <RenderField key={index} {...fieldData} />
      ))}
    </div>
  );
};
