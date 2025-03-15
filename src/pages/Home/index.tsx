
import Rocket from '../../assets/images/rocket.png';
import Form from '../../components/Form';

const Home = () => {

    return (
        <main className="bg-color-neutro-100 w-full h-full max-w-[1200px] px-4 block md:mt-15 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            <img
                src={Rocket}
                alt='Foguete'
                className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] md:mt-[100px]'
            />
            <Form />
        </main >
    );
}

export default Home;