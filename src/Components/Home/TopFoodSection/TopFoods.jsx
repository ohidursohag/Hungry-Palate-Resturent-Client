import FoodCard from "../../Shared/Cards/FoodCard";
import Title from "../../Shared/Title";


const TopFoods = () => {
   return(
      <div className="container mx-auto px-2">
         <div>
            <Title>Top Foods</Title>
         </div>
         <div className="grid grid-cols-6 gap-5">
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
         </div>
      </div>
   )}
export default TopFoods;