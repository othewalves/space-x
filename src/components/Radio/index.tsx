import { Control, Controller } from "react-hook-form";
import { InputHTMLAttributes } from "react";
import { FormSchema } from "../../validators/form.validator";

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: keyof FormSchema;
    error: string;
    control: Control<FormSchema>;
    options: { value: string, label: string }[];
}

const Radio = ({
    name,
    label,
    control,
    options,
    error,
    ...rest
}: IRadioProps) => {
    return (
        <div className='w-full'>
            <label className="text-sm font-medium text-left text-neutro-500">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div>
                        {options.map((option) => (
                            <div className="flex items-center justify-start gap-1">
                                <input
                                    {...rest}
                                    type="radio"
                                    value={option.value}
                                    checked={field.value === option.value}
                                    onChange={() => field.onChange(option.value)}
                                    className="accent-blue-500"

                                />
                                <span>{option.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            />
            {error && <p className="text-red-500 text-sm w-full">{error}</p>}
        </div>
    );
}

export default Radio;