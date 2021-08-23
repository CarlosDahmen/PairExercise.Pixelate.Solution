import React from "react";
import NewRow from "./Row";
import Table from "./Table"
import store, { pickColor, addRow, changeColor } from "../store";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleColorChange(event) {
    store.dispatch(pickColor(event.target.value));
  }

  handleAddRow() {
    store.dispatch(addRow());
  }

  handleColorize(row, col) {
    store.dispatch(changeColor(row, col));
  }

  render() {
    return (
      <React.Fragment>
        <h1>Pixelate</h1>
        <div>
          <button onClick={() => this.handleAddRow()} id="add-row">
            Add a row
          </button>
          <select onChange={(e) => this.handleColorChange(e)}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <Table grid={this.state.grid} handleColorize={this.handleColorize}/>
      </React.Fragment>
    );
  }
}
