export const Section = ({
  children,
  color = "white",
  ...props
}: {
  children: React.ReactNode;
  color?: "black" | "white";
  className?: string;
  [key: string]: any;
}) => {
  return (
    <section
      className={`flex justify-center ${
        color === "white" ? "bg-primary" : "bg-secondary"
      } w-full`}
    >
      <div
        {...props}
        className={`max-w-[1200px] flex flex-col w-full px-8 py-20 ${
          color !== "white" ? "text-primary" : "text-secondary"
        } ${props.className || ""}`}
      >
        {children}
      </div>
    </section>
  );
};
