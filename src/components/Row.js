import React from "react";
import NewCell from "./Cell";

const NewRow = (props) => {
  const grid = props.grid;
  return (
    <tbody>
      {grid.map((row, index) => {
        return (
          <tr key={index}>
            <NewCell
              row={row}
              rowIndex={index}
              handleColorize={props.handleColorize}
            />
          </tr>
        );
      })}
    </tbody>
  );
};

export default NewRow;
