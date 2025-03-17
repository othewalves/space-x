import { SelectHTMLAttributes, useEffect, useState } from 'react';
import { Options } from '../../interfaces/options';
import { SlArrowDown } from 'react-icons/sl';
import { getUpcomingTrips } from '../../services/getUpcomingTrips.service';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    error: string;
}

const Select = ({
    label,
    error,
    ...rest
}: ISelectProps) => {

    const [options, setOptions] = useState<Options[]>([]);


    const getOptions = async () => {
        const trips: Options[] = await getUpcomingTrips();
        setOptions(trips);
    }

    useEffect(() => {
        getOptions()
    }, []);

    return (
        <div className='w-full relative mb-4'>
            <label className="text-sm font-medium text-left text-neutro-500">{label}</label>
            <div className='w-full'>
                <select {...rest} className="relative w-full mt-2 h-14 pl-4 placeholder-gray-400 appearance-none rounded-xl border border-neutro-500 outline-none z-100">
                    <option className='w-full text-gray-400' value="" disabled selected >Selecione uma opção</option>
                    {options.map((option) => (
                        <option className='w-full text-neutro-500 border border-neutro-500' key={option.id} value={option.id}>{option.name}</option>
                    ))}
                </select>
                <SlArrowDown className="absolute right-4 top-14 w-3 h-3 text-neutro-500" />
            </div>
            {error.length > 0 && <span className='text-red-500 text-sm'>{error}</span>}
        </div>
    )
}

export default Select;