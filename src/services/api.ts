import axios from 'axios';

export function setupAPIClient() {
    const api = axios.create({
        baseURL: `https://api.spacexdata.com/v4/`,
    });

    api.interceptors.response.use(response => {
        return response;
    })

    return api;
}