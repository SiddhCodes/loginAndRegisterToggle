import React from 'react'
import { Button } from './Button'
import { FormField } from './FormField'

interface LoginFormProps {
    state: boolean;
    onClick: (state: boolean)=> void;
}

export const LoginForm: React.FC<LoginFormProps> = ({onClick, state}) => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className='mx-auto w-full max-w-sm border border-zinc-200 shadow-sm rounded-xl overflow-hidden bg-white'>

            <div className='p-6 pb-4 flex flex-col space-y-1.5'>
                <h3 className='font-semibold text-2xl tracking-tight'>Login</h3>
                <p className='text-zinc-500 text-sm'>Enter your email below to login to your account</p>
            </div>

            <form
            onSubmit={handleSubmit}
            className='p-6 pt-0 grid gap-4'>
                <FormField label="Email" type="email" />
                
                <FormField
                  label="Password" 
                  type="password" 
                  rightLabel={
                    <a href="#" className='text-xs text-zinc-500 hover:underline underline-offset-4'>
                      Forgot your password?
                    </a>
                  } 
                />

                <div className='grid gap-2 mt-2'>
                    <Button 
                      text='Login' 
                      className='w-full bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 h-9 rounded-md px-3 text-sm font-medium transition-colors' 
                    />
                    <Button 
                      text='Login with Google' 
                      className='w-full bg-white border border-zinc-200 hover:bg-zinc-100 h-9 rounded-md px-3 text-sm font-medium transition-colors' 
                    />
                </div>

                <div className='mt-4 text-center text-sm text-zinc-500'>
                    Don't have an account?{" "}
                    <a
                    onClick={()=> onClick(!state)}
                    href="#" className='underline underline-offset-4 hover:text-zinc-900'>
                      Sign up
                    </a>
                </div>
            </form>
        </div>
    )
}