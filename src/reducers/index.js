import { initialState } from '../store'
import { GET_WEATHER } from '../actions'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER: {
      return {
        ...state,

        weather: [...state.weather.data, action.payload],
      }
    }
    default:
      return state
  }
}
export default mainReducer
