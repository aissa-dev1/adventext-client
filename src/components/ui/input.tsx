import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  variant?: keyof typeof INPUT_VARIANTS;
  rounded?: keyof typeof ROUNDED_VARIANTS;
}

const INPUT_VARIANTS = {
  default:
    "border-2 bg-transparent text-foreground border-primary placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-ring",
};

const ROUNDED_VARIANTS = {
  default: "rounded-none",
  normal: "rounded-lg",
  full: "rounded-full",
};

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        "w-full px-6 py-3 bg-foreground text-background",
        INPUT_VARIANTS[props.variant || "default"],
        ROUNDED_VARIANTS[props.rounded || "default"],
        props.className
      )}
    />
  );
}
