import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo_1.png'
const Footer = () => {
   return (
      <div className=' bg-black text-white'>
         <footer className="container mx-auto footer py-10  items-center">
            <aside className='mx-auto'>
               <div className="w-64 space-y-3  md:mx-0 mx-auto text-center md:text-left">
                  <figure>
                     <img src={logo} alt="" />
                  </figure>

                  <div className=''>
                     <h1 className='text-xl  font-semibold  text-white'>Connect with Us</h1>
                     <form className='space-y-5 '>
                        <input type="text" name="name" id="name" placeholder="Name" className=" h-10 w-full mt-1  bg-white px-4 text-sm outline-none" />
                        <input type="email" name="email" id="email" placeholder="email" className=" h-10 w-full mt-1  bg-white px-4 text-sm outline-none" />
                        <textarea name="message" id="message" className='w-full h-[100px]'></textarea>
                        <button className='font-Rancho text-xl px-2 py-2 border-[2px] border-[#DCB342] rounded-lg' type="button">Send Message</button>
                     </form>
                  </div>
               </div>
            </aside>
            <nav className='mx-auto'>
               <header className="footer-title">Services</header>
               <Link to='/all-foods' className="link link-hover">All foods</Link>
               <Link to='/blog' className="link link-hover">Blog</Link>
               <Link to='' className="link link-hover">Marketing</Link>
               <Link to='' className="link link-hover">Advertisement</Link>
            </nav>
            <nav className='mx-auto'>
               <header className="footer-title">Company</header>
               <Link to='' className="link link-hover">About us</Link>
               <Link to='' className="link link-hover">Contact</Link>
               <Link to='' className="link link-hover">Jobs</Link>
               
            </nav>
            <nav className='mx-auto'>
               <header className="footer-title">Legal</header>
               <Link to='' className="link link-hover">Terms of use</Link>
               <Link to='' className="link link-hover">Privacy policy</Link>
               
            </nav>
            <nav className='mx-auto'>
               <header className="footer-title">Follow Us On</header>
               <div className="flex gap-4 hover:cursor-pointer">
                  <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                  <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                  <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                  
               </div>
               
            </nav>
         </footer>

         <div className=' py-4 text-center '>
            <h3 className='font-Rancho text-white'>&copy; 2023 <Link className='underline text-sky-500 hover:text-sky-300' to='/'>Hungry Plate</Link> ! All Rights Reserved</h3>
         </div>
      </div>
   );
};

export default Footer;