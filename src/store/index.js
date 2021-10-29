import { createStore, applyMiddleware, compose } from 'redux'
import mainReducer from '../reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  weather: {
    data: [],
  },
}

const configureStore = createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
)

export default configureStore
