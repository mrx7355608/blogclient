import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
const Blog = React.lazy(() => import("./Blog")); // Lazy loading

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/blog/:slug",
        element: <Blog />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
