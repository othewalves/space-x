import { Options } from "../interfaces/options";
import { api } from "./apiClient";

export const getUpcomingTrips = async () => {
    try {
        const { data } = await api.get<Options[]>('launches/upcoming');
        return data;
    } catch (error) {
        console.error('Falha ao encontrar os dados', error)
    }
    return []
}