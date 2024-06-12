import React, { useState } from "react";
import data from "../data/data.js";
import NewRow from "./NewRow.jsx";
import { IoMdAddCircleOutline } from "react-icons/io";

function Table() {
  return (
    <div>
      {data.map((item, index) => (
        <div className="border-b-2 mt-4 pb-2" key={index}>
          <div className="flex items-center">
            <h1 className="font-bold">{item.title}</h1>
            <h1 className="font-medium pl-10">Unit: {item.unit}</h1>
            <button
              className="text-2xl hover:text-red-900 "
              onClick={() => toggleTable(index)}
            >
              <IoMdAddCircleOutline />
            </button>
          </div>
          <div>
            <table>
              <thead>
                <tr className="text-red-700">
                  <th className="font-medium px-6">Description</th>
                  <th className="font-medium">Quantities</th>
                  {Object.keys(item.materials).map((key, index) => (
                    <th className="font-medium px-6" key={index}>
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <NewRow materials={item.materials} />
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
