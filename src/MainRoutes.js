import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import Login from "./Components/Auth/Login";
import EditProduct from "./Components/EditProduct/EditProduct";
import Home from "./Components/Home/Home";
import ProductsList from "./Components/Products/ProductsList";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default MainRoutes;
