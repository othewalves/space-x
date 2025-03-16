import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

import AstronautPNG from '../../assets/images/astrounaut.png';
import { api } from "../../services/apiClient";
import { Trip } from "../../interfaces/trip";
import { calculateAge } from "../../utils/calculateAge";
import { formatDate } from "../../utils/formatDate";
import Button from "../../components/Button";

import { jsPDF } from 'jspdf'

const BoardingPass = () => {
    const { user } = useContext(UserContext);
    const [trip, setTrip] = useState<Trip>();

    const generatePDF = () => {
        const doc = new jsPDF();

        doc.addImage(AstronautPNG, 'PNG', 15, 100, 50, 50)
        doc.setFont("Arial", "bold");
        doc.text("Cartão de embarque", 20, 20);

        doc.setFont("Arial", "normal");
        doc.text(`Passageiro: ${user.name}`, 20, 40);

        doc.setFont("Arial", "normal");
        doc.text(`Possui alguma doença: ${user.hasDisease} - ${user.disease}`, 20, 50);

        doc.setFont("Arial", "normal");
        doc.text(`Destino: ${trip?.name}`, 20, 70);

        doc.setFont("Arial", "normal");
        doc.text(`Data de embarque: ${trip?.date_local && formatDate(trip?.date_local)}`, 20, 80);

        doc.save(`cartao-embarque.pdf`);
    };

    const getTrip = async () => {
        try {
            const { data } = await api.get<Trip>(`launches/${user.destiny}`);
            setTrip(data)
            console.log(data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTrip();
    }, [])

    return (

        <main className="bg-color-neutro-100 w-full h-full max-w-[1200px] px-4 md:mt-15 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            <img src={AstronautPNG} alt="Astronauta"
                className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] md:mt-[100px]'
            />
            <div className="w-[503.26px] mt-12">
                <div
                    className="w-[503.26px] p-8 rounded-[32px] bg-neutro-100"
                    style={{ boxShadow: "4px 4px 8px 0 rgba(30,30,30,0.25)" }}
                >
                    <h2 className="text-[22px] font-medium text-center text-neutro-500">Cartão de embarque</h2>

                    <div className="mt-6 mb-4">
                        <p className="text-base font-medium text-left text-neutro-500">
                            PASSAGEIRO
                        </p>
                        <p className=" text-[32px] font-bold text-left text-neutro-500">
                            {user?.name}
                        </p>
                    </div>
                    <p className="text-base font-medium text-left text-neutro-500">
                        IDADE
                    </p>
                    <p className="text-2xl font-medium text-left text-neutro-500">
                        {calculateAge(user?.birthDate)}
                    </p>
                    <p className="text-base mt-4 font-medium text-left text-neutro-500">
                        POSSUI DOENÇA?
                    </p>
                    <p className="text-2xl  mb-15 font-medium text-left  text-wrap text-neutro-500">
                        {user?.hasDisease}  {`- ${user?.disease}`}
                    </p>
                    <div className=" border-t-2 border-dashed border-neutro-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className=" text-base mt-2 font-medium text-left text-neutro-500">
                                    VOO
                                </p>
                                <p className=" text-[32px] font-bold text-left text-neutro-500">
                                    {trip?.name}
                                </p>
                                <p className="text-base font-medium text-left text-neutro-500">
                                    DATA
                                </p>
                                <p className="text-2xl font-medium text-left text-wrap text-neutro-500">
                                    {trip?.date_local && formatDate(trip?.date_local)}
                                </p>
                            </div>
                            <img
                                src={trip?.links.patch.large ? trip?.links.patch.large : 'https://s1.static.brasilescola.uol.com.br/be/2020/10/foguete.jpg'}//"https://s1.static.brasilescola.uol.com.br/be/2020/10/foguete.jpg"
                                alt={trip?.name}
                                className="w-[100px] h-[100px] rounded-2xl" />
                        </div>
                    </div>
                    <Button onClick={generatePDF}>Baixar cartão de embarque</Button>
                </div>
            </div>
        </main>
    );
}

export default BoardingPass;