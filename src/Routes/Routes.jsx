import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import Home from "../Pages/Home";
import MyAddedFoodItems from "../Pages/MyAddedFoodItems";
import AddFoodItems from "../Pages/AddFoodItems";
import MyFoodCart from "../Pages/MyFoodCart";

const mycreatedRoute = createBrowserRouter([
   {
      path: '/',
      element: <MainLayOut></MainLayOut>,
      children: [
         {
            index: true,
            element: <Home/>
         },
         {
            path:'blog',
            element: <Home/>
         },
         {
            path: '/login',
            // element: <Login />,
         },
         {
            path: '/register',
            // element: <Register />,
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