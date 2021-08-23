import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

const initialState = {
  grid: [Array(20).fill("")],
  selectedColor: "red",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      return { ...state, grid: [...state.grid, action.payload] };
    case PICK_COLOR:
      return { ...state, selectedColor: action.color };
    case COLORIZE:
      const newGrid = [...state.grid];
      newGrid[action.row] = [...newGrid[action.row]];
      newGrid[action.row][action.column] = state.selectedColor;
      return { ...state, grid: newGrid };
    default:
      return state;
  }
}

const ADD_ROW = "ADD_ROW";
const PICK_COLOR = "PICK_COLOR";
const COLORIZE = "COLORIZE";

export const pickColor = (color) => ({ type: PICK_COLOR, color });

export const addRow = () => ({ type: ADD_ROW, payload: Array(20).fill("") });

export const changeColor = (row, column) => ({ type: COLORIZE, row, column });

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
