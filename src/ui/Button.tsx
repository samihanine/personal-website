export const Button = ({
  label,
  ...props
}: {
  label: string;
  [key: string]: any;
}) => {
  return (
    <button
      {...props}
      className={"bg-secondary text-primary p-2 font-bold " + props.className}
    >
      {label}
    </button>
  );
};
