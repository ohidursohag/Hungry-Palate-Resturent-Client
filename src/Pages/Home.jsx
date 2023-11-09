import AllCategory from "../Components/Home/AllCategory/AllCategory";
import Banner from "../Components/Home/BannerSection/Banner";
import TopFoods from "../Components/Home/TopFoodSection/TopFoods";


const Home = () => {
   return(
      <div >

         <div>
            <Banner></Banner>
         </div>
         <div className="container mx-auto px-2">
            <div className="py-[100px]">
               <TopFoods></TopFoods>
            </div>
            <div>
               <AllCategory></AllCategory>
            </div>
         </div>

      </div>
   )}
export default Home;