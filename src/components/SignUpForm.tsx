import React from "react";
import { Button } from "./Button";
import { InputGroup } from "./InputGroup";

interface SignUpFormProps {
    state: boolean;
    onClick: (state: boolean)=> void
}

export const SignUpForm: React.FC<SignUpFormProps> = ({onClick, state}) => {
    return (
        <div className="mx-auto w-full max-w-sm border border-zinc-200 shadow-sm rounded-xl overflow-hidden bg-white">
            
            <div className="p-6 text-center">
                <h2 className="font-semibold text-2xl tracking-tight">Create an account</h2>
                <p className="text-sm text-zinc-500 mt-2">
                    Enter your details below to get started
                </p>
            </div>

            <form className="px-6 pb-4 grid gap-4">
                <InputGroup label="Full Name" type="text" placeholder="Siddhant Mul" />
                
                <InputGroup label="Email" type="email" placeholder="siddhantmul18@gmail.com" />

                <div className="grid grid-cols-2 gap-4">
                    <InputGroup label="Password" type="password" />
                    <InputGroup label="Confirm Password" type="password" />
                </div>

                <p className="text-[12px] font-medium text-zinc-500 leading-tight">
                    Must be at least 8 characters long.
                </p>

                <div className="pt-2">
                    <Button 
                        text="Create Account" 
                        className="w-full bg-zinc-900 text-white hover:bg-zinc-800 py-2 rounded-lg text-sm font-medium transition-colors" 
                    />
                </div>
            </form>

            <div className="p-6 pt-0 text-center">
                <p className="text-sm font-medium text-zinc-500">
                    Already have an account?{" "}
                    <a
                    onClick={()=> onClick(!state)}
                    href="#" className="text-zinc-900 underline underline-offset-4 hover:opacity-80">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
};