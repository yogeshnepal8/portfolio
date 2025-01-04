import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Estimation from "./pages/Estimation";
import BuildingCodes from "./pages/BuildingCodes";
import StructuralDesign from "./pages/StructuralDesign";
import Sidebar from "./pages/Sidebar";

function Layout() {
  return (
    <div className="flex relative">
      <Sidebar />
      <div className="ml-24 lg:py-6 px-4 lg: lg:ml-96 lg:px-12 drop-shadow-md overflow-x-auto flex-1 z-0 ">
        <Routes>
          <Route path="/" element={<About />} />
          <Route loader={() => {}} path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/building-codes" element={<BuildingCodes />} />
          <Route path="/structural-design" element={<StructuralDesign />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
