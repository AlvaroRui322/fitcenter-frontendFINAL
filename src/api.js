import axios from "axios";

const api = axios.create({
    baseURL: "https://fitcenterapifinal-production-4216.up.railway.app/api",
    withCredentials: true, // Puedes dejarlo si usas cookies, pero para tokens no es necesario
});

// INTERCEPTOR: antes de cada request, agrega el token en el header Authorization
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

