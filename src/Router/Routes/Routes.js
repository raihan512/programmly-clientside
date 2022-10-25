import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Auth/Login/Login";
import Register from "../../components/Auth/Register/Register";
import Blog from "../../components/Blog/Blog";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
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
        loader: () => fetch('http://localhost:5000/courses')
      },
      {
        path: '/course/:id',
        element: <CourseDetails></CourseDetails>,
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
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
