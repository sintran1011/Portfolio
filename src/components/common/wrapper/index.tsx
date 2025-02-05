import { cn } from "@/utils";

type BackgroundColor = "bg-gray-100" | "bg-gray-200" | "bg-gray-900";

interface IProps {
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  backgroundColor?: BackgroundColor;
}

const Wrapper = (props: IProps) => {
  const {
    className,
    children,
    fullWidth = false,
    backgroundColor = "bg-transparent",
  } = props;

  return (
    <section
      className={cn(
        "mx-auto",
        fullWidth ? "!px-0" : "max-w-[1440px]",
        backgroundColor ? backgroundColor : "bg-transparent",
        "px-4 lg:px-20 2xl:px-[0px]",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Wrapper;
