// import { useQuery } from "@tanstack/react-query";
// import useAxios from "../Hooks/useAxios";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
import {  useNavigate, useParams } from "react-router-dom";
import Title from "../Components/Shared/Title";
import Title2 from "../Components/Shared/Title2";
import capitalizeWords from "../Components/Utilities/capitalizeWords";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useGetSingleFoodById from "../Hooks/useGetSingleFoodById";
import { Helmet } from "react-helmet";


const FoodDetails = () => {
   const { id } = useParams()
   const { user } = useAuth()
   const navigate = useNavigate()
   console.log(id);
   const { data: food,isLoading,isError, } = useGetSingleFoodById(id);


   // console.log(food);
   // console.log(id);

   if (isLoading) {
      return <LoadingAnimation></LoadingAnimation>
   }
   if (isError) {
      return <p>Something Went Wrong...</p>
   }
   const handleOeder = () => {
      user?.email === food?.chefEmail
         ? Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You Cannot order your own Peoducts",
         })
         : navigate(`/user/order-food/${id}`)
  }
   return (
      <div>
         <Helmet>
            <meta charSet="utf-8" />
            <title>{food?.foodName}</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <div className="container mx-auto py-[50px] lg:py-[160px] px-2">
            <div className="mb-8">
               <Title>{food?.foodName}</Title>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-5 lg:gap-14 xl:gap-20 md:h-[500px] w-full">
               <div className="flex-1 order-2 space-y-3">
                  <div>
                     <span className="text-2xl font-bold">Category : </span>
                     <span className="text-xl font-medium text-gray-500">{capitalizeWords(food?.foodCategory)}</span>
                  </div>

                  <div>
                     <span className="text-2xl font-bold">Food Origin : </span>
                     <span className="text-xl font-medium text-gray-500">{food?.foodOrigin}</span>
                  </div>
                  <div>
                     <div>
                        <span className="text-2xl font-bold">Made by : </span>
                        <span className="text-xl font-medium text-gray-500">{food?.chefName}</span>
                     </div>
                     <div>
                        <span className="text-2xl font-bold ml-8">Email : </span>
                        <span className="text-xl font-medium text-gray-500">{food?.chefEmail}</span>
                     </div>

                     <div className="mt-10">
                        <div>
                           <span className="text-2xl font-bold">Total Sold : </span>
                           <span className="text-xl font-medium text-[#fe9061]">{food?.totalOrderCount}</span>
                        </div>
                        <div>
                           <span className="text-2xl font-bold">Available Quantity : </span>
                           <span className="text-xl font-medium text-[#fe9061]">{food?.availableQuantity}</span>
                        </div>
                        <div>
                           <div className="text-4xl text-red-600 font-bold mt-10">${food?.price}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div >

                     <button onClick={handleOeder} className="btn btn-outline border-2 my-5 bg-[#282531] border-[#fec834] hover:border-[#fec834]   hover:bg-[#cda12b] font-bold text-gray-200 hover:text-white duration-300 normal-case px-10 text-lg ">Order Now</button>


                  </div>
               </div>
               <div className="flex-1">
                  <img className="h-full w-full object-center object-cover rounded" src={food?.foodImage} alt="" />
               </div>
            </div>

            <div className="my-[70px]">
               <div className="mb-5 ">
                  <Title2>Description</Title2>
               </div>
               <div className="space-y-5">
                  <div>
                     <span className="text-2xl font-bold ml-8">Ingredients : </span>
                     <p className="text-xl font-medium text-gray-500 ml-8">{food?.shortDescription?.Ingredients}</p>
                  </div>
                  <div>
                     <span className="text-2xl font-bold ml-8">Taste/Flavor : </span>
                     <p className="text-xl font-medium text-gray-500 ml-8">{food?.shortDescription?.TasteAndFlavor}</p>
                  </div>
                  <div>
                     <span className="text-2xl font-bold ml-8">Taste/Flavor : </span>
                     <p className="text-xl font-medium text-gray-500 ml-8">{food?.shortDescription?.MakingProcedure}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default FoodDetails;