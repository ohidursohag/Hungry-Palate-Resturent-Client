import AllCategory from "../Components/Home/AllCategory/AllCategory";
import TopFoods from "../Components/Home/TopFoodSection/TopFoods";


const Home = () => {
   return(
      <div className="container mx-auto px-2">
         <div className="py-[100px]">
            <TopFoods></TopFoods>
         </div>
         <div>
            <AllCategory></AllCategory>
         </div>
      </div>
   )}
export default Home;