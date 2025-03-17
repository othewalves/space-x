import { Trip } from "../interfaces/trip";
import { api } from "./apiClient";

export const getTripDetails = async (destiny_id: string) => {
    try {
        const { data } = await api.get<Trip>(`launches/${destiny_id}`);
        return data;
    } catch (error) {
        console.error('Falha ao encontrar os dados', error)
    }
}
