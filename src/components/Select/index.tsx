import { SelectHTMLAttributes, useEffect, useState } from 'react';
// import { Controller } from 'react-hook-form';
import { Options } from '../../interfaces/options';
import { api } from '../../services/apiClient';
import { Control, Controller } from 'react-hook-form';
import { FormSchema } from '../../validators/form.validator';

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
        <div className='w-full'>
            <label className="text-sm font-medium text-left text-neutro-500">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <select {...rest} {...field} className="w-full h-14 pl-4 rounded-xl border border-neutro-500 outline-none z-100">
                        <option value="" disabled selected>Selecione uma opção</option>
                        {options.map((option) => (
                            <option key={option.id} value={option.id}>{option.name}</option>
                        ))}
                    </select>
                )}
            />
            {error.length > 0 && <span className='text-red-500 text-sm'>{error}</span>}
        </div>
    )
}

export default Select;