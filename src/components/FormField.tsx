import type React from "react";

interface FormFieldProps {
    label: string;
    type: string;
    rightLabel?: React.ReactNode
}

export const FormField: React.FC<FormFieldProps> = ({ label, type, rightLabel }) => {
    return (
        <div className='grid gap-2'>
            <div className='flex items-center justify-between'>
                <label className='text-sm font-medium leading-none'>{label}</label>
                {rightLabel}
            </div>
            <input
                type={type}
                className='flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400'
            />
        </div>
    )
}

