import { Navigate, createBrowserRouter } from "react-router-dom";
// import LayoutWebsite from "./components/layout/layoutWebsite";
import LayoutAdmin from "./components/layout/layoutAdmin";
import Dasboard from "./features/admin/dasboard";
import AdminProduct from "./features/admin/product";
import AdminProductAdd from "./features/admin/product/add";
import AdminProductEdit from "./features/admin/product/edit";
import SignIn from "./features/admin/auth/signin";
import Home from "./features/pages/home";
import ProductDetail from "./features/pages/ProductDetail";
import SignUP from "./features/admin/auth/signUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
},

  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      {
        path: "dashboard",
        element: <Dasboard />,
      },
      {
        path: "product",
        element: <AdminProduct />,
      },
      {
        path: "product/add",
        element: <AdminProductAdd />,
      },
      {
        path: "product/:idProduct/edit",
        element: <AdminProductEdit />,
      },
      {
        path: "product/:idProduct",
        element: <ProductDetail />,
      },

      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUP />,
      },
      
      
    ],
  },
]);
