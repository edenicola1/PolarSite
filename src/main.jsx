import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import './index.css'
import IcePod from './assets/components/IcePod.jsx'
import IcePodyCovertor from './assets/components/IcePodyCovertor.jsx'
import IcePodyCovertoryMochila from './assets/components/IcePodyCovertoryMochila.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/icepod",
    element: <IcePod />,
  },
  {
    path: "/icepodycovertor",
    element: <IcePodyCovertor />
  },
  {
    path: "/icepodycovertorymochila",
    element: <IcePodyCovertoryMochila />
  }


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);

