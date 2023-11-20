"use client";

import clsx from "clsx";
import { LegacyRef } from "react";

type InputFieldProps = {
  // children: string;
  classname: string;
  disabled?: boolean;
  ref: LegacyRef<HTMLInputElement> | undefined;
  type: string;
  name: string;
  label?: string;
  placeholder: string;
  value: string;
  onchange: (e:any) => void;
  size?:string,
  errors?:string,
};

export const InputField = ({
  // children,
  classname,
  label,
  name,
  onchange,
  placeholder,
  ref,
  type,
  value,
  disabled,
  size,
  errors
}: InputFieldProps) => {
  return(
  <div className="w-full flex flex-col justify-center items-center py-2">
    <div className="w-full flex flex-col justify-center items-center">
    <input
      name={name}
      onChange={onchange}
      placeholder={placeholder}
      ref={ref}
      type={type}
      value={value}
      disabled={disabled}
      className={clsx("w-[80%] lg:w-full md:w-full sm:w-full xs:w-full lg:px-4 lg:py-2  md:px-4 md:py-2 sm:px-4 sm:py-2 xs:px-3 xs:py-2 px-3 py-2 lg:text-base text-sm bg-white border border-neutral-300 rounded-md outline-blue-400 text-black  disabled:bg-neutral-700 disabled:opacity-80 disabled:cursor-not-allowed",classname)}
    />
      {/* {children} */}
    
    </div>
    <span>{errors}</span>
  </div>
);}
