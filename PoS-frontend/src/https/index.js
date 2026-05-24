import axios from "axios";
import { axiosWrapper } from "./axiosWrapper";
//import { updateTable } from "../redux/slices/customerSlice";

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

//Table Endpoints
export const addTable = (data) => axiosWrapper.post("/api/table/", data);
export const getTables = () => axiosWrapper.get("/api/table");
export const updateTable= ({tableId, ...tableData}) => api.put(`/api/table/${tableId}`,tableData);
{/*export const logout = () =>
  api.post("/api/user/logout", {}, { withCredentials: true }); */}

  //Order Endpoints
  export const addOrder = (data) => api.post("/api/order/", data);
  export const getOrders = () => api.get("/api/order");
  export const updateOrderStatus = ({orderId, orderStatus}) => api.put(`/api/order/${orderId}`,{orderStatus});



