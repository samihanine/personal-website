export type LabelProps = { label: string; id: string };

export const Label = ({ label, id }: LabelProps) => {
  return (
    <label className="text-lg" htmlFor={id}>
      {label}
    </label>
  );
};
