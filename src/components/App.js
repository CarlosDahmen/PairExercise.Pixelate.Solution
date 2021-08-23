import React from 'react';
import store from '../store'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
    <React.Fragment>
      <h1>Pixelate</h1>
      <div>
        <button onClick={() => {store.dispatch({type: "addRow", payload: Array(20).fill('')})}} id='add-row'>Add a row</button>
        <select>
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
      <table>
        <tbody>
        {this.state.grid.map((row, index) => {return <tr key={index}>{row.map((color, index) => {return <td key={index} className={color}></td>})}</tr>})}
        </tbody>
      </table>
    </React.Fragment>
    );
  }
}
