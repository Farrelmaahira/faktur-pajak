import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DataOrders from "../pages/DataOrders";
import Create from "../pages/Create";
import DataOrder from "../pages/DataOrder";
import ProtectedRoutes from "./ProtectedRoutes";
import Preview from "../pages/Preview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/data-orders",
        element: <DataOrders />,
      },
      {
        path: "/data-order/:id",
        element: <DataOrder />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path : "/data-penjualan/:id",
        element : <Preview/>
      }
    ],
  },
]);

export default router;
