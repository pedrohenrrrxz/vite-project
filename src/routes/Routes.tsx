// src/Routes.tsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Registrar from "../pages/Registrar";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registro" element={<Registrar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
