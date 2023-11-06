import LoginAndProfile from "./LoginAndProfile";
import NavLinks from "./NavLinks";


const SideBar = () => {
   return(
      <div className="drawer-side">
         <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay  ">
         </label>

         <div className="menu p-4 w-[200px] sm:w-[250px] md:w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <NavLinks></NavLinks>
            <div className="">
               <LoginAndProfile></LoginAndProfile>
            </div>
         </div>
         <div>
            
         </div>
      </div>
   )}
export default SideBar;