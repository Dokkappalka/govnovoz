import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: 'home',
        element: <HomePage/>
      },
      {
        path: 'products',
        element: <ProductsPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
