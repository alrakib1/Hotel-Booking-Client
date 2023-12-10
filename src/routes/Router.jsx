import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";



const Router= createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/signup',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },


      ]
    },
  ]);

export default Router;