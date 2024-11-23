import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: keyof typeof BUTTON_VARIANTS;
  rounded?: keyof typeof ROUNDED_VARIANTS;
}

const BUTTON_VARIANTS = {
  default:
    "bg-primary text-foreground border-primary focus:outline-none focus:ring-2 focus:ring-primary-ring",
  adventure:
    "bg-neutral-800 text-white border-2 border-neutral-600 text-sm uppercase font-bold tracking-widest focus:ring-2 focus:ring-neutral-500 hover:bg-neutral-700 active:bg-neutral-900 transition duration-200",
};

const ROUNDED_VARIANTS = {
  default: "rounded-full",
  normal: "rounded-lg",
  none: "rounded-none",
};

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "px-6 py-3 bg-foreground text-background",
        ROUNDED_VARIANTS[props.rounded || "default"],
        BUTTON_VARIANTS[props.variant || "default"],
        props.className
      )}
    />
  );
}
