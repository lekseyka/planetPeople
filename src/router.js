import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            },
        ],
    },
]);