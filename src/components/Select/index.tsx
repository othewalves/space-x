import { SelectHTMLAttributes, useEffect, useState } from 'react';
// import { Controller } from 'react-hook-form';
import { Options } from '../../interfaces/options';
import { api } from '../../services/apiClient';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
}

const Select = ({ label }: ISelectProps) => {

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
        // <Controller
        //     {...rest}
        //     render={({ field, fieldState: { error } }) => (
        <div>
            <p className="text-sm font-medium text-left text-[#1e1e1e]">{label}</p>
            <select className="w-full h-14 pl-4 rounded-xl border border-neutro-500 outline-none z-100">
                <option value="" disabled>Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))}
            </select>
            {/* {error && <span className='text-red-500'>{error.message}</span>} */}
        </div>
        // )}
        // />
    )
}

export default Select;