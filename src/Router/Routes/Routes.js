import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Auth/Login/Login";
import Register from "../../components/Auth/Register/Register";
import Blog from "../../components/Blog/Blog";
import Checkout from "../../components/Checkout/Checkout";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import PDF from "../../components/PDF/PDF";
import Main from "../../layouts/Main/Main";
import { PrivateRouter } from "../PrivateRouter/PrivateRouter";

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
        loader: () => fetch('http://localhost:5000/courses')
      },
      {
        path: '/course/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
      },
      {
        path: '/checkout/:id',
        element: <PrivateRouter><Checkout></Checkout></PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
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
        element: <Login></Login>,
      },
      {
        path: '/pdf',
        element: <PDF></PDF>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
