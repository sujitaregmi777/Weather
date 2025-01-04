const temp = document.getElementById("temp"),
  date = document.getElementById("date-time");


let currentCity="";
let currentUnit ="";
let hourlyorWeek ="Week";

function getDateTime() {
let now =new Date(),
hour = now.getHours(),
minute = now.getMinutes();


let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",

];
hour = hour% 12;
if(hour<10){
    hour = "0"+ hour;
}
if (minute < 10) {
    minute = "0"+ minute;
}
let dayString = days[ now.getDay()];
return `${ dayString}, ${ hour}:${ minute}`;
}
date.innerText = getDateTime();
setInterval(( ) => {
    date.innerText = getDateTime();
}, 1000 );
  function getPublicIp(){
    fetch("https://mylocation.org/",{
    method : "GET",
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    currentCity = data. currentCity;
  });
}
getPublicIp();
function getWeatherData(city, unit, hourlyorWeek) {
  fetch("")
}