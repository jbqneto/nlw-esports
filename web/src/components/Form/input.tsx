import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
}

export function Input({label, id, ...props}: InputProps) {
    return (
    <>
        { (label !== undefined) && <label htmlFor={ id }>{ label }</label> }
        <input
            id={ id } 
            {...props}
            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500" 
           />
      </>
    )
}