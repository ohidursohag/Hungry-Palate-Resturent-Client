import  PropTypes  from "prop-types";
import capitalizeWords from "../../Utilities/capitalizeWords";
import { Link } from "react-router-dom";


const CategoryCard = ({ category }) => {
   console.log(category);
   const { categoryName, categoryImage } = category||{};
   return (
      <div className="col-span-6 sm:col-span-3  lg:col-span-2  flex flex-col items-center w-full">
         <div className="shadow-xl rounded-lg relative overflow-hidden transition duration-400 hover:-translate-y-2 w-full">
            <img
               className=" hover:-mt-2 transition-all z-10 hover:-z-10 w-full h-[300px] object-cover object-center duration-300 rounded-lg"
               src={categoryImage}
               alt=""
            />
            <div className="w-full h-full bg-opacity-60 duration-75 absolute inset-0 opacity-0 hover:opacity-100 p-2 gap-5  bg-black flex  justify-center items-center flex-col">
               <p className="text-white text-center text-xl font-bold">{capitalizeWords(categoryName)}</p>
               <Link to={`/all-foods`} className="btn btn-outline border-2 bg-[#282531]/40 border-[#fec834] hover:border-[#fec834]   hover:bg-[#cda12b] font-bold text-gray-200 hover:text-white duration-300 normal-case px-10 text-lg ">Details</Link>
            </div>
         </div>
      </div>
      
   )
}
CategoryCard.propTypes = {
   category: PropTypes.object
}
export default CategoryCard;