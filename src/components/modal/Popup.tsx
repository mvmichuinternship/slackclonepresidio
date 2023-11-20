"use client"

import clsx from 'clsx'
import { ReactNode } from 'react'

type ModalProps={
    children:ReactNode
    classname:string,
    isVisible?:boolean,
    onClose:()=>void,
}

export const Modal = ({ children, classname,onClose,isVisible, }:ModalProps) => {
    const closeHandler = (e:any)=>{
        if(e.target.id === "popup-bg") onClose();
    }    
    if (!isVisible) return null;
    
    return(
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center' id='popup-bg' onClick={closeHandler}>
        
        <div className='w-[600px] bg-white p-10 rounded h-fit w-fit'>
        <div className=' flex justify-end -p-4 -m-4'>
            <button className='text-black text-2xl place-self-end'  onClick={()=>onClose()}>X</button>
        </div>
            {children} 
        </div>
    </div>
  );
}