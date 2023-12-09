import { useMutation } from "@tanstack/react-query";
import FoodItemDataForm from "../Components/Forms/FoodItemDataForm";
import Title from "../Components/Shared/Title";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const AddFoodItems = () => {
   const axios = useAxios()
   const { mutate } = useMutation({
      mutationKey: ['addFood'],
      mutationFn: (newFoodItem) => {
         return axios.post('/add-foods', newFoodItem)
      },
      onSuccess: () => {
         Swal.fire({
            icon: "success",
            title: "Food item Successfuly Added",
            showConfirmButton: false,
            timer: 1500
         });
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
   const handleAddNewFoodItem = (e) => {
      e.preventDefault()
      const form = e.target;
      const newFoodItem = {
         foodName: form.foodName.value || 'Not Available',
         availableQuantity: form.availableQuantity.value || 'Not Available',
         foodCategory: form.foodCategory.value || 'Not Available',
         foodImage: form.foodImage.value || 'Not Available',
         price: form.price.value || 'Not Available',
         ratings: form.ratings.value || 'Not Available',
         foodOrigin: form.foodOrigin.value || 'Not Available',
         chefName: form.chefName.value || 'Not Available',
         chefEmail: form.chefEmail.value || 'Not Available',
         shortDescription: {
            TasteAndFlavor: form.TasteAndFlavor.value || 'Not Available',
            Ingredients: form.Ingredients.value || 'Not Available',
            MakingProcedure: form.MakingProcedure.value || 'Not Available',
         },
         totalOrderCount: 0,
      }
      console.log(newFoodItem);
      mutate(newFoodItem)
   }
   return (
      <div>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Add New Food</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <div className="container mx-auto py-[160px] px-2">
            <div className="my-10">
               <Title>Add Food Items</Title>
            </div>
            <form onSubmit={handleAddNewFoodItem} className="bg-[#DCB342]/70 backdrop-blur-sm rounded">
               <FoodItemDataForm buttonName={'Add Item'}></FoodItemDataForm>
            </form>
         </div>
      </div>
   )
}
export default AddFoodItems;