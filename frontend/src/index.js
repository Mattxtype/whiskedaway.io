import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./routes/Home";
import Recipes from "./routes/Recipes";
import Tips from "./routes/Tips";
import Contact from "./routes/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router =
  createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/recipes",
      element: <Recipes></Recipes>
    },
    {
      path: "/tips",
      element: <Tips></Tips>
    },
    {
      path: "contact",
      element: <Contact></Contact>
    }
  ]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
