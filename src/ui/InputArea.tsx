import { Label } from "./Label";

export type InputAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label: string;
  id: string;
  [key: string]: any;
};

export const InputArea = ({ label, id, ...props }: InputAreaProps) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <Label id={id} label={label} />
      <textarea
        id={id}
        className="border border-secondary bg-white p-2"
        {...props}
      />
    </div>
  );
};
