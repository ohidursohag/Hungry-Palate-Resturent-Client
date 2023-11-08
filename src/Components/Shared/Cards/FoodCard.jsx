import Rating from "react-rating";
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import PropTypes from 'prop-types'
import capitalizeWords from "../../Utilities/capitalizeWords";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
   // console.log(food);
   const { _id, foodName, foodImage, foodCategory, price, ratings, totalOrderCount } = food || {};
  
   return (
      <div className="col-span-6 sm:col-span-3  lg:col-span-2  flex flex-col items-center w-full">
         <figure className="bg-white rounded-lg mt-5 w-full">
            <img
               src={foodImage}
               className="h-[220px] 2xl:h-[270px] w-full rounded-md object-cover "
               alt=""
            />
         </figure>
         <div className="group bg-white shadow-lg rounded-lg -mt-5 w-[90%] relative duration-1000">
            <div>
               <div className="p-4">
                  <div className="space-y-5">
                     <div>
                        <h3 className="font-bold text-gray-800 text-xl">{foodName}</h3>
                        <div className="flex items-center justify-between gap-2">
                           <p className=" text-gray-600 font-light">{capitalizeWords(foodCategory)}</p>
                           <p className=""><span className="font-bold">Sold: </span> <span className="text-red-500">{totalOrderCount}</span></p>
                        </div>
                     </div>
                     <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                           <p className=" text-gray-600 font-medium pb-[5px]">{ratings}</p>
                           <Rating className="text-2xl text-amber-400"
                              emptySymbol={<AiOutlineStar></AiOutlineStar>}
                              fullSymbol={<AiTwotoneStar></AiTwotoneStar>}
                              fractions={10}
                              readonly={true}
                              initialRating={ratings}
                           />
                        </div>
                        <div className="flex flex-col items-center justify-between">
                           
                           <div className="text-2xl text-red-600 font-bold">${price}
                           </div>
                        </div>
                     </div>
                  </div>
                  
               </div>
            </div>
            <div className="bg-black/40 h-full w-full rounded-lg absolute hidden   group-hover:block  group-hover:top-0 group-hover:left-0 ">
               <div className="flex justify-center items-center h-full">
                  <Link to={`/all-foods/${_id}`} className="btn btn-outline border-2 bg-[#282531]/40 border-[#fec834] hover:border-[#fec834]   hover:bg-[#cda12b] font-bold text-gray-200 hover:text-white duration-300 normal-case px-10 text-lg ">Details</Link>
               </div>
            </div>
         </div>
      </div>

   )
}

FoodCard.propTypes = {
   food: PropTypes.object,
   // setPriceOrder: PropTypes.func.isRequired,
   // setCategory: PropTypes.func.isRequired,
}
export default FoodCard;