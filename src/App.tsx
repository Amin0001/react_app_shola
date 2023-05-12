import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import image4 from "./image/download (8).jfif";
import image5 from "./image/casual.jpg";
import Product from "./Product";
import flashsale from "./flashsale";
import SignUp from "./signup";
import ErrorMessage from "./error";
import SignInSide from "./signin";
import { Routes, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign" element={<SignInSide />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
