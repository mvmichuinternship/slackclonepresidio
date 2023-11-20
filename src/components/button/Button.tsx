"use client"

import clsx from 'clsx'

type ButtonProps={
    children:string,
    classname:string,
    onclick:(e:any)=> void,
    disabled?:boolean,
    size?:string,
    outlined?:boolean,
}

export const Button = ({ children, classname,onclick,disabled,size,outlined, ...props }:ButtonProps) => (
   <div className="flex flex-col justify-center items-center py-2">
   <div className='flex flex-col justify-center items-center py-2'> 
    <button
      className={clsx ("w-[90%] lg:w-full md:w-full sm:w-full xs:w-full lg:px-4 lg:py-1  md:px-4 md:py-1 sm:px-4 sm:py-1 xs:px-3 xs:py-1 px-3 py-1 bg-blue-300 text-white  rounded shadow-md cursor-pointer outline-none border-none ",classname)}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
    </div>
    </div>
  );