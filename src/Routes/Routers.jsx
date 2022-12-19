import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AllFruits from "../Pages/AllFruits";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Checkout from "../Pages/Checkout";
import FruitDetails from "../Pages/FruitDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/all-fruits" element={<AllFruits />} />
      <Route path="/all-fruits/:id" element={<FruitDetails />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Routers;
