import { NavLink } from "react-router-dom";
import Profile from "./Profile";


const LoginAndProfile = () => {
   return(
      <>
         <div className="">
            <NavLink to="/login" className={({ isActive }) => isActive ? 'btn  bg-[#DCB342]/70 text-lg hover:bg-[#DCB342] text-black border-none btn-sm  normal-case w-full rounded-[4px]' : 'w-full btn btn-ghost text-lg btn-sm normal-case rounded-[4px]'}>
               Login
            </NavLink>
         </div>
         <div className="flex justify-center items-center mt-5 md:mt-0">
            <Profile></Profile>
         </div>
      </>
   )}
export default LoginAndProfile;