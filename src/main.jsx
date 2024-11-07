import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/home/Home";
import Statistics from "./pages/statistics/Statistics";
import Dashboard from "./pages/dashboard/Dashboard";
import ItemDetails from "./pages/details/ItemDetails";
import Error from "./errorPage/Error";
import Voucher from "./pages/voucher/Voucher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",

        element: <Dashboard></Dashboard>,
      },
      {
        path: "/voucher",
        element: <Voucher></Voucher>,
      },
      {
        path: "/details/:id",
        element: <ItemDetails></ItemDetails>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
