import FoodItemDataForm from "../Components/FoodItemDataForm/FoodItemDataForm";
import Title from "../Components/Shared/Title";


const UpdateFooditem = () => {

   const handleUpdateFoodItem = (e) => {
      e.preventDefault()
      const form = e.target;
      const updatedFoodData = {
         foodName: form.foodName.value || 'Not Available',
         quantity: form.quantity.value || 'Not Available',
         category: form.category.value || 'Not Available',
         foodImage: form.foodImage.value || 'Not Available',
         foodPrice: form.foodPrice.value || 'Not Available',
         foodRatings: form.foodRatings.value || 'Not Available',
         foodOrigin: form.foodOrigin.value || 'Not Available',
         shortDescription: {
            testOrFlavor: form.testOrFlavor.value || 'Not Available',
            ingredients: form.ingredients.value || 'Not Available',
            makingProcess: form.makingProcess.value || 'Not Available',
         },
      }
      console.log(updatedFoodData);
   }
   return(
      <div className="container mx-auto py-10 px-2">
         <div className="my-10">
            <Title>Update Food Items</Title>
         </div>
         <form onSubmit={handleUpdateFoodItem} className="bg-[#DCB342]/70 backdrop-blur-sm rounded">
            <FoodItemDataForm buttonName={'Update'}></FoodItemDataForm>
         </form>
      </div>
   )}
export default UpdateFooditem;