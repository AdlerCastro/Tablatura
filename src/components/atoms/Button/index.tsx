import { forwardRef, Ref } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/services/utils/className.utils";
import { ButtonProps } from "./types";

const Button = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { asChild, className, children, ...rest } = props;
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(
        "bg-transparent hover:bg-zinc-700 p-2 rounded-md transition-all duration-150",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});

Button.displayName = "button";

export default Button;
