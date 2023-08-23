import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      // { path: "", element: <Home /> },
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:productID", element: <ProductDetail />}
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
