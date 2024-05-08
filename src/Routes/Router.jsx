import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp";
import CheckOut from "../pages/checkOut/CheckOut";
import Bookings from "../pages/Bookings";
import PrivateRoute from "./PrivateRoute";








const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: '/',
            element:<Home/>
        },
        {
            path:"/login",
            element: <Login/>
        },
        {
          path:"/signUp",
          element: <SignUp/>

        },
        {
          path: '/checkout/:id',
          element: <CheckOut/>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<PrivateRoute> <Bookings/></PrivateRoute>
        }
      ]
    },
  ]);




  export default router