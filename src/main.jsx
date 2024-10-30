import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Apod from "./components/Apod/Apod";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HeadFoot from "./components/HeadFoot/HeadFoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeadFoot></HeadFoot>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
      {
        path: "/apod",
        element: <Apod></Apod>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
