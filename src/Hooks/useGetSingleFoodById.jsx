import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useGetSingleFoodById = (id) => {

   const axios = useAxios()
   const { data, isLoading,isError, refetch } = useQuery({
      queryKey: ["foodById"],
      queryFn: async () => {
         const allFoodsData = await axios.get(`/foods/${id}`);
         return allFoodsData.data;
      },
   });
   return { data, isLoading, isError, refetch };
}
export default useGetSingleFoodById;