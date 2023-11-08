import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import useAxios from "./useAxios";


const useGetCatagory = () => {
   const axios = useAxios()
   const { data, isLoading, isFetching, refetch } = useQuery({
      queryKey: ["categories"],
      queryFn: async () => {
         const categoryData = await axios.get('/categories');
         return categoryData.data;
      },
   });
   return { data, isLoading, isFetching, refetch };
};
   
export default useGetCatagory;