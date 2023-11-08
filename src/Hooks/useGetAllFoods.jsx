import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useGetAllFoods = ( ) => {

   const axios = useAxios()
   const { data, isLoading, isFetching, refetch } = useQuery({
      queryKey: ["allfoodItems"],
      queryFn: async () => {
         const allFoodsData = await axios.get(`/all-food-items`);
         return allFoodsData.data;
      },
   });
   return { data, isLoading, isFetching, refetch };


  }
export default useGetAllFoods;