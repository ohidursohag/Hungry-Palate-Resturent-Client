import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Components/Shared/NavbarComponents/NavBar";
import SideBar from "../Components/Shared/NavbarComponents/SideBar";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
import Footer from "../Components/Home/Footer/Footer";


const MainLayOut = () => {
   const navigation = useNavigation()
   return (
      <div className="drawer drawer-end font-roboto-slab">
         <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <NavBar/>
            {/* Page content here */}
            <div>
               {
                  navigation.state === 'loading' ? <LoadingAnimation /> : <Outlet></Outlet>
               }
            </div>
               <Footer/>
         </div>
         <SideBar></SideBar>
      </div>
   )
}
export default MainLayOut;