
import { useNavigate, useRouteError } from "react-router-dom";
import error404 from '../assets/image/error404.png'
const Error = () => {
   const navigate = useNavigate()
   const error = useRouteError()
   console.log(error);
   return (
      <div className="bg-[#cda12b]">
         <div className="container mx-auto min-h-screen flex  flex-col justify-center items-center gap-10 px-5">
            <figure>
               <img src={error404} alt="" />
            </figure>
            <div>
               <h1 className="text-4xl font-bold text-gray-200 text-center">Woops! nothing delicious to find here.</h1>
               <p className="text-center text-gray-200 text-2xl mt-5">Seems Like the page you were trying to find is <span className=" font-bold text-[#282531]">Not Found</span></p>

               <div className="text-center space-x-5 mt-10">
                  <button onClick={() => navigate('/')} className="btn btn-outline border-2 border-white   hover:bg-gray-200 font-bold text-gray-200 hover:text-[#cda12b] normal-case px-10 text-lg hover:border-gray-200">Go Home</button>
                  <button onClick={() => navigate(-1)} className="btn btn-outline border-2 border-white   hover:bg-gray-200 font-bold text-gray-200 hover:text-[#cda12b] normal-case px-10 text-lg hover:border-gray-200">Back</button>
               </div>
            </div>

         </div>
      </div>
   );
}
export default Error;