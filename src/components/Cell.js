import React from "react";

const NewCell = (props) => {
  const rowIndex = props.rowIndex;
  const row = props.row;
  const handleColorize = props.handleColorize;

  return row.map((color, index) => {
    return (
      <td
        key={index}
        className={color}
        onClick={() => handleColorize(rowIndex, index)}
      ></td>
    );
  });
};

export default NewCell;
