import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
   return (
      <div className="!h-screen">
         <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={2000} dynamicHeight={false} showThumbs={false} swipeable={true} transitionTime={500} stopOnHover={false}>
            <div className="!h-screen bg-black/50 bg-[url('https://i.ibb.co/2SsKPs9/wedding-Banner.jpg')] bg-blend-overlay bg-center bg-cover">

               <p className="absolute inset-x-0 top-[calc(70%-100px)] sm:top-[calc(60%-100px)] md:top-[calc(50%-100px)] text-[35px] sm:text-[50px] md:text-[80px] font-semibold text-white">Elevate Your Love Story  <br /> <span className="text-[#D79E70]">with Timeless Elegance</span></p>
            </div>
            <div className="!h-screen bg-black/60 bg-[url('https://i.ibb.co/L9vV9q6/Birthday-Party.webp')] bg-blend-overlay bg-center bg-cover relative">

               <p className="absolute inset-x-0 top-[calc(70%-100px)] sm:top-[calc(60%-100px)] md:top-[calc(50%-100px)] text-[35px] sm:text-[50px] md:text-[80px] font-semibold text-white">Turning Birthdays into <br /> <span className="text-[#D79E70]">Timeless Memories</span></p>
            </div>
            <div className="!h-screen bg-black/50 bg-[url('https://i.ibb.co/jD3Z9VQ/Anivarsary.jpg')] bg-blend-overlay bg-center bg-cover">

               <p className="absolute inset-x-0 top-[calc(70%-100px)] sm:top-[calc(60%-100px)] md:top-[calc(50%-100px)] text-[35px] sm:text-[50px] md:text-[60px] xl:text-[70px] font-semibold text-white">Cherishing Love, Celebrating Togetherness <br /> <span className="text-[#D79E70]">Your Perfect Anniversary Awaits!</span></p>
            </div>
            <div className="!h-screen  bg-black/50 bg-[url('https://i.ibb.co/FHqcJjy/Engagement-Parties.webp')] bg-blend-overlay bg-center bg-cover">

               <p className="absolute inset-x-0 top-[calc(70%-100px)] sm:top-[calc(60%-100px)] md:top-[calc(50%-100px)] text-[35px] sm:text-[50px] md:text-[80px] font-semibold text-white">Crafting Unforgettable Moments of <br /> <span className="text-[#D79E70]">Love and Commitment</span></p>
            </div>
            <div className="!h-screen bg-black/50 bg-[url('https://i.ibb.co/1fsbXg6/Retirment-Parties.jpg')] bg-blend-overlay bg-center bg-cover">

               <p className="absolute inset-x-0 top-[calc(70%-100px)] sm:top-[calc(60%-100px)] md:top-[calc(50%-100px)] text-[35px] sm:text-[50px] md:text-[60px] xl:text-[70px] font-semibold text-white">Honoring a Lifetime of Achievements<br /> <span className="text-[#D79E70]">Embracing New Beginnings</span></p>
            </div>
            <div className="!h-screen  bg-black/50 bg-[url('https://i.ibb.co/NZrZq7C/Baby-shower.jpg')] bg-blend-overlay bg-center bg-cover">

               <p className="absolute inset-x-0 top-[calc(70%-100px)] sm:top-[calc(60%-100px)] md:top-[calc(50%-100px)] text-[35px] sm:text-[50px] md:text-[80px] font-semibold text-white">Where Love Begins <br /> <span className="text-[#D79E70]">Baby Showers Sparkle!</span></p>
            </div>
         </Carousel>

      </div>
   );
};

export default Banner;