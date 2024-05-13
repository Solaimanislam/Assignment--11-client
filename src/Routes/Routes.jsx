import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddService from "../Pages/AddServices/AddService";
import Error from "../Pages/Error/Error";
import AllService from "../Pages/AllService/AllService";
import Details from "../Pages/PopServices/Details";
import BookService from "../Pages/BookedService/BookService";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/service/:id',
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/services')
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
        element: <AllService></AllService>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/bookService/:id',
        element: <PrivateRoutes><BookService></BookService></PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/services')
      }
    ],
  },
]);

export default router;