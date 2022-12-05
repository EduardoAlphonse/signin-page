import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <label className='flex flex-col gap-2'>
      <span className='text-xs text-zinc-700 font-semibold'>{label}</span>
      <input
        className='text-sm text-zinc-700 p-2 rounded-lg border-zinc-200 border-2 outline-none hover:border-zinc-300 focus:border-zinc-400'
        {...rest}
      />
    </label>
  );
};
