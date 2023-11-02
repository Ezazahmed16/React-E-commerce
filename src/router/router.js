import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import ContactUs from "../page/ContactUs/ContactUs";
import Products from "../page/Products/Products";
import Main from "../Layout/Main";
import ProductDetails from "../page/Products/Product/ProductDetails";
import ErrorElement from "../Shared/ErrorElement/ErrorElement";
import Login from "../Shared/Login/Login";
import Singup from "../Shared/Singup/Singup";
import Order from "../page/Order/Order";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/Home",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: '/products/category/:category',
                element: <Products />,
            },
            {
                path: "/products/product-details/:id",
                element: <ProductDetails />,
                loader: async ({ params }) => {
                    return fetch(`https://fakestoreapi.com/products/${params.id}`);
                },
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/singup',
                element: <Singup />
            },
            {
                path: '/order',
                element: <Order />
            }
        ]
    },

]);

export default router


