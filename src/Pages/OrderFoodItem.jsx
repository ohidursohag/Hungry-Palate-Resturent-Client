import FoodOrderDataForm from "../Components/Forms/FoodOrderDataForm";
import Title from "../Components/Shared/Title";


const OrderFoodItem = () => {

   const handleOrderFoodItem = (e) => {
      e.preventDefault();
      const form = e.target;
      const newFoodItem = {
         foodName: form.foodName.value ,
         orderQuantity: form.orderQuantity.value ,
         foodPrice: form.foodPrice.value ,
         date: form.date.value ,
         customerName: form.customerName.value ,
         customerEmail: form.customerEmail.value ,
      }
      console.log(newFoodItem);

   }
   return(
      <div className="container mx-auto py-10 px-2">
         <div className="my-10">
            <Title>Order Food</Title>
         </div>
         <form onSubmit={handleOrderFoodItem} className="bg-[#DCB342]/70 backdrop-blur-sm rounded">
            <FoodOrderDataForm buttonName={'Add Item'}></FoodOrderDataForm>
         </form>
      </div>
   )}
export default OrderFoodItem;