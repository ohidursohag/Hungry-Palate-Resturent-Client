
import { NavLink } from 'react-router-dom';
import avaterPlaceHolder from '../../../assets/Icon/avater.png'
import auth from '../../../Config/Firebase.config';
const Profile = () => {
   const user = auth.currentUser;


   return (
      <div id='profileDropdown' tabIndex={0} className="dropdown flex justify-center items-center">
         <button className="btn btn-circle border-[3px] border-[#282531] focus:border-[#DCB342] hover:border-[#DCB342] md:btn-md p-0 mx-auto">
            <img className='rounded-full' src={user?.photoURL || avaterPlaceHolder} />
         </button>
         <div tabIndex={0} className="dropdown-content  z-[1] menu pt-5 md:shadow md:bg-base-100 rounded-lg w-max md:right-0 top-[50px] space-y-4">

            <NavLink to="/user/my-food-cart" className={({ isActive }) => isActive ? 'btn  bg-[#DCB342]/70 hover:bg-[#DCB342] rounded-[4px] text-black border-none btn-sm  normal-case' : 'btn btn-ghost rounded-[4px] btn-sm normal-case'}>
               My Cart
            </NavLink>

            <NavLink to="/user/my-added-foods" className={({ isActive }) => isActive ? 'btn  bg-[#DCB342]/70 hover:bg-[#DCB342] rounded-[4px] text-black border-none btn-sm  normal-case' : 'btn btn-ghost rounded-[4px]  btn-sm normal-case'}>
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