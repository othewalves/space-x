import { InputHTMLAttributes } from "react";
// import { Controller } from 'react-hook-form';
import { FormSchema } from "../../validators/form.validator";
// import { RegisterOptions } from "react-hook-form";
// import { Control } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: keyof Pick<FormSchema, 'name' | 'disease' | 'birthDate'>;
    error: string;
    // register: RegisterOptions
    // control: Control<FormSchema>;
}

const Input = ({
    label,
    name,
    // control,
    error,
    // register
    ...rest

}: IInputProps) => {
    return (
        <div className='w-full'>
            <label className="text-sm font-medium text-left text-neutro-500">{label}</label>
            {/* <Controller
                name={name}
                // control={control}
                render={({ field }) => ( */}
            <input
                // {...field}
                name={name}
                className="w-full h-14 px-4 rounded-xl border border-neutro-500 outline-none"
                {...rest}
            />
            {/* )}
            /> */}
            {error && <span className="text-red-500 text-sm w-full">{error}</span>}
        </div>
    );
}

export default Input;