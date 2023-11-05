import logo from '../../assets/logo/logo_2.png'
import { AiOutlineMenu } from 'react-icons/ai'
import NavLinks from './NavLinks';
import LoginAndProfile from './LoginAndProfile';
import { Link } from 'react-router-dom';
const NavBar = () => {
   return (
      <div>
         <div className="container mx-auto navbar py-5  justify-between">

            <Link to="/">
               <img className='w-[150px]' src={logo} alt="" />
            </Link>
            <div className="flex-none hidden md:block">
               <ul className="flex items-center gap-3 ">
                  {/* Navbar menu content here */}
                  <NavLinks></NavLinks>
               </ul>
            </div>

            <div className='hidden md:block'>
               <div className="flex gap-3 items-center">
                  <LoginAndProfile></LoginAndProfile>
               </div>
            </div>

            <div className="flex-none md:hidden">
               <label htmlFor="my-drawer-3" aria-label="open sidebar" className="">
                  <AiOutlineMenu className="text-[30px] z-50"></AiOutlineMenu>
               </label>
            </div>
         </div>
     </div>
   )
}
export default NavBar;