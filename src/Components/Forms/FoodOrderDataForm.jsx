import { useState } from "react";
import { TodayDate } from "../Utilities/TodayDate";
import useAuth from "../../Hooks/useAuth";
import PropTypes from 'prop-types'

const FoodOrderDataForm = ({ food }) => {
   console.log(food);
   const [avilableQuantity, setAvilableQuantity] = useState(food?.availableQuantity-1);
   const [orderQuantity, setOrderQuantity] = useState(1);
   const { user } = useAuth()
   
   const handleQuantityIncrement = () => {
      if (avilableQuantity > 0) {        
         setOrderQuantity(orderQuantity + 1)
         setAvilableQuantity(avilableQuantity - 1)
      }
   }
   const handleQuantityDecrement = () => {

      if (orderQuantity >1) {        
         setOrderQuantity(orderQuantity - 1)
         setAvilableQuantity(avilableQuantity + 1)
      }
   }

   
   return(
      <div>
         <div className=" py-10 w-full ">
            <div className="w-[90%] mx-auto">
               <div className=" space-y-5 ">

                  {/* 1 */}
                  <div className='md:flex gap-5 space-y-5 md:space-y-0'>
                     <div className='w-full'>
                        <label htmlFor="foodName" className="text-xl font-medium "> food Name</label>
                        <input type="text" readOnly name="foodName" required defaultValue={food?.foodName} id="foodName" className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                     </div>
                     <div className='w-full'>
                        <label htmlFor="orderQuantity" className="text-xl font-medium">
                           <span className=" flex justify-between items-center">
                              <span>Quantity</span>
                              <span className="text-base pr-[60px] self-end">Avilable: {avilableQuantity} </span>
                           </span>
                        </label>
                        <div className="flex justify-center items-center gap-5">
                           <button onClick={handleQuantityDecrement} type="button" className="btn btn-circle btn-sm text-3xl hover:bg-[#282531] hover:text-[#DCB342] border-none h-10 w-10 font-bold">-</button>
                           
                           <input type="text" name="orderQuantity" disabled id="orderQuantity" value={orderQuantity} className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                           <button onClick={handleQuantityIncrement} type="button" className="btn btn-circle btn-sm text-3xl hover:bg-[#282531] hover:text-[#DCB342] border-none h-10 w-10 font-bold">+</button>
                        </div>
                     </div>
                  </div>

                  {/* 2 */}
                  <div className='md:flex gap-5 space-y-5 md:space-y-0'>
                     <div className='w-full'>
                        <label htmlFor="foodPrice"  className="text-xl font-medium ">Price</label>
                        <input type="number" readOnly step="0.1" min={0.5} required name="foodPrice" defaultValue={food?.price} id="foodPrice"  className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                     </div>
                     <div className='w-full'>
                        <label htmlFor="date" required className="text-xl font-medium ">Date</label>
                        <input type="text" step="0.1" min={0} max={5} name="date" disabled value={TodayDate()} id="date" placeholder="Enter food Ratings" className="  h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                     </div>
                  </div>

                  {/* 3 */}
                  <div className='md:flex gap-5 space-y-5 md:space-y-0'>

                     <div className='w-full'>
                        <label htmlFor="customerName" className="text-xl font-medium ">Customer Name</label>
                        <input type="text" readOnly name="customerName" defaultValue={user?.displayName} id="customerName"  className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                     </div>
                     <div className='w-full'>
                        <label htmlFor="customerEmail" className="text-xl font-medium ">Customer Email</label>
                        <input type="email" readOnly name="customerEmail" defaultValue={user?.email} id="customerEmail" placeholder="Enter Food Origin" className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                     </div>

                  </div>

               </div>

               <div className="mt-7 font-Rancho ">
                  <input type="submit" name="submit" id="submit" value='Cofirm Order' className=" btn rounded-[4px] btn-outline  border-[3px] hover:bg-[#282531] text-[#282531] font-bold hover:text-[#DCB342] h-[60px] text-xl normal-case w-full " />
               </div>
            </div>
         </div>
      </div>
   )
}
FoodOrderDataForm.propTypes = {
   food: PropTypes.object,
} 
export default FoodOrderDataForm;