import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = ({ label, ...rest }: IInputProps) => {
    return (
        <div>
            <label className="text-sm font-medium text-left text-neutro-500">{label}</label>
            <input
                className="w-full h-14 px-4 rounded-xl border border-neutro-500 outline-none"
                {...rest}
            />
        </div>
    );
}

export default Input;