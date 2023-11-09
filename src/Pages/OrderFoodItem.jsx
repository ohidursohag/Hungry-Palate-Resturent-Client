import { useParams } from "react-router-dom";
import FoodOrderDataForm from "../Components/Forms/FoodOrderDataForm";
import Title from "../Components/Shared/Title";
import useGetSingleFoodById from "../Hooks/useGetSingleFoodById";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
// import useAxios from "../Hooks/useAxios";


const OrderFoodItem = () => {
   const axios = useAxios()
   // const axios = useAxios()
   const { id } = useParams();
   // console.log(id);
   const { data: food, isLoading, isError } = useGetSingleFoodById(id);
   const { mutate,isSuccess } = useMutation({
      mutationKey: ['orderFood'],
      mutationFn: (orderdFoodData) => {
         return axios.post('/user/order-food', orderdFoodData)
      }     
   })
   // console.log(isSuccess);
   if (isLoading) {
      return <LoadingAnimation></LoadingAnimation>
   }
   if (isError) {
      return <p>Something Went Wrong...</p>
   }


   // console.log(food);
   // console.log(food?.foodImage);
   const handleOrderFoodItem =async (e) => {
      e.preventDefault();
      const form = e.target;
      const orderdFoodData = {
         foodName: form.foodName.value ,
         orderQuantity: form.orderQuantity.value ,
         foodPrice: form.foodPrice.value ,
         date: form.date.value ,
         customerName: form.customerName.value ,
         customerEmail: form.customerEmail.value,
         ownerName: food?.chefName || 'Not Avilable',
         ownerEmail: food?.chefEmail || 'Not Avilable',
         foodImage: food?.foodImage,
      }
      
      mutate(orderdFoodData)
      if (isSuccess) {
         Swal.fire({
            icon: "success",
            title: "Order Successfull",
            showConfirmButton: false,
            timer: 1500
         });
      } else {
         Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: "Please! try again",
            showConfirmButton: false,
            timer: 1500
         });
      }
      console.log(orderdFoodData);

   }
   return(
      <div className="container mx-auto py-10 px-2">
         <div className="my-10">
            <Title>Order Food</Title>
         </div>
         <form onSubmit={handleOrderFoodItem} className="bg-[#DCB342]/70 backdrop-blur-sm rounded">
            <FoodOrderDataForm buttonName={'Add Item'} food={food}></FoodOrderDataForm>
         </form>
      </div>
   )}
export default OrderFoodItem;