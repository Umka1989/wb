import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Main';
import ViewReport from './ViewReport';
import LoginPage from './LoginPage';
import Dashboard from "./Dashboard";
import AdminPage from "./AdminPage";
import UploadDataPage from "./UploadDataPage";


const router = createBrowserRouter([
    { path: "/", element: <Main /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/admin", element: <AdminPage />},
    { path: "/view_report", element: <ViewReport /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/upload_data", element: <UploadDataPage />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


