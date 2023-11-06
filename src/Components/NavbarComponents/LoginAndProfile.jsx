import { NavLink, useLocation } from "react-router-dom";
import Profile from "./Profile";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const LoginAndProfile = () => {
   const { user, logOut } = useAuth()
   const location = useLocation()
   // console.log(user);

   const handleLogOut = () => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You want to sign out?",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Confirm'
      }).then(async (result) => {
         if (result.isConfirmed) {
            logOut()
               .then(() => {
                  Swal.fire({
                     icon: 'success',
                     title: 'Sucessfully Signed Out',
                  })
               })
               .catch(err => { console.error(err.message) })
         }

      })

   }

   return (
      <>
         {
            user
               ? <>
                  <div className="">
                     <button onClick={handleLogOut}  className= 'btn  bg-[#DCB342]/70 text-lg hover:bg-[#DCB342] text-black border-none btn-sm  normal-case w-full rounded-[4px]'>
                        Log Out
                     </button>
                  </div>
                  <div className="flex justify-center items-center mt-5 md:mt-0">
                     <Profile></Profile>
                  </div>
               </>
               : <NavLink to={location.pathname === '/login' ? '/register' : location.pathname === '/register' ? '/login' : '/login'}>
                  <span className={` btn btn-ghost rounded-[4px] btn-sm normal-case text-lg w-full ${location.pathname === '/login' || location.pathname === '/register' ? 'btn  bg-[#DCB342]/70 hover:bg-[#DCB342] rounded-[4px] text-black border-none btn-sm  normal-case ' : ''} `} >{location.pathname === '/login' ? 'Register' : location.pathname === '/register' ? 'Login' : 'Login'}</span>
               </NavLink>
         }

      </>
   )
}
export default LoginAndProfile;