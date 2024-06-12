import React from "react";
import PortfolioCards from "../components/PortfolioCards";

function Portfolio() {
  return (
    <div>
      <h1 className="text-3xl font-medium drop-shadow-lg">Portfolio</h1>
      <div className="flex flex-wrap justify-start">
        <PortfolioCards
          img="1.2.png"
          projectName="Residential"
          location="Sallaghari, Bhaktapur"
        />
        <PortfolioCards
          img="1. Sarita.png"
          projectName="Residential"
          location="Sipadol, Suryabinayak"
        />
        <PortfolioCards
          img="1.5.png"
          projectName="Residential"
          location="Sipadol, Suryabinayak"
        />
        <PortfolioCards
          img="2.1 Gomaa.png"
          projectName="Residential"
          location="Sipadol, Suryabinayak"
        />
        <PortfolioCards
          img="Amin Final.png"
          projectName="Residential"
          location="Sipadol, Suryabinayak"
        />
        <PortfolioCards
          img="Ram Chandra.png"
          location="Sipadol, Suryabinayak"
        />
      </div>
    </div>
  );
}

export default Portfolio;
