import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";


const MyFoodCart = () => {

   const { user } = useAuth();
   const email = user?.email;
   const queryClient = useQueryClient()
   // console.log(email);
   const axios = useAxios()
   const { data:orderData, isLoading, isError, refetch } = useQuery({
      queryKey: ["orderedfood"],
      queryFn: async () => {
         const orderedFoods = await axios.get(`/user/orederd-food?email=${email}`);
         return orderedFoods.data;
      },
   });

   const { mutate, isSuccess } = useMutation({
      mutationKey: ['orderedfood'],
      mutationFn: (id) => {
         return axios.delete(`/user/delete-food/${id}`)
      },
      onSuccess: () => {
         Swal.fire({
            icon: "success",
            title: "Item Successfuly Deleted",
            showConfirmButton: false,
            timer: 1500
         });
         queryClient.invalidateQueries({ queryKey: ["orderedfood"] });
      },
      throwOnError: () => {
         Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: "Please! try again",
            showConfirmButton: false,
            timer: 1500
         });
      }
   })

   if (isLoading) {
      return <LoadingAnimation></LoadingAnimation>
   }
   if (isError) {
      return <p>Something Went Wrong...</p>
   }

   const handleDeleteCartItem = (id) => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You want Remove this item!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Confirm'
      }).then(async (result) => { 
         if (result.isConfirmed) { 
            mutate(id)
           
         }

      })
   }

console.log(orderData);

   return (
      <div className="container mx-auto px-2">
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>Image</th>
                     <th>Food Name</th>
                     <th>Price</th>
                     <th>Orderd Date</th>
                     <th>Food Owner</th>
                     <th>Order Quantity</th>
                     <th></th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  {
                     orderData?.map(data => <tr key={data?._id}>
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
                           <div className="badge badge-ghost badge-sm">${data?.foodPrice}</div>
                        </td>
                        <td>{data?.date}</td>
                        <td>
                           <div>
                              <div className="font-bold">{data?.ownerName}</div>
                              <div className="text-sm opacity-50">{data?.ownerEmail}</div>
                           </div>
                        </td>
                        <td>
                           <div className="font-bold">{data?.orderQuantity
}</div>
                        </td>
                        <th>
                           <button onClick={() => handleDeleteCartItem(data?._id)} className="btn btn-ghost btn-xs">delete</button>
                        </th>
                     </tr> )
                  }                 
               </tbody>
            </table>
         </div>
      </div>
   )
}
export default MyFoodCart;