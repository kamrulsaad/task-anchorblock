import * as React from "react";

import { cn } from "../../../lib/utils";
interface InputProps {
  name: string;
  label: string;
  type: string;
  icon?: JSX.Element;
  placeholder: string;
  register: any; //eslint-disable-line
  error: any; //eslint-disable-line
  disabled?: boolean;
  className?: string;
}

const Input: React.FunctionComponent<InputProps> = (props) => {
  const {
    name,
    label,
    type = "text",
    placeholder,
    register,
    error,
    disabled,
    className,
  } = props;

  return (
    <>
      <label
        htmlFor={name}
        className="block text-[##344054] text-sm font-medium mb-[6px]"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md">
        <input
          type={type}
          className={cn(
            "shadow appearance-none border rounded-lg w-full py-[10px] px-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#D6BBFB] ",
            className,
            {
              "bg-gray-100": disabled,
              "border-[#F04438]": error,
            }
          )}
          placeholder={placeholder}
          {...register(name)}
        />
        {error && <p className="text-sm text-[#F04438] mt-1">{error}</p>}
      </div>
    </>
  );
};

export default Input;
