export const GET_WEATHER = 'GET_WEATHER'

export const getWeatherAction = (city) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e41fedf1448b1e63a9033e3b95264634`,
      )
      if (resp.ok) {
        const weatherdata = await resp.json()
        dispatch({
          type: GET_WEATHER,
          payload: weatherdata,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}
