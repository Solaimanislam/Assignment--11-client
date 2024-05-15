import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddService from "../Pages/AddServices/AddService";
import Error from "../Pages/Error/Error";

import Details from "../Pages/PopServices/Details";
import BookService from "../Pages/BookedService/BookService";
import ManageService from "../Pages/ManageService/ManageService";
import UpdateService from "../Pages/UpdateService/UpdateService";
import MyBook from "../Pages/Mybooking/MyBook";
import ServiceDo from "../Pages/ServiceDo/ServiceDo";
import AllServicep from "../Pages/AllService/AllServicep";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://home-service-server-mu.vercel.app/services')
      },
      {
        path: '/service/:id',
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: () => fetch('https://home-service-server-mu.vercel.app/services')
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/registration',
        element: <Register></Register>
      },
      {
        path: 'addServices',
        element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
      },
      {
        path: 'allService',
        element: <AllServicep></AllServicep>,
        
      },
      {
        path: '/bookService/:id',
        element: <PrivateRoutes><BookService></BookService></PrivateRoutes>,
        loader: () => fetch('https://home-service-server-mu.vercel.app/services')
      },
      {
        path: 'manageService',
        element: <PrivateRoutes><ManageService></ManageService></PrivateRoutes>
      },
      {
        path: 'my-book',
        element: <PrivateRoutes><MyBook></MyBook></PrivateRoutes>
      },
      {
        path: 'service-do',
        element: <PrivateRoutes><ServiceDo></ServiceDo></PrivateRoutes>
      },
      {
        path: 'manageService/updateService/:id',
        element: <UpdateService></UpdateService>,
        loader: ({ params }) => fetch(`https://home-service-server-mu.vercel.app/services/${params.id}`)
      },
    ],
  },
]);

export default router;