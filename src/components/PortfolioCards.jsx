import React from "react";

function PortfolioCards(props) {
  const { className, img, projectName, location, area, type } = props;
  return (
    <div className="flex flex-col m-6">
      <div className="mb-4">
        <img
          className="w-80 aspect-square rounded-lg drop-shadow-lg saturate-50 transition duration-200  hover:saturate-100 "
          src={`../src/assets/${img}`}
          alt={projectName}
        />
      </div>
      <div className="border-y-2">
        <h1>Project: {projectName} </h1>
        <p>Location: {location}</p>
        <p>Area: {area}</p>
      </div>
      <div className="flex justify-center">
        <button className="font-medium border rounded-lg mt-2 py-1 w-40 transition duration-300 hover:border-gray-800 hover:bg-blue-800 hover:text-white">
          Get more info
        </button>
      </div>
    </div>
  );
}

export default PortfolioCards;
