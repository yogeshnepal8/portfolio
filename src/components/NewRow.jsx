import React, { useState } from "react";

function NewRow({ materials }) {
  const [rows, setRows] = useState([{ name: "", quantity: 1 }]);

  const addNewRow = () => {
    const newRow = { name: "", quantity: 1 };
    setRows([...rows, newRow]);
  };

  const handleQuantityChange = (index, value) => {
    value = Math.abs(value); // Ensure quantity is always positive
    const updatedRows = [...rows];
    updatedRows[index].quantity = value;
    setRows(updatedRows);
  };

  const handleNameChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].name = value;
    setRows(updatedRows);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <>
      <tbody>
        {rows.map((row, index) => (
          <tr className="border-y-black border-y-[1px]" key={index}>
            <td>
              <input
                className="border"
                type="text"
                value={row.name}
                onChange={(event) => {
                  handleNameChange(index, event.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="number"
                value={Number(row.quantity)}
                onChange={(event) =>
                  handleQuantityChange(index, event.target.value)
                }
                placeholder="1"
                className="text-center"
              />
            </td>
            {Object.entries(materials).map(([key, value], index) => (
              <td className="text-center" key={index}>
                {(value * row.quantity).toFixed(2)}
              </td>
            ))}
            <td>
              <button
                className="bg-red-400 text-white font-medium p-[6px] rounded-lg"
                onClick={() => removeRow(index)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <button
        className="bg-green-400 text-white font-medium p-[6px] rounded-lg mt-2"
        onClick={addNewRow}
      >
        Add Row
      </button>{" "}
    </>
  );
}

export default NewRow;
