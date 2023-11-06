import Rating from "react-rating";
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
const FoodCard = () => {
   return (

      <div className="col-span-6 sm:col-span-3  lg:col-span-2  flex flex-col items-center w-full">
         <figure className="bg-white rounded-lg mt-5 w-full">
            <img
               src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
               className="h-[220px] 2xl:h-[270px] w-full rounded-md object-cover "
               alt=""
            />
         </figure>
         <div className="group bg-white shadow-lg rounded-lg -mt-5 w-[90%] relative duration-1000">
            <div>
               <div className="p-5 flex justify-between ">
                  <div className="space-y-5">
                     <div>
                        <h3 className="font-bold text-gray-800 text-xl">Geek Pizza</h3>
                        <p className=" text-gray-600 font-light">Indian Cussin</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <Rating className="text-2xl text-amber-400"
                           emptySymbol={<AiOutlineStar></AiOutlineStar>}
                           fullSymbol={<AiTwotoneStar></AiTwotoneStar>}
                           fractions={2}
                           readonly={true}
                           initialRating={4}
                        />

                     </div>
                  </div>
                  <div className="flex flex-col items-center justify-between">
                     <p className="flex-1">Total Sell: 20</p>
                     <div className="text-2xl text-red-600 font-bold">
                        $ 8.00
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-black/40 h-full w-full rounded-lg absolute hidden   group-hover:block  group-hover:top-0 group-hover:left-0 ">
               <div className="flex justify-center items-center h-full">
                  <button className="btn btn-outline border-2 bg-[#282531]/40 border-[#fec834] hover:border-[#fec834]   hover:bg-[#cda12b] font-bold text-gray-200 hover:text-white duration-300 normal-case px-10 text-lg ">Details</button>
               </div>
            </div>
         </div>
      </div>

   )
}
export default FoodCard;