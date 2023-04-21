import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  large?: boolean;
  small?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({
  className,
  children,
  primary,
  secondary,
  large,
  small,
  type,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2.5 flex-col rounded-lg border-none text-white cursor-pointer px-[179px] py-[21px] hover:bg-primary font-bold ${
        className && `${className}`
      } ${secondary && "bg-secondary"} ${large && "button--large"} ${
        small && "button--small"
      }`}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
