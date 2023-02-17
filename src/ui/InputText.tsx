import { Label } from "./Label";

export type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  [key: string]: any;
};

export const InputText = ({ label, id, ...props }: InputTextProps) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <Label id={id} label={label} />
      <input
        type="text"
        id={id}
        className="border border-secondary bg-white p-2"
        {...props}
      />
    </div>
  );
};
