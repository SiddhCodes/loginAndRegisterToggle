import React from 'react'

interface InputGroupProps { 
    label: string;
    type: string;
    placeholder?: string 
}

export const InputGroup: React.FC<InputGroupProps> = ({label, type, placeholder}) => {
  return (
    <div className="grid gap-1.5">
        <label className="text-sm font-medium leading-none text-zinc-700">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="border border-zinc-200 w-full rounded-lg px-3 py-2 text-sm outline-0 focus:ring-1 focus:ring-zinc-400 transition-all placeholder:text-zinc-400"
        />
    </div>
  )
}