// src/Routes.tsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Registrar from "../pages/Registrar";
import Registro2 from "../pages/Registra2";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registro" element={<Registrar />} />
        <Route path="/Registro2" element={<Registro2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
