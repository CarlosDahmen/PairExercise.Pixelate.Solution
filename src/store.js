import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

const initialState = {
  grid: [
    Array(20).fill('')
  ]
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'addRow':
      return { ...state, grid: [...state.grid, Array(20).fill('')] }
    default:
      return state
  }
}

function addRow(num) {
  return { type: 'addRow', payload: Array(num).fill('') }
}

// store.dispatch({type: 'addRow'})

const store = createStore(
  reducer,
  applyMiddleware(loggerMiddleware)
)

export default store

