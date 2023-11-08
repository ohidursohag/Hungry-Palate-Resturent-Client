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
import UpdateFooditem from "../Pages/UpdateFooditem";
import PrivateRoute from "./PrivateRoute";
import OrderFoodItem from "../Pages/OrderFoodItem";
import FoodDetails from "../Pages/FoodDetails";

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
         {
            path: 'all-foods/:id',
            element: <FoodDetails />,
         },
      ]
   },
   {
      path: '/user',
      element: <MainLayOut></MainLayOut>,
      errorElement: <Error></Error>,
      children: [
         {
            path: 'my-added-foods',
            element: <PrivateRoute>
               <MyAddedFoodItems></MyAddedFoodItems>
            </PrivateRoute>
         },
         {
            path: 'add-food',
            element: <PrivateRoute>
               <AddFoodItems></AddFoodItems>
            </PrivateRoute>
         },
         {
            path: 'update-food',
            element: <PrivateRoute>
               <UpdateFooditem></UpdateFooditem>
            </PrivateRoute>
         },
         {
            path: 'order-food',
            element: <PrivateRoute>
               <OrderFoodItem></OrderFoodItem>
            </PrivateRoute>
         },
         {
            path: 'my-food-cart',
            element: <PrivateRoute>
               <MyFoodCart></MyFoodCart>
            </PrivateRoute>
         }
      ]
   }
])
export default mycreatedRoute