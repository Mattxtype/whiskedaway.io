import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./routes/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router =
  createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/recipes",
      element: <p>recipes</p>
    },
    {
      path: "/tips",
      element: <p>tips</p>
    },
    {
      path: "contact",
      element: <p>contact</p>
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
