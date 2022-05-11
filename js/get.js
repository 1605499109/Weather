
const key='key=SCYrvkytJze9qyzOh'
const adderss='chongqing'
const getweater= ()=> axios.get(`https://api.seniverse.com/v3/weather/daily.json?${key}&location=${adderss}`)