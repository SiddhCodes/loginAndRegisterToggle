import React from 'react'

interface ButtonProps {
    text: string;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, className, }) => {
  return (
    <button
      className={`${className || ""} w-full p-1 rounded-lg font-medium`}
    >
      {text}
    </button>
  )
}