import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import ContactUs from "../page/ContactUs/ContactUs";
import Products from "../page/Products/Products";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
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
                path: "/contact",
                element: <ContactUs />,
            },
        ]
    },

]);

export default router


