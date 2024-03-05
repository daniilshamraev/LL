import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import UserInventory from "./pages/UserInventory.tsx";
import UserList from "./pages/UserList.tsx";
import Marketplace from "./pages/Marketplace.tsx";
import Games from "./pages/Games.tsx";
import Help from "./pages/Help.tsx";
import {TonConnectUIProvider} from '@tonconnect/ui-react';
import App from "./App.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            errorElement: <ErrorPage/>,
        },
        {
            path: "/inventory/:id",
            element: <UserInventory/>
        },
        {
            path: "/users",
            element: <UserList/>
        },
        {
            path: "/marketplace",
            element: <Marketplace/>
        },
        {
            path: "/games",
            element: <Games/>
        },
        {
            path: "/help",
            element: <Help/>
        }
    ]
);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <TonConnectUIProvider
        manifestUrl='https://raw.githubusercontent.com/daniilshamraev/ton-manifest/main/manifets.json'>
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </TonConnectUIProvider>
);