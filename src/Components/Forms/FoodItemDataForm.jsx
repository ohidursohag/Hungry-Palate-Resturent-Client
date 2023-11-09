import PropTypes from 'prop-types';
import useAuth from '../../Hooks/useAuth';
import useGetCatagory from '../../Hooks/useGetCatagory';
import capitalizeWords from '../Utilities/capitalizeWords';
const FoodItemDataForm = ({ buttonName, existingfoodData }) => {
   const { foodName, foodImage, availableQuantity, foodOrigin, ratings, foodCategory, price, shortDescription } = existingfoodData || {};
   const { user } = useAuth();
   const { data: categories } = useGetCatagory();
   // console.log(existingfoodData);
   return (
      <div className=" py-10 w-full ">
         <div className="w-[90%] mx-auto">
            <div className=" space-y-5 ">

               {/* 1 */}
               <div className='md:flex gap-5 space-y-5 md:space-y-0'>
                  <div className='w-full'>
                     <label htmlFor="foodName" className="text-xl font-medium "> food Name</label>
                     <input type="text" name="foodName" required defaultValue={foodName} id="foodName" placeholder="Enter food Name" className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                  </div>
                  <div className='w-full'>
                     <label htmlFor="availableQuantity" className="text-xl font-medium ">Available Quantity</label>
                     <input type="number" name="availableQuantity" required defaultValue={availableQuantity} id="availableQuantity" placeholder="Enter food Quantity" className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                  </div>
               </div>
               {/* 2*/}
               <div className='md:flex gap-5 space-y-5 md:space-y-0'>
                  <div className='w-full'>
                     <label htmlFor="foodCategory" className="text-xl font-medium ">Category</label>
                     <select className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" required name="foodCategory" id="foodCategory" >
                        <option defaultValue={foodCategory}  value={foodCategory} >{foodCategory || 'Category Name'}</option>
                        {
                           categories?.map(category => <option key={category._id} value={category?.categoryName}>{capitalizeWords(category?.categoryName)}</option>)
                        }
                     </select>
                  </div>

                  <div className='w-full'>
                     <label htmlFor="foodImage" className="text-xl font-medium ">food Image</label>
                     <input type="url" required name="foodImage" defaultValue={foodImage} id="foodImage" placeholder="Enter food Image URL" className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                  </div>
               </div>
               {/* 3 */}
               <div className='md:flex gap-5 space-y-5 md:space-y-0'>
                  <div className='w-full'>
                     <label htmlFor="price" className="text-xl font-medium ">Price</label>
                     <input type="number" step="0.01" min={.5} required name="price" defaultValue={price} id="price" placeholder="Enter food Price" className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                  </div>
                  <div className='w-full'>
                     <label htmlFor="ratings" className="text-xl font-medium ">food Ratings</label>
                     <input type="number"  required step="0.1" min={0} max={5} name="ratings" defaultValue={ratings} id="ratings" placeholder="Enter food Ratings" className="  h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                  </div>
               </div>
               {/* 4 */}
               <div className='md:flex gap-5 space-y-5 md:space-y-0'>

                  <div className='w-full'>
                     <label htmlFor="chefName" className="text-xl font-medium ">Food Owner Name</label>
                     <input type="text" readOnly name="chefName" defaultValue={user?.displayName} id="chefName" className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                  </div>
                  <div className='w-full'>
                     <label htmlFor="chefEmail" className="text-xl font-medium ">Food Owner Email</label>
                     <input type="email" readOnly name="chefEmail" defaultValue={user?.email} id="chefEmail" placeholder="Enter Food Origin" className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                  </div>

               </div>
               {/* 5 */}
               <div className='md:flex gap-5 space-y-5 md:space-y-0'>
                  
                  <div className='w-full'>
                     <label htmlFor="foodOrigin"  className="text-xl font-medium ">Food Origin</label>
                     <input type="text" name="foodOrigin" defaultValue={foodOrigin} id="foodOrigin" placeholder="Enter Food Origin" className=" h-[77px] w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                  </div>
                  <div className='w-full'>
                     <label htmlFor="TasteAndFlavor" className="text-xl font-medium ">Test/Flavor</label>
                     <textarea type="text" rows={3} name="TasteAndFlavor" defaultValue={shortDescription?.TasteAndFlavor} id="TasteAndFlavor" placeholder="Enter Test/Flavor" className="   w-full pt-1  mt-1 rounded-[4px]  bg-white px-4   outline-none" />
                  </div>
               </div>
               {/* 6 */}
               <div className='md:flex gap-5 space-y-5 md:space-y-0'>
                  <div className='w-full'>
                     <label htmlFor="Ingredients" className="text-xl font-medium ">Ingredients</label>
                     <textarea type="text" rows={3} name="Ingredients" defaultValue={shortDescription?.Ingredients} id="Ingredients" placeholder="Enter Ingredients" className="   w-full pt-1  mt-1 rounded-[4px]  bg-white px-4   outline-none" />
                  </div>
                  <div className='w-full'>
                     <label htmlFor="MakingProcedure" className="text-xl font-medium ">Making Process</label>
                     <textarea type="text" rows={3} name="MakingProcedure" defaultValue={shortDescription?.MakingProcedure} id="MakingProcedure" placeholder="Enter Making Process" className="   w-full pt-1  mt-1 rounded-[4px]  bg-white px-4   outline-none" />
                  </div>
               </div>
            </div>

            <div className="mt-7 font-Rancho ">
               <input type="submit" name="submit" id="submit" value={buttonName} className=" btn rounded-[4px] btn-outline  border-[3px] hover:bg-[#282531] text-[#282531] font-bold hover:text-[#DCB342] h-[60px] text-xl normal-case w-full " />
            </div>
         </div>
      </div>
   );
};
FoodItemDataForm.propTypes = {
   buttonName: PropTypes.string,
   existingfoodData: PropTypes.object
}
export default FoodItemDataForm;