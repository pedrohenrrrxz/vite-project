// src/Routes.tsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Registrar from "../pages/Registrar";
import Registrar2 from "../pages/Registrar2";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/Registrar2" element={<Registrar2/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
