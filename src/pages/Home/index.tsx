import Rocket from '../../assets/images/rocket.png';
import Input from '../../components/Input';
import Select from '../../components/Select';

const Home = () => {

    return (
        <main className=" bg-color-neutro-100 w-full h-full max-w-[1024px] py-4 border block mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            <img
                src={Rocket}
                alt='Foguete'
                className='w-[300px] h-[300px] md:w-[400px] md:h-[400px]'
            />
            <div>
                <h1 className='text-[32px] font-bold text-left text-neutro-500'>SPACE X</h1>
                <span className="text-base font-light text-left text-neutro-500">Do sonho à órbita, levamos você além!</span>
                <form>
                    <Select label='Selecione seu destino' />
                    <Input label='Nome completo' placeholder='Ex: José da Silva' type='email' required />
                    <Input label='Idade' placeholder='Ex: 18' type='number' required />

                </form>
            </div>
        </main >
    );
}

export default Home;