const temp = document.getElementById("temp"),
  date = document.getElementById("date-time");


let currentCity="";
let currentUnit ="";
let hourlyorWeek ="Week";

function getDateTime() {
let now = moment(), 
hour = now.format("hh"), 
minute = now.format("mm"),
dayString = now.format("dddd");
return `${ dayString}, ${ hour}:${ minute}`;
}
date.innerText = getDateTime();
setInterval(( ) => {
    date.innerText = getDateTime();
}, 1000 );
  function getPublicIp(){
    fetch("https://ipapi.co/json",{
    method : "GET",
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    currentCity = data.city;
    const lat= data.latitude;
    const lon = data.longitude;
    getWeatherData(lat,lon);
  });
}
//function getWeatherData(city, unit, hourlyorWeek) {       for city
 function getWeatherData(lat , lon, unit ="metric") {      //for own location
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={85c5de0fdba5cff5a4a312988bbdcf0f&units=$unit}",{
    method : "GET",
  })
  .then((response) => response.json() )
.then((data)=> {
  console.log(data);
  updateWeatherData(data);
})
 }
 function updateWeatherData(data) {
  const tempElement = document.getElementById("temp");
  const conditionElement = document.getElementById("condition");
  const locationElement = document.querySelector(".location-text p");


  const temperature = data.main.temp;
  tempElement.innerText = Math.round(temperature);

  const weatherCondition = data.weather[0].description;
  conditionElement.innerText = weatherCondition;
  locationElement.innerText = data.name;
}
getPublicIp();