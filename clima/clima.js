const axios = require('axios');

const getClima = async (lat, lng) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=ce4eefab5f000a470dbb44500fce0cbb&units=metric`)

  return resp.data.main.temp;
}

module.exports = {
  getClima
}
