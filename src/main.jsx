import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Apod from "./components/Apod/Apod";
import Home from "./components/Home/Home";
import HeadFoot from "./components/HeadFoot/HeadFoot";
import MarsRover from "./components/MarsRover/MarsRover";
import ImageSearch from "./components/ImageSearch/ImageSearch";
import ArticleHero from "./components/ArticleHero/ArticleHero";
import BlogHero from "./components/BlogHero/BlogHero";
import ReportHero from "./components/ReportsHero/ReportsHero";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeadFoot></HeadFoot>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <ArticleHero />,
          },
          {
            path: "/blogs",
            element: <BlogHero />,
          },
          {
            path: "/reports",
            element: <ReportHero />,
          },
        ],
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
