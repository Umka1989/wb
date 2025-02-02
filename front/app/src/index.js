import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Main';
import ViewReport from './ViewReport';
import Login from './Login';
import Dashboard from "./Dashboard";
import AdminPage from "./admin/AdminPage";
import UploadData from "./UploadData";


const router = createBrowserRouter([
    { path: "/", element: <Main /> },
    { path: "/login", element: <Login /> },
    { path: "/admin", element: <AdminPage />},
    { path: "/view_report", element: <ViewReport /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/upload_data", element: <UploadData />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


