import { Helmet } from "react-helmet";
import AllCategory from "../Components/Home/AllCategory/AllCategory";
import Banner from "../Components/Home/BannerSection/Banner";
import TopFoods from "../Components/Home/TopFoodSection/TopFoods";


const Home = () => {
   return(
      <div >
         <Helmet>
            <meta charSet="utf-8" />
            <title>Hungry Plate | Home</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <div>
            <Banner></Banner>
         </div>
         <div className="container mx-auto py-[100px] px-2">
            <div className="mb-[100px]">
               <TopFoods></TopFoods>
            </div>
            <div>
               <AllCategory></AllCategory>
            </div>
         </div>

      </div>
   )}
export default Home;