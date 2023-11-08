import { useState } from "react";
import SearchAndFilterSection from "../Components/AllFoodsPage/SearchAndFilterSection";
import FoodCard from "../Components/Shared/Cards/FoodCard";
import Title from "../Components/Shared/Title";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";


const AllFoodItems = () => {
   const [sortingOrder, setSortingOrder] = useState('');
   const [filteringCategory, setFilteringCategory] = useState('');
   const [page, setPage] = useState(1);
   const axios = useAxios()
   const limit = 9;

   const getFoods = async () => {
      const allFoodsData = await axios.get(`/all-food-items?sortField=price&sortOrder=${sortingOrder}&category=${filteringCategory}&page=${page}&limit=${limit}`);
      return allFoodsData.data;
   }
   const { data: allFoods, isLoading, isError} = useQuery({
      queryKey: ["allfoods", sortingOrder, filteringCategory,page],
      queryFn: getFoods,      
   });
    
   if (isLoading) {
      return <LoadingAnimation></LoadingAnimation>
   }
   if (isError) { 
      return <p>Something Went Wrong...</p>
   }
   const totalPages = Math.ceil(allFoods?.total / limit)
   // console.log(totalPages);
   const pageArray = Array(totalPages).fill(0);
   const handlePrevious = () => {

      if (page > 1) {
         setPage(page - 1)
      }
   }
   const handleNext = () => {
      if (page < totalPages) {
         setPage(page + 1)
      }
   }
   // console.log(pageArray);
   // console.log(allFoods);
   // console.log(page);

  
   return (
      <div className="container mx-auto py-[100px]">
         <div className="mb-5">
            <Title>All Food Items</Title>
         </div>
         <div>
            <SearchAndFilterSection setSortingOrder={setSortingOrder} setFilteringCategory={setFilteringCategory} ></SearchAndFilterSection>
         </div>
         <div>
            <div className="grid grid-cols-6 gap-4">
               {
                  allFoods?.result?.map(food => <FoodCard key={food._id} food={food} ></FoodCard>)
               }
            </div>
         </div>
         {/* Pagination */}
         <div className=" mx-auto">
            <div className="join my-5 ">
               <button onClick={handlePrevious} className="join-item btn">{'<<'}</button>
               {
                  pageArray?.map((item, index) => {
                     const pageNumber = index + 1;
                     return (
                        <button key={pageNumber} onClick={() => setPage(pageNumber)} className={`${pageNumber === page ? 'join-item btn btn-primary bg-[#DCB342] hover:bg-[#DCB342] border-none' :'join-item btn'}`}>{pageNumber}</button>
                     )
                  })                  
               }
               <button onClick={handleNext} className="join-item btn">{'>>'}</button>
            </div>
         </div>
      </div>
   )
}
export default AllFoodItems;