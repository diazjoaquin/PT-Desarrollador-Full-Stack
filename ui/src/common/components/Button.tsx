import React, { ButtonHTMLAttributes } from "react";
import { ButtonType } from "../../types/button.type";
import { Loader } from "./Loader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  type: ButtonType;
  loading?: boolean;
}
export const Button: React.FC<ButtonProps> = ({label, type, loading}) => {
  return ( 
    <button
      type={type} 
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      {loading ? <Loader /> : label}
    </button>
  )
}