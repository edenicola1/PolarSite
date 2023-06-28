import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import './index.css'
import IcePods from './assets/components/Pod1.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/icepods",
    element: <IcePods />,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);

