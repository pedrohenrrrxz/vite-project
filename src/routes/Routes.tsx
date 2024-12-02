// src/Routes.tsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registrar from "../pages/Registrar1/Registrar";
import Registrar2 from "../pages/Registrar2/Registrar2";
import Registrar3 from "../pages/Registrar3/Registrar3";
import Registrar4 from "../pages/Registrar4/Registrar4";
import Home from "../pages/Home/Home";
import Meeting from "../pages/Agenda/Meeting";
import Meeting2 from "../pages/AgendaTimes/Meeting2";


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/Registrar2" element={<Registrar2/>}/>
        <Route path="/Registrar3" element={<Registrar3/>}/>
        <Route path="/Registrar4" element={<Registrar4/>}/>
        <Route path="/Calendar" element={<Meeting/>}/>
        <Route path="/Calendar2" element={<Meeting2/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
