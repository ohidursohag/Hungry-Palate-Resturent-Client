import PropTypes from 'prop-types';
const FoodItemDataForm = ({ buttonName, existingfoodData }) => {
   const { foodName, foodImage, quantity, foodRatings, category, foodPrice, } = existingfoodData || {};

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
                     <label htmlFor="quantity" className="text-xl font-medium ">Available Quantity</label>
                     <input type="number" name="quantity" required defaultValue={quantity} id="quantity" placeholder="Enter food Quantity" className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                  </div>
               </div>
               {/* 2*/}
               <div className='md:flex gap-5 space-y-5 md:space-y-0'>
                  <div className='w-full'>
                     <label htmlFor="category" className="text-xl font-medium ">Category</label>
                     <select className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" required name="category" id="category" >
                        <option defaultValue={category}  value={category} >{category || 'Category Name'}</option>
                        <option value="Nike" >Nike</option>
                        <option value="Adidas">Adidas</option>
                        <option value="Gucci">Gucci</option>
                        <option value="Zara">Zara</option>
                        <option value="H&M">H&M</option>
                        <option value="Levi's">{"Levi's"}</option>
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
                     <label htmlFor="foodPrice" className="text-xl font-medium ">Price</label>
                     <input type="number" step="0.1" min={.5} required name="foodPrice" defaultValue={foodPrice} id="foodPrice" placeholder="Enter food Price" className=" h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                  </div>
                  <div className='w-full'>
                     <label htmlFor="foodRatings" required className="text-xl font-medium ">food Ratings</label>
                     <input type="number" step="0.1" min={0} max={5} name="foodRatings" defaultValue={foodRatings} id="foodRatings" placeholder="Enter food Ratings" className="  h-14 w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                  </div>
               </div>
               

              
               {/* 4 */}

               {/* 5 */}
               <div className='md:flex gap-5 space-y-5 md:space-y-0'>
                  
                  <div className='w-full'>
                     <label htmlFor="foodOrigin"  className="text-xl font-medium ">Food Origin</label>
                     <input type="text" name="foodOrigin" defaultValue={''} id="foodOrigin" placeholder="Enter Food Origin" className=" h-[77px] w-full mt-1 rounded-[4px]  bg-white px-4  outline-none" />
                  </div>
                  <div className='w-full'>
                     <label htmlFor="testOrFlavor" className="text-xl font-medium ">Test/Flavor</label>
                     <textarea type="text" rows={3} name="testOrFlavor" defaultValue={''} id="testOrFlavor" placeholder="Enter Test/Flavor" className="   w-full pt-1  mt-1 rounded-[4px]  bg-white px-4   outline-none" />
                  </div>
               </div>
               {/* 6 */}
               <div className='md:flex gap-5 space-y-5 md:space-y-0'>
                  <div className='w-full'>
                     <label htmlFor="ingredients" className="text-xl font-medium ">Ingredients</label>
                     <textarea type="text" rows={3} name="ingredients" defaultValue={''} id="ingredients" placeholder="Enter ingredients" className="   w-full pt-1  mt-1 rounded-[4px]  bg-white px-4   outline-none" />
                  </div>
                  <div className='w-full'>
                     <label htmlFor="makingProcess" className="text-xl font-medium ">Making Process</label>
                     <textarea type="text" rows={3} name="makingProcess" defaultValue={''} id="makingProcess" placeholder="Enter Making Process" className="   w-full pt-1  mt-1 rounded-[4px]  bg-white px-4   outline-none" />
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