
import { NavLink } from 'react-router-dom';
import avaterPlaceHolder from '../../assets/Icon/avater.png'
const Profile = () => {
   return (
      <div id='profileDropdown' tabIndex={0} className="dropdown flex justify-center items-center">         
            <button className="btn btn-circle md:btn-md p-0 mx-auto">
               <img src={avaterPlaceHolder} />
            </button>
         <div tabIndex={0} className="dropdown-content  z-[1] menu pt-5 md:shadow md:bg-base-100 rounded-lg w-max md:right-0 top-[40px] space-y-4">
 
            <NavLink to="/user/my-food-cart" className={({ isActive }) => isActive ? 'btn  bg-[#DCB342]/70 hover:bg-[#DCB342] rounded-[4px] text-black border-none btn-sm  normal-case' : 'btn btn-ghost rounded-[4px] btn-sm normal-case'}>
                  My Cart
               </NavLink>

            <NavLink to="/user/my-added-food" className={({ isActive }) => isActive ? 'btn  bg-[#DCB342]/70 hover:bg-[#DCB342] rounded-[4px] text-black border-none btn-sm  normal-case' : 'btn btn-ghost rounded-[4px]  btn-sm normal-case'}>
                  My Added Foods
               </NavLink>

            <NavLink to="/user/add-food" className={({ isActive }) => isActive ? 'btn  bg-[#DCB342]/70 hover:bg-[#DCB342] rounded-[4px] text-black border-none btn-sm  normal-case' : 'btn btn-ghost rounded-[4px] btn-sm normal-case'}>
                  Add Foood Item
               </NavLink>           
         </div>
        
      </div>
   )
}
export default Profile;