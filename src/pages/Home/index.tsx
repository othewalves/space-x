
import Rocket from '../../assets/images/rocket.png';
import Form from '../../components/Form';

const Home = () => {

    return (
        <main className="bg-color-neutro-100 w-full h-full max-w-[1200px] px-4 md:mt-15 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            <Form />
            <img
                src={Rocket}
                alt='Foguete'
                className='w-[300px] h-[300px] md:w-[400px] md:h-[400px]'
            />
        </main >
    );
}

export default Home;