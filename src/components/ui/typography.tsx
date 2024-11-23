import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface H1Props extends ComponentProps<"h1"> {
  gradient?: boolean;
}

export function H1(props: H1Props) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        props.gradient && "primary__text__gradient",
        props.className
      )}
    />
  );
}

interface H3Props extends ComponentProps<"h3"> {
  gradient?: boolean;
}

export function H3(props: H3Props) {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        props.gradient && "primary__text__gradient",
        props.className
      )}
    />
  );
}

interface ParagraphProps extends ComponentProps<"p"> {
  gradient?: boolean;
}

export function P(props: ParagraphProps) {
  return (
    <p
      {...props}
      className={cn(
        "leading-7",
        props.gradient && "primary__text__gradient",
        props.className
      )}
    />
  );
}

export const Typography = {
  H1,
  H3,
  P,
};
