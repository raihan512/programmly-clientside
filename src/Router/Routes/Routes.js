import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Register from "../../components/Auth/Register/Register";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Main from "../../layouts/Main/Main";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: "",
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
