import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isLoading?: boolean;
}
const Button = ({ children, isLoading, ...rest }: IButtonProps) => {
    return (
        <button disabled={isLoading} {...rest} className="w-full mt-5 max-w-[400px] h-14 bg-primary hover:bg-primary-100 transition duration-300 ease-in-out cursor-pointer color-neutro-700 font-semibold rounded-xl">
            {children}
        </button>
    );
}

export default Button;