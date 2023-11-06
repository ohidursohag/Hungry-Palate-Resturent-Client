import Lottie from 'lottie-react';
import lodingAnimation from '../../../assets/Lottie/Loading.json'

const LoadingAnimation = () => {
   return (
      <div>
         <div className="container mx-auto min-h-screen flex justify-center items-center">
            <Lottie animationData={lodingAnimation}></Lottie>
         </div>
      </div>
   );
};

export default LoadingAnimation;