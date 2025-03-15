import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormSchema } from '../../validators/form.validator';

import Button from '../Button';
import Radio from '../../components/Radio';
import Input from '../../components/Input';
import Select from '../../components/Select';


const Form = () => {

    const {
        watch,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            destiny: '',
            name: '',
            age: undefined,
            hasDisease: undefined,
            disease: '',

        }
    });

    const hasDisease = watch('hasDisease');

    const navigate = useNavigate();

    const handleTakeTicket = async (dataForm: FormSchema) => {
        if (dataForm) return navigate('/boarding-pass')
    }


    return (
        <div className='w-[400px]'>
            <h1 className='text-[32px] font-bold text-left text-neutro-500'>SPACE X</h1>
            <span className="text-base font-light text-left text-neutro-500">Do sonho à órbita, levamos você além!</span>

            <form onSubmit={handleSubmit(handleTakeTicket)} className='gap-y-8 max-w-[400px] p-4'>
                <Select
                    name='destiny'
                    control={control}
                    error={errors.destiny?.message || ''}
                    aria-placeholder='Selecione uma opção'
                    label='Selecione seu destino'
                />
                <Input
                    name='name'
                    control={control}
                    type='text'
                    label='Nome completo'
                    placeholder='Ex: José da Silva'
                    error={errors.name?.message || ''}
                />
                <Input
                    name='age'
                    control={control}
                    type='number'
                    label='Idade'
                    placeholder='Ex: 18'
                    error={errors.age?.message || ''}
                />
                <Radio
                    name={'hasDisease'}
                    control={control}
                    error={errors.hasDisease?.message || ''}
                    label='Possui alguma doença?'
                    options={[
                        { value: "yes", label: "Sim" },
                        { value: "no", label: "Não" },
                    ]}
                />
                {
                    hasDisease === 'yes' &&
                    <Input
                        name='disease'
                        control={control}
                        error={errors.disease?.message || ''}
                        label='Explique sua doença, por favor'
                    />
                }
                <Button type='submit'>
                    Comprar ticket
                </Button>
            </form>
        </div>
    );
}

export default Form;