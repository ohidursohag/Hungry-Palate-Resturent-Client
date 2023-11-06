import FoodItemDataForm from "../Components/FoodItemDataForm/FoodItemDataForm";
import Title from "../Components/Shared/Title";
import useAuth from "../Hooks/useAuth";


const AddFoodItems = () => {
   const { user } = useAuth()
   // console.log(user?.displayName);
   const handleAddNewFoodItem = (e) => {
      e.preventDefault()
      const form = e.target;
      const newFoodItem = {
         foodName: form.foodName.value ||'Not Available',
         quantity: form.quantity.value ||'Not Available',
         category: form.category.value ||'Not Available',
         foodImage: form.foodImage.value ||'Not Available',
         foodPrice: form.foodPrice.value ||'Not Available',
         foodRatings: form.foodRatings.value ||'Not Available',
         foodOwnerName: `${ user?.email }`||'Not Available',
         foodOwnerEmail: `${user?.displayName}` ||'Not Available',
         foodOrigin: form.foodOrigin.value || 'Not Available',
         shortDescription: {
            testOrFlavor: form.testOrFlavor.value || 'Not Available',
            ingredients: form.ingredients.value || 'Not Available',
            makingProcess: form.makingProcess.value || 'Not Available',
         },
         totalOrderCount: 0 ,        
      }
console.log(newFoodItem);
   }
   return(
      <div className="container mx-auto py-10 px-2">
         <div className="my-10">
            <Title>Add Food Items</Title>
         </div>
         <form onSubmit={handleAddNewFoodItem} className="bg-[#DCB342]/70 backdrop-blur-sm rounded">
            <FoodItemDataForm buttonName={'Add Item'}></FoodItemDataForm>
         </form>
      </div>
   )}
export default AddFoodItems;