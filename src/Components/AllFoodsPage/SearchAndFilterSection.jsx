import useGetCatagory from "../../Hooks/useGetCatagory";
import capitalizeWords from "../Utilities/capitalizeWords";
import PropTypes from 'prop-types'

const SearchAndFilterSection = ({ setSortingOrder, setFilteringCategory }) => {
   const { data: categories } = useGetCatagory();
   // console.log(categories);

   
   return (
      <div className="flex flex-col sm:flex-row justify-end gap-5">
         <div className="flex gap-3 order-2 sm:order-1">
            {/* Filter By Category */}
            <div >
               <select onChange={(e) => setFilteringCategory(e.target.value)} className="select select-ghost w-[220px] max-w-xs">
                  <option disabled selected> Category</option>
                  {
                     categories?.map(category => <option key={category._id} value={category?.categoryName}>{capitalizeWords(category?.categoryName)}</option>)
                  }

               </select>
            </div>
            {/* Sort By Price */}
            <div>
               <select onChange={(e) => setSortingOrder(e.target.value)} className="select select-ghost w-[110px] md:w-[150px]  max-w-xs">
                  <option disabled selected>Sort By Price</option>
                  <option  value='asc'>Low to High</option>
                  <option  value='desc'>High to low</option>
               </select>
            </div>
         </div>
         {/* Search By name */}
         <div className="order-1 sm:order-2">
            <div className="flex items-center  max-w-md mx-auto bg-gray-100 rounded-lg " >
               <div className="w-full">
                  <input type="search" className="w-full px-4 py-1 text-gray-800 bg-transparent focus:outline-none"
                     placeholder="search food" />
               </div>
               <div>
                  <button type="submit" className="flex items-center bg-[#cda12b] justify-center w-12 h-12 text-white rounded-r-lg"
                  >
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                     </svg>
                  </button>
               </div>
            </div>
         </div>

      </div>
   )
};

SearchAndFilterSection.propTypes = {
   food: PropTypes.object,
   setFilteringCategory: PropTypes.func,
   setSortingOrder: PropTypes.func,

}

export default SearchAndFilterSection;