import React, { useState } from "react";
import codes from "../data/codes";

function BuildingCodes() {
  const [selectedMunicipality, setSelectedMunicipality] = useState("");

  const handleChange = (event) => {
    setSelectedMunicipality(event.target.value);
  };

  return (
    <div>
      <div>Building Codes</div>
      <div>
        <select onChange={handleChange} value={selectedMunicipality}>
          <option value="">Select Municipality</option>
          {codes.map((item, index) => (
            <option key={index} value={item.municipality}>
              {item.municipality}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h3>Bylaws:</h3>
        <ul>
          {codes
            .filter((item) => item.municipality === selectedMunicipality)
            .map((item, index) => (
              <div key={index}>
                {item.bylaws.map((bylaw, bylawIndex) => (
                  <li className="list-disc list-inside" key={bylawIndex}>
                    {item.municipality} Bylaws {bylawIndex + 1} {bylaw}
                  </li>
                ))}
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default BuildingCodes;
