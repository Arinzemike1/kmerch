import { ReactNode } from "react";
import Icon from "../../Icons/icon";

interface selectProps {
  label: string;
  className?: string;
  children: ReactNode;
}

const Select = ({ label, children, className, ...restProps }: selectProps) => {
  return (
    <form className={className}>
      <label>
        {label == null ? (
          ""
        ) : (
          <div className="flex justify-between mr-4">
            <span className="text-secondary font-bold text-sm/[13px] tracking-tight">
              {label}
            </span>{" "}
            <span>
              <Icon name="tool-tip" />
            </span>
          </div>
        )}
        <select
          className="rounded-lg border-[#9a9fbf33] gap-2.5 px-3 py-0 w-[200px] h-[60px] outline-none"
          {...restProps}
        >
          {children}
        </select>
      </label>
    </form>
  );
};

export default Select;
