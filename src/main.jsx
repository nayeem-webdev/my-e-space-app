import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Apod from "./components/Apod/Apod";
import Home from "./components/Home/Home";
import HeadFoot from "./components/HeadFoot/HeadFoot";
import MarsRover from "./components/MarsRover/MarsRover";
import ImageSearch from "./components/ImageSearch/ImageSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeadFoot></HeadFoot>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apod",
        element: <Apod></Apod>,
      },
      {
        path: "/mars-rover",
        element: <MarsRover></MarsRover>,
      },
      {
        path: "/image-search",
        element: <ImageSearch />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
