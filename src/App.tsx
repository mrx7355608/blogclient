import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
const Blog = React.lazy(() => import("./Blog"));
const Searchpage = React.lazy(() => import("./Searchpage"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/blog/:slug",
        element: <Blog />,
    },
    {
        path: "/search",
        element: <Searchpage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
