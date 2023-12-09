import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
   // baseURL: 'http://localhost:5000/api/v1',
   baseURL: 'https://hungry-plate-server.vercel.app/api/v1',
   withCredentials: true,
})

const useAxios = () => {
   const { logOut } = useAuth();
   instance.interceptors.response.use(
      (response) => {
         return response;
      },
      (error) => {
         if (error?.response?.status === 401 || error?.response?.status === 403) {
            logOut();
         }
      });
   return instance;
}

export default useAxios;