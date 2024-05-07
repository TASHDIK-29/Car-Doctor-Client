
import {
    createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/rerister/Register";
import CheckOut from "../pages/checkout/CheckOut";
import Bookings from "../pages/booking/Bookings";
import PrivateRoute from "../private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <Register />
            },
            {
                path: '/checkout/:id',
                element: <CheckOut />,
                loader: ({params}) => fetch(`https://car-doctor-server-zeta-blue.vercel.app/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings /></PrivateRoute>,
            },
        ]
    },
]);


// const Router = () => {
//     return (
//         <div>

//         </div>
//     );
// };

export default router;