export type RequireKeys<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type NativeInputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type NativeDivProps = React.HTMLProps<HTMLDivElement>;

export type RequiredNameProps = "name";

export interface ErrorType {
  message: string;
  ref?: any;
  type: string;
}
