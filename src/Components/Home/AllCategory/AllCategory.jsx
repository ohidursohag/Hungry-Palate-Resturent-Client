import useGetCatagory from "../../../Hooks/useGetCatagory";
import CategoryCard from "../../Shared/Cards/CategoryCard";
import Title from "../../Shared/Title";


const AllCategory = () => {
   const {data:categories} = useGetCatagory()
   return(
      <div className=" mb-[100px]">
         <div className="mb-5">
            <Title>All Category</Title>
         </div>
         <div className="grid grid-cols-6 gap-4">
            {
               categories?.map((category) => <CategoryCard key={category._id} category={category}></CategoryCard>)
            }
         </div>
      </div>
   )}
export default AllCategory;