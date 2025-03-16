import { InputHTMLAttributes } from "react";
import { FormSchema } from "../../validators/form.validator";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: keyof Pick<FormSchema, 'name' | 'disease' | 'birthDate'>;
    error: string;
}

const Input = ({
    label,
    name,
    error,
    ...rest

}: IInputProps) => {
    return (
        <div className='w-full mb-4'>
            <label className="text-sm font-medium text-left text-neutro-500">{label}</label>
            <input
                name={name}
                className="w-full h-14 px-4 mt-2 rounded-xl border border-neutro-500 outline-none"
                {...rest}
            />
            {error && <span className="text-red-500 text-sm w-full">{error}</span>}
        </div>
    );
}

export default Input;