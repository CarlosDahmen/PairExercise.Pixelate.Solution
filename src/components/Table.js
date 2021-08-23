import React from 'react'
import App from './App'
import NewRow from './Row'

const Table = (props) => {
  return(
  <table>
  <NewRow grid={props.grid} handleColorize={props.handleColorize} />
</table>)
}

export default Table
