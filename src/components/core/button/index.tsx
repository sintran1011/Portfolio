import { cn } from "@/utils";
import { Button } from "@radix-ui/themes";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  type?: "success" | "normal" | "warning" | "secondary";
  width?: number | string;
  isFullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  form?: string;
  variant?: "outline" | "fill";
  disabled?: boolean;
}

const BaseButton = (props: IProps) => {
  const {
    children,
    className = "",
    type = "normal",
    width = "",
    isFullWidth = false,
    size = "sm",
    onClick = () => {},
    form = "",
    variant = "fill",
    disabled = false,
  } = props;
  const objectBgColor = {
    success: "bg-success",
    normal: "bg-white",
    secondary: "bg-white-shades-90",
    black: "bg-gray-900 text-white",
  };
  const objectSize = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  };
  const objectVariant = {
    fill: "",
    outline: "bg-transparent",
  };

  return (
    <Button
      className={cn(
        "w-fit cursor-pointer rounded-[40px] px-4 py-2 text-base font-bold leading-4 text-[#0F0F0F] hover:opacity-80",
        type === "warning"
          ? "bg-gradient-to-b from-[#FFD151] to-[#AE782C]"
          : objectBgColor[type],
        { "w-full": isFullWidth },
        objectSize[size],
        objectVariant[variant],
        className,
        { "bg-grey-10 text-white-shades-50 hover:opacity-100": disabled },
      )}
      style={{ width }}
      onClick={onClick}
      form={form}
      disabled={disabled}
      type="submit"
    >
      {children}
    </Button>
  );
};

export default BaseButton;
