let url = 'https://api.tomorrow.io/v4/weather/forecast?location=Omsk.0466&apikey=sKwhANlI4Hb6Mw8EnDGf3pZNNFbiqmrs'


let temperature = document.getElementById("h1");
let humidity = document.getElementById("h2");
let windSpeed = document.getElementById("windSpd");
let weather_img = document.getElementById("weather_img");

//let options = {
    //method: 'GET',
    //headers: {
      //'Content-Type': 'application/json;charset=utf-8'
    //},
   // body: JSON.stringify(data)
 //}

let string = '';





async function WeatherDispaly () {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  temperature.innerHTML = Math.floor(data.timelines.daily[0].values.temperatureAvg) + '°C';
  humidity.innerHTML =  'Humidity : ' + Math.floor(data.timelines.daily[0].values.humidityAvg) + '%';
  windSpeed.innerHTML = 'Wind speed : ' + Math.floor(data.timelines.daily[0].values.windSpeedAvg) + 'M/s'
  //weather icons
  let Conditions = data.timelines.hourly[6].values.weatherCode;

  if (Conditions = 1000) {
    weather_img.src = 'https://files.readme.io/48b265b-weather_icon_small_ic_clear3x.png'
  }
  else if (Conditions = 1001) {
    weather_img.src = 'https://files.readme.io/4042728-weather_icon_small_ic_cloudy3x.png'
  }
  else if (Conditions = 1100) {
    weather_img.src = 'https://files.readme.io/c3d2596-weather_icon_small_ic_mostly_clear3x.png'
  }
  else if (Conditions + 1) {

  }
  //day and night cycle
  let time = data.timelines.hourly[6].time.substr(11)
  
  if (time = '00:00:00Z', '01:00:00Z','02:00:00Z','03:00:00Z','04:00:00Z','05:00:00Z') {
    Conditions = data.timelines.hourly[6].values.weatherCode = 1000;

  }
}

WeatherDispaly();


  
