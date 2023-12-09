import { useParams } from "react-router-dom";
import FoodItemDataForm from "../Components/Forms/FoodItemDataForm";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
import Title from "../Components/Shared/Title";
import useGetSingleFoodById from "../Hooks/useGetSingleFoodById";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet";



const UpdateFooditem = () => {
   const { id } = useParams();
   const queryClient = useQueryClient()
   // console.log(email);
   const axios = useAxios()
   const { data: existingfoodData, isLoading, isError, } = useGetSingleFoodById(id);

   const { mutate } = useMutation({
      mutationKey: ['foodById'],
      mutationFn: (updatedFoodData) => {
         console.log(updatedFoodData);
         return axios.patch(`/user/update-food/${id}`, updatedFoodData)
      },
      onSuccess: () => {
         Swal.fire({
            icon: "success",
            title: "Item Successfuly Updated",
            showConfirmButton: false,
            timer: 1500
         });
         queryClient.invalidateQueries({ queryKey: ["foodById"] });
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


   const handleUpdateFoodItem = (e) => {
      e.preventDefault()
      const form = e.target;
      const updatedFoodData = {
         foodName: form.foodName.value || 'Not Available',
         availableQuantity: form.availableQuantity.value || 'Not Available',
         foodCategory: form.foodCategory.value || 'Not Available',
         foodImage: form.foodImage.value || 'Not Available',
         price: form.price.value || 'Not Available',
         ratings: form.ratings.value || 'Not Available',
         foodOrigin: form.foodOrigin.value || 'Not Available',
         shortDescription: {
            TasteAndFlavor: form.TasteAndFlavor.value || 'Not Available',
            Ingredients: form.Ingredients.value || 'Not Available',
            MakingProcedure: form.MakingProcedure.value || 'Not Available',
         },
         
      }
      // console.log(updatedFoodData);

      mutate(updatedFoodData)
   }

  
   return (
      <div>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Hungry Plate | Update Food</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <div className="container mx-auto py-[120px] px-2">
            <div className="my-10">
               <Title>Update Food Items</Title>
            </div>
            <form onSubmit={handleUpdateFoodItem} className="bg-[#DCB342]/70 backdrop-blur-sm rounded">
               <FoodItemDataForm buttonName={'Update'} existingfoodData={existingfoodData}></FoodItemDataForm>
            </form>
         </div>
      </div>
   )
}
export default UpdateFooditem;