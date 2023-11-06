import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import Home from "../Pages/Home";
import MyAddedFoodItems from "../Pages/MyAddedFoodItems";
import AddFoodItems from "../Pages/AddFoodItems";
import MyFoodCart from "../Pages/MyFoodCart";
import Blog from "../Pages/Blog";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AllFoodItems from "../Pages/AllFoodItems";
import Error from "../Pages/Error";

const mycreatedRoute = createBrowserRouter([
   {
      path: '/',
      element: <MainLayOut></MainLayOut>,
      errorElement: <Error></Error>,
      children: [
         {
            index: true,
            element: <Home/>
         },
         {
            path:'blog',
            element: <Blog/>
         },
         {
            path: 'login',
            element: <LogIn />,
         },
         {
            path: 'register',
            element: <Register />,
         },
         {
            path: 'all-foods',
            element: <AllFoodItems />,
         },
      ]
   },
   {
      path: '/user',
      element: <MainLayOut></MainLayOut>,
      children: [
         {
            path: 'my-added-food',
            element: <MyAddedFoodItems></MyAddedFoodItems>
         },
         {
            path: 'add-food',
            element: <AddFoodItems></AddFoodItems>
         },
         {
            path: 'my-food-cart',
            element:<MyFoodCart></MyFoodCart>
         }
      ]
   }
])
export default mycreatedRoute