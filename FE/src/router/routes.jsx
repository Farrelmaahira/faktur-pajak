import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DataOrders from "../pages/DataOrders";
import Create from "../pages/Create";
import DataOrder from "../pages/DataOrder";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Login/>
    },
    {
        path : '/dashboard',
        element : <Dashboard/>
    },
    {
        path : '/data-orders',
        element : <DataOrders/>
    },
    {
        path : '/data-order/:id',
        element : <DataOrder/>
    },
    {
        path : '/create',
        element : <Create/>
    }
])

export default router