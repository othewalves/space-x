import axios from 'axios';

export function setupAPIClient() {
    const api = axios.create({
        baseURL: `https://api.spacexdata.com/v4/`,
    });

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error('Erro na API:', error.response?.data || error.message);
            return Promise.reject(error);
        }
    )

    return api;
}