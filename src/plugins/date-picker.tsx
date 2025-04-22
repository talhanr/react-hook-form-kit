// src/plugins/fields/datepicker.ts
import { useFormContext, Controller } from "react-hook-form";

const DatePicker = ({ props }: any) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field }) => <input type="date" {...field} {...props} />}
    />
  );
};
