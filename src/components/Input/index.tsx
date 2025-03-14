import { InputHTMLAttributes } from "react";
import { Control, Controller } from 'react-hook-form';
import { FormSchema } from "../../validators/form.validator";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: keyof FormSchema;
    error: string;
    control: Control<FormSchema>;
}

const Input = ({
    label,
    name,
    control,
    error,
    ...rest

}: IInputProps) => {
    return (
        <div className='w-full'>
            <label className="text-sm font-medium text-left text-neutro-500">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        className="w-full h-14 px-4 rounded-xl border border-neutro-500 outline-none"
                        {...rest}
                    />
                )}
            />
            {error && <p className="text-red-500 text-sm w-full">{error}</p>}
        </div>
    );
}

export default Input;