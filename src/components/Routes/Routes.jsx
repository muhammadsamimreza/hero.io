import { createBrowserRouter } from "react-router";
import Root from "../../pages/Root";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/Home";
import AllProducts from "../../pages/AllApp";
import Instalation from "../../pages/Instalation";
import AppDetails from "../../pages/AppDetails";


const router = createBrowserRouter([
{
    path: '/',
    Component: Root,
    errorElement: ErrorPage,
    children:[
        {
            index: true,
            path: '/',
            Component: Home
        },
        {
            path: '/allapp',
            Component: AllProducts
        },
        {
            path: '/instalation',
            Component: Instalation
        },
        {
            path: '/appdetails',
            Component: AppDetails
        },
    ]
}
])

export default router;