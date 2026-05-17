import axios from "axios";
import { axiosWrapper } from "./axiosWrapper";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

//api end points
export const login = (data) => api.post("/api/user/login", data);
export const register = (data) => api.post("/api/user/register",data);
export const getUserData = () => api.get("/api/user");
export const logout = () => api.post("/api/user/logout");


export const addTable = (data) => axiosWrapper.post("/api/table/", data);
export const getTables = () => axiosWrapper.get("/api/table");
{/*export const logout = () =>
  api.post("/api/user/logout", {}, { withCredentials: true }); */}



