import { SelectHTMLAttributes, useEffect, useState } from 'react';
// import { Controller } from 'react-hook-form';
import { Options } from '../../interfaces/options';
import { api } from '../../services/apiClient';
import { Control, Controller } from 'react-hook-form';
import { FormSchema } from '../../validators/form.validator';
import { SlArrowDown } from 'react-icons/sl';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: keyof FormSchema;
    error: string;
    control: Control<FormSchema>;

}

const Select = ({
    label,
    control,
    error,
    name,
    ...rest
}: ISelectProps) => {

    const [options, setOptions] = useState<Options[]>([]);

    const getOptions = async () => {
        try {
            const { data } = await api.get<Options[]>('launches/upcoming');
            setOptions(data);
            console.log(data);
        } catch (error) {
            console.log('Deu ruim: ', error);
        }
    }

    useEffect(() => {
        getOptions()
    }, [])

    return (
        <div className='w-full relative'>
            <label className="text-sm font-medium text-left text-neutro-500">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div className='w-full'>
                        <select {...rest} {...field} className="relative w-full h-14 pl-4 placeholder-gray-400 appearance-none rounded-xl border border-neutro-500 outline-none z-100">
                            <option className='w-full text-gray-400' value="" disabled selected >Selecione uma opção</option>
                            {options.map((option) => (
                                <option className='w-full text-neutro-500 border border-neutro-500' key={option.id} value={option.id}>{option.name}</option>
                            ))}
                        </select>
                        <SlArrowDown className="absolute right-4 top-12 w-3 h-3 text-neutro-500" />
                    </div>
                )}
            />

            {error.length > 0 && <span className='text-red-500 text-sm'>{error}</span>}
        </div>
    )
}

export default Select;