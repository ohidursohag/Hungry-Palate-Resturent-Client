import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
import { Link } from "react-router-dom";


const MyAddedFoodItems = () => {
   const { user } = useAuth();
   const email = user?.email;
   // console.log(email);
   const axios = useAxios()
   const { data: myFoodItems, isLoading, isError } = useQuery({
      queryKey: ["orderedfood"],
      queryFn: async () => {
         const myFoods = await axios.get(`/user/user-added-food?email=${email}`);
         return myFoods.data;
      },

   });


   if (isLoading) {
      return <LoadingAnimation></LoadingAnimation>
   }
   if (isError) {
      return <p>Something Went Wrong...</p>
   }
   console.log(myFoodItems);

   // const handleUpdateCartItem = (id) => {

   // }
   return (
      <div>
         <div className="container mx-auto px-2">
            <div className="overflow-x-auto">
               <table className="table">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>Image</th>
                        <th>Food Name</th>
                        <th>Price</th>
                        
                        <th>Total Sold</th>
                        <th>Avilable Quantity</th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     {
                        myFoodItems?.map(data => <tr key={data?._id}>
                           <td>
                              <div className="avatar">
                                 <div className="mask  w-20 h-16">
                                    <img src={data?.foodImage} />
                                 </div>
                              </div>
                           </td>
                           <td>
                              <div>
                                 <div className="font-bold">{data?.foodName}</div>
                              </div>
                           </td>
                           <td>
                              <div className="badge badge-ghost badge-sm">${data?.price}</div>
                           </td>
                           
                           <td>
                              <div>
                                 <div className="font-bold">{data?.totalOrderCount}
                                 </div>
                              </div>
                           </td>
                           <td>
                              <div className="font-bold">{data?.availableQuantity
                              }</div>
                           </td>
                           <th>
                              <Link to={`/user/update-food/${data?._id}`}  className="btn btn-ghost btn-xs">Update</Link>
                           </th>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}
export default MyAddedFoodItems;