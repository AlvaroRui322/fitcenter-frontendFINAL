import axios from "axios";

const api = axios.create({
    baseURL: "https://fitcenterapifinal-production-4216.up.railway.app/api",
    withCredentials: true,
});

// INTERCEPTOR: antes de cada request, agrego token en el header Authorization
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;

