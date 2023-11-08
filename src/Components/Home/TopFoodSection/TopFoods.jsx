import useGetAllFoods from "../../../Hooks/useGetAllFoods";
import useGetCatagory from "../../../Hooks/useGetCatagory";
import FoodCard from "../../Shared/Cards/FoodCard";
import Title from "../../Shared/Title";


const TopFoods = () => {
   const {data:category} = useGetCatagory();
   const {data:allFoods} = useGetAllFoods();
   console.log(category);
   // console.log(allFoods);



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
      </div>
   )}
export default TopFoods;