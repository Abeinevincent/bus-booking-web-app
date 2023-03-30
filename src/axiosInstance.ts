import axios from "axios"
export const myAPIClient = axios.create({
    baseURL: `${import.meta.env.VITE_HOME_URL}`,
    headers: {
        token: localStorage.getItem("token")
    }
})