import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavbarComponents/NavBar";
import SideBar from "../Components/NavbarComponents/SideBar";


const MainLayOut = () => {
   return(
      <div className="drawer drawer-end">
         <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <NavBar></NavBar>
            {/* Page content here */}
            <Outlet></Outlet>
         </div>
         <SideBar></SideBar>
      </div>
   )}
export default MainLayOut;