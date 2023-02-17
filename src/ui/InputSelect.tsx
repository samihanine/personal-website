import { Label } from "./Label";

export type InputSelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  label: string;
  id: string;
  [key: string]: any;
  options: {
    value: string;
    label: string;
  }[];
};

export const InputSelect = ({
  label,
  id,
  options,
  ...props
}: InputSelectProps) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <Label id={id} label={label} />
      <select
        id={id}
        className="border border-secondary bg-white p-2"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
