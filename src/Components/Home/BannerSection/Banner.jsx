import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
const Banner = () => {
   return (
      <div className="!h-[400px] sm:!h-[500px] lg:!h-screen">
         <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={2000} dynamicHeight={false} showThumbs={false} swipeable={true} transitionTime={500} stopOnHover={false}>
           
            <div className="relative sm:!h-[500px]  lg:!h-screen  bg-black/50 bg-[url('https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/l-intro-1645057933.jpg')] bg-blend-overlay bg-center bg-cover">
               <div className="absolute inset-x-0 top-[calc(70%-100px)] sm:top-[calc(60%-100px)] md:top-[calc(50%-100px)] space-y-5">
                  <h1 className=" text-[35px] sm:text-[50px] md:text-[80px] font-semibold text-[#DCB342]">Indian Cuisine </h1>
                  <p className="text-white text-2xl max-w-[700px]  mx-auto">{`Discover the essence of India's culinary artistry with our Indian Cuisine – a symphony of tradition, spices, and unforgettable flavors. Your journey to taste begins here.`}</p>
                  <div>
                     <Link to='/all-foods'>
                        <button className='btn btn-outline normal-case btn-lg font-Rancho text-xl hover:bg-[#DCB342] hover:text-white px-10 text-[#DCB342] py-2 border-[2px] border-[#DCB342] hover:border-[#DCB342] rounded-lg' type="button">See All Foods</button>
                     </Link>
                  </div>
               </div>
            </div>


            <div className="relative sm:!h-[500px]  lg:!h-screen  bg-black/60 bg-[url('https://static.thehoneycombers.com/wp-content/uploads/sites/4/2021/12/Golden-Monkey-Chinese-restaurant-in-Canggu-Ubud-Bali-Indonesia-1.jpeg')] bg-blend-overlay bg-center bg-cover ">

               <div className="absolute inset-x-0 top-[calc(70%-100px)] sm:top-[calc(60%-100px)] md:top-[calc(50%-100px)] space-y-5">
                  <h1 className=" text-[35px] sm:text-[50px] md:text-[80px] font-semibold text-[#DCB342]">Chinese Cuisine</h1>
                  <p className="text-white text-2xl max-w-[700px]  mx-auto">{`Embark on a flavor odyssey with our Chinese Cuisine, where every dish tells a tale of tradition, exquisite ingredients, and the culinary mastery of our chefs. Elevate your dining experience with the essence of China on your plate.`}</p>
                  <div>
                     <Link to='/all-foods'>
                        <button className='btn btn-outline normal-case btn-lg font-Rancho text-xl hover:bg-[#DCB342] hover:text-white px-10 text-[#DCB342] py-2 border-[2px] border-[#DCB342] hover:border-[#DCB342] rounded-lg' type="button">See All Foods</button>
                     </Link>
                  </div>
               </div>

            </div>


            <div className="relative sm:!h-[500px]  lg:!h-screen  bg-black/50 bg-[url('https://cdn.tasteatlas.com/images/toplistarticles/8cc45833c34a4bc99d85375ecfde18f6.jpg')] bg-blend-overlay bg-center bg-cover">

               <div className="absolute inset-x-0 top-[calc(70%-100px)] sm:top-[calc(60%-100px)] md:top-[calc(50%-100px)] space-y-5">
                  <h1 className=" text-[35px] sm:text-[50px] md:text-[80px] font-semibold text-[#DCB342]">Japanese Cuisine</h1>
                  <p className="text-white text-2xl max-w-[700px]  mx-auto">{`Indulge in the artistry of taste with our Japanese Cuisine, a fusion of tradition and innovation on every plate. Let the delicate flavors and meticulous craftsmanship transport you to the heart of Japan, where culinary excellence meets a feast for the senses.`}</p>
                  <div>
                     <Link to='/all-foods'>
                        <button className='btn btn-outline normal-case btn-lg font-Rancho text-xl hover:bg-[#DCB342] hover:text-white px-10 text-[#DCB342] py-2 border-[2px] border-[#DCB342] hover:border-[#DCB342] rounded-lg' type="button">See All Foods</button>
                     </Link>
                  </div>
               </div>
            </div>

            <div className="relative sm:!h-[500px]  lg:!h-screen   bg-black/50 bg-[url('https://sftimes.com/wp-content/uploads/2021/02/seafood3-scaled-1200x675.jpeg')] bg-blend-overlay bg-center bg-cover">

               <div className="absolute inset-x-0 top-[calc(70%-100px)] sm:top-[calc(60%-100px)] md:top-[calc(50%-100px)] space-y-5">
                  <h1 className=" text-[35px] sm:text-[50px] md:text-[80px] font-semibold text-[#DCB342]">Seafoods</h1>
                  <p className="text-white text-2xl max-w-[700px]  mx-auto">{`Dive into a world of oceanic delights with our Seafood creations. From the depths of the sea to your plate, experience the freshest, most succulent treasures crafted by our skilled chefs. Immerse yourself in a symphony of flavors from the deep blue.`}</p>
                  <div>
                     <Link to='/all-foods'>
                        <button className='btn btn-outline normal-case btn-lg font-Rancho text-xl hover:bg-[#DCB342] hover:text-white px-10 text-[#DCB342] py-2 border-[2px] border-[#DCB342] hover:border-[#DCB342] rounded-lg' type="button">See All Foods</button>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="relative sm:!h-[500px]  lg:!h-screen  bg-black/50 bg-[url('https://stylecaster.com/wp-content/uploads/2020/03/brunch-boards.jpg')] bg-blend-overlay bg-center bg-cover">

               <div className="absolute inset-x-0 top-[calc(70%-100px)] sm:top-[calc(60%-100px)] md:top-[calc(50%-100px)] space-y-5">
                  <h1 className=" text-[35px] sm:text-[50px] md:text-[80px] font-semibold text-[#DCB342]">Breakfast / Brunch</h1>
                  <p className="text-white text-2xl max-w-[700px]  mx-auto">{`Start your day with a symphony of flavors at our Breakfast/Brunch haven. From comforting classics to innovative delights, our menu transforms the morning ritual into a celebration of delectable beginnings. Wake up to a world of culinary delights that redefine the art of breakfast.`}</p>
                  <div>
                     <Link to='/all-foods'>
                        <button className='btn btn-outline normal-case btn-lg font-Rancho text-xl hover:bg-[#DCB342] hover:text-white px-10 text-[#DCB342] py-2 border-[2px] border-[#DCB342] hover:border-[#DCB342] rounded-lg' type="button">See All Foods</button>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="relative sm:!h-[500px]  lg:!h-screen   bg-black/50 bg-[url('https://parade.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxNDEyNzU2MjAzMzg4/differences-between-vegan-plant-based-jpg.jpg')] bg-blend-overlay bg-center bg-cover">

               <div className="absolute inset-x-0 top-[calc(70%-100px)] sm:top-[calc(60%-100px)] md:top-[calc(50%-100px)] space-y-5">
                  <h1 className=" text-[35px] sm:text-[50px] md:text-[80px] font-semibold text-[#DCB342]">Vegetarian / Vegan</h1>
                  <p className="text-white text-2xl max-w-[700px]  mx-auto">{`Savor the green goodness with our Vegetarian/Vegan offerings, where every dish is a masterpiece of plant-based perfection. Elevate your dining experience with the artistry of flavors, crafted exclusively from nature's bounty. Explore a world where delicious meets wholesome in our culinary ode to the vibrant world of Vegetarian and Vegan cuisine.`}</p>
                  <div>
                     <Link to='/all-foods'>
                        <button className='btn btn-outline normal-case btn-lg font-Rancho text-xl hover:bg-[#DCB342] hover:text-white px-10 text-[#DCB342] py-2 border-[2px] border-[#DCB342] hover:border-[#DCB342] rounded-lg' type="button">See All Foods</button>
                     </Link>
                  </div>
               </div>
            </div>
         </Carousel>

      </div>
   );
};

export default Banner;