import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Lottie from "lottie-react";
import login from "../assets/Lottie/loginPage.json";
const LogIn = () => {
   const[showPass, setShowPass] = useState(false);
   return(
      <div>

         <div className="container mx-auto flex min-h-[calc(100vh-100px)] items-center justify-center px-2">
            <div className="hidden md:block">
               <Lottie className=" " animationData={login} loop={true} />
            </div>
            <div>
               <div className="  w-[350px] sm:w-[450px] md:w-[400px] lg:w-[450px]  bg-[#DCB342]/60">
                  <div className="py-10 text-center text-5xl text-white font-bold">LogIn</div>
                  <div className=" pb-16 px-5 lg:px-10 flex  w-full flex-col  ">

                     <form className=" space-y-8  text-center">
                        <div className="group relative">
                           <input
                              type="email" name="email" id="email" required className="peer h-14 w-full  bg-gray-100 px-4 text-sm outline-none" />
                           <label htmlFor="email" className={`absolute left-2 top-0 flex h-full  items-center pl-2 text-base transform transition-all duration-500 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white`}>Email</label>
                        </div>

                        <div className="group relative">
                           <input type={showPass ? 'text' : 'password'} name="password" id="password" required className="peer h-14 w-full  bg-gray-100 px-4 text-sm outline-none" />
                           <label htmlFor="password" className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-500 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white">Password</label>

                           <div onClick={() => setShowPass(!showPass)} className="absolute right-4 top-[15px] text-3xl">
                              {
                                 showPass ? <AiFillEyeInvisible className="text-red-500" /> : <AiFillEye />
                              }
                           </div>
                        </div>


                        <button className="h-14 w-full  bg-blue-900 text-white transition-all duration-300 hover:bg-blue-800">Sign In</button>

                        <div className="space-y-3">

                           <p className="gap-2 text-center text-white">
                              <span>Do not have an account? </span>
                              <Link to="/register" className="font-semibold text-blue-900 hover:text-blue-600">Register</Link>
                           </p>
                        </div>
                     </form>

                     <div className="flex flex-col justify-center items-center  ">
                        <div
                           className="cursor-pointer group border-white group  mt-5 inline-flex h-12 w-full items-center justify-center gap-2   border px-4 py-2 transition-colors duration-300  hover:bg-[#34A353] hover:border-[#34A353] focus:outline-none">
                           <span>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M15.5005 8.18332C15.5005 7.66664 15.4505 7.13331 15.3671 6.6333H8.15039V9.58333H12.2838C12.1171 10.5333 11.5671 11.3667 10.7504 11.9L13.2171 13.8167C14.6671 12.4667 15.5005 10.5 15.5005 8.18332Z" fill="white" />
                                 <path d="M8.14981 15.6501C10.2165 15.6501 11.9499 14.9668 13.2165 13.8001L10.7498 11.9001C10.0665 12.3668 9.18316 12.6334 8.14981 12.6334C6.14979 12.6334 4.46644 11.2834 3.84977 9.4834L1.31641 11.4334C2.61642 14.0168 5.24978 15.6501 8.14981 15.6501Z" fill="white" />
                                 <path d="M3.84978 9.46695C3.53311 8.51694 3.53311 7.48359 3.84978 6.53358L1.31642 4.56689C0.23307 6.73358 0.23307 9.28361 1.31642 11.4336L3.84978 9.46695Z" fill="white" />
                                 <path d="M8.14981 3.38327C9.23316 3.3666 10.2998 3.78327 11.0832 4.53328L13.2665 2.33326C11.8832 1.03324 10.0498 0.333233 8.14981 0.3499C5.24978 0.3499 2.61642 1.98325 1.31641 4.56661L3.84977 6.5333C4.46644 4.71661 6.14979 3.38327 8.14981 3.38327Z" fill="white" />
                              </svg>

                           </span>
                           <span className="text-sm font-medium text-white ">Google</span>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )}
export default LogIn;