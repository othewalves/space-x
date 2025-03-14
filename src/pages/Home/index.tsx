
import Rocket from '../../assets/images/rocket.png';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Radio from '../../components/Radio';
import { formSchema, FormSchema } from '../../validators/form.validator';


const Home = () => {
    const {
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

        }
    });

    const handleTakeTicket = async (dataForm: FormSchema) => {
        console.log('dados recebidos', dataForm)
    }

    return (
        <main className=" bg-color-neutro-100 w-full h-full max-w-[1024px] py-4 block mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            <img
                src={Rocket}
                alt='Foguete'
                className='w-[300px] h-[300px] md:w-[400px] md:h-[400px]'
            />
            <div>
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
                    <button type='submit'>
                        Comprar ticket
                    </button>
                </form>
            </div>
        </main >
    );
}

export default Home;