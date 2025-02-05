/* eslint-disable @typescript-eslint/no-explicit-any */
// import { RegisterReactHookForm } from "@/types";
import { cn } from "@/utils";
import { ReactNode } from "react";

interface InputProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
  readOnly?: boolean;
  className?: string;
  placeHolder?: string;
  error?: string;
  register: any;
}

const BaseInput = (props: InputProps) => {
  const {
    prefix,
    suffix,
    readOnly = false,
    className = "",
    error,
    placeHolder = "Please type...",
    register,
  } = props;
  return (
    <div className={cn("relative w-full")}>
      {prefix ? (
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
          {prefix}
        </div>
      ) : null}
      {suffix ? (
        <div className="absolute inset-y-0 end-0 flex items-center pe-3.5">
          {suffix}
        </div>
      ) : null}

      <input
        className={cn(
          "w-full rounded-16 border-[1px] border-gray-900 px-4 py-3 focus:outline-none",
          {
            "ps-10": !!prefix,
          },
          {
            "pe-12": !!suffix,
          },
          "!bg-grey-10 placeholder-gray-500",
          "disabled:border-gray-300 disabled:bg-[#EEEEEE] disabled:text-gray-500",
          error
            ? "!border-error text-red-500"
            : "text-gray-800 enabled:border-gray-900 enabled:hover:border-gray-900 enabled:focus:border-gray-900",
          readOnly &&
            "enabled:hover:border-transparent enabled:focus:border-transparent",
          className,
        )}
        readOnly={readOnly}
        placeholder={placeHolder}
        {...register}
      />
      {error ? (
        <p className="text-sm leading-[22px] text-error">{error}</p>
      ) : null}
    </div>
  );
};

export default BaseInput;
