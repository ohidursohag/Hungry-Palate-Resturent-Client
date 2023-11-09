import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import FoodCard from "../../Shared/Cards/FoodCard";
import Title from "../../Shared/Title";
import LoadingAnimation from "../../Shared/LoadingAnimation/LoadingAnimation";
import { Link } from "react-router-dom";


const TopFoods = () => {
   const axios = useAxios()
   // console.log(category);
   
   const limit = 6;

   const getTopFoods = async () => {
      const allFoodsData = await axios.get(`/all-food-items?sortField=totalOrderCount&sortOrder=desc&limit=${limit} `);
      return allFoodsData.data;
   }
   // category=${filteringCategory}
   const { data: allFoods, isLoading, isError } = useQuery({
      queryKey: ["allfoods", ],
      queryFn: getTopFoods,
   });

   if (isLoading) {
      return <LoadingAnimation></LoadingAnimation>
   }
   if (isError) {
      return <p>Something Went Wrong...</p>
   }

   console.log(allFoods?.result);
   return(
      <div >
         <div>
            <Title>Top Foods</Title>
         </div>
         <div className="grid grid-cols-6 gap-4">
            {
               allFoods?.result?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
            }
         </div>
         <div className="flex justify-center items-center h-full my-5">
            <Link to={`/all-foods`} className="btn btn-outline border-2 bg-[#282531] border-[#fec834] hover:border-[#fec834]   hover:bg-[#cda12b] font-bold text-gray-200 hover:text-white duration-300 normal-case px-10 text-lg ">See All</Link>
         </div>
      </div>
   )}
export default TopFoods;