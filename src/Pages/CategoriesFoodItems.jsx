import { useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
import Title from "../Components/Shared/Title";
import capitalizeWords from "../Components/Utilities/capitalizeWords";
import FoodCard from "../Components/Shared/Cards/FoodCard";
import SearchAndFilterSection from "../Components/AllFoodsPage/SearchAndFilterSection";
import { useState } from "react";
import { Helmet } from "react-helmet";


const CategoriesFoodItems = () => {
   const category = useParams().category
   const axios = useAxios()
   const [page, setPage] = useState(1);
   const [query, setQuery] = useState(""); //Search query
   const [searchText, setSearchText] = useState("");
   const [sortingOrder, setSortingOrder] = useState('');
   const limit = 9;
   console.log(sortingOrder);
   console.log(searchText);

   const getTopFoods = async () => {
      const allFoodsData = await axios.get(`/food-category/${category}?sortField=price&sortOrder=${sortingOrder}&searchField=${searchText}&page=${page}&limit=${limit}&`);
      return allFoodsData.data;
   }
   // category=${filteringCategory}
   const { data: allCategoriesFoods, isLoading, isError } = useQuery({
      queryKey: ["category", sortingOrder, searchText, page],
      queryFn: getTopFoods,
   });

   if (isLoading) {
      return <LoadingAnimation></LoadingAnimation>
   }
   if (isError) {
      return <p>Something Went Wrong...</p>
   }

   const totalPages = Math.ceil(allCategoriesFoods?.totalQuerydata / limit);
   console.log(totalPages);
   const pageArray = [...Array(totalPages).fill(0)];
   console.log(pageArray);

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


   console.log(allCategoriesFoods);
   // Serch Food Item 
   const handleSearch = () => {
      setSearchText(query);
      
      setQuery('')
   }
   console.log(searchText);
   console.log(query);

   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         handleSearch();
      }
   }
   return(
      <div>
         <Helmet>
            <meta charSet="utf-8" />
            <title>{capitalizeWords(category)}</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <div className="container mx-auto py-[160px]">
            <div>
               <Title>{capitalizeWords(category)}</Title>
            </div>
            <div>
               <SearchAndFilterSection setSortingOrder={setSortingOrder} handleSearch={handleSearch} handleKeyDown={handleKeyDown} query={query} setQuery={setQuery}></SearchAndFilterSection>
            </div>
            <div >
               {
                  allCategoriesFoods?.result?.length
                     ? <div className="grid grid-cols-6 gap-4">
                        {
                           allCategoriesFoods?.result?.map(food => <FoodCard key={food._id} food={food} ></FoodCard>)
                        }
                     </div>
                     : <div className="w-full h-[300px] flex justify-center items-center text-3xl font-bold">No Matched Data Found</div>
               }
            </div>
            {/* Pagination */}
            <div className=" flex justify-center">
               <div className="join my-7 ">
                  <button onClick={handlePrevious} className="join-item btn">{'<<'}</button>
                  {
                     pageArray?.map((item, index) => {
                        const pageNumber = index + 1;
                        return (
                           <button key={pageNumber} onClick={() => setPage(pageNumber)} className={`${pageNumber === page ? 'join-item btn btn-primary bg-[#DCB342] hover:bg-[#DCB342] border-none' : 'join-item btn'}`}>{pageNumber}</button>
                        )
                     })
                  }
                  <button onClick={handleNext} className="join-item btn">{'>>'}</button>
               </div>
            </div>
         </div>
     </div>
   )}
export default CategoriesFoodItems;