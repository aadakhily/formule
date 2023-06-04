import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import('./home/Home'))
const Studio = lazy(() => import('./studio/Studio'))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/studio",
        element: <Studio />
    },
])


function Routes() {
    return (
        <RouterProvider router={router} />
    )
}
export default Routes
