{
const now = new Date();
const da1te = now.toLocaleDateString('en-US', { weekday: 'long' });
const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
console.log(da1te +", "+ time);


const date = document.getElementById("datetime");
date.textContent = da1te + ", " + time; 
//console.log( + date.textContent);
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude.toFixed(2);
      const longitude = position.coords.longitude.toFixed(2);
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    

      fetch( `https://api.openweathermap.org/data/2.5/weather?q=Pokhara%2C+Nepal&units=metric&appid=85c5de0fdba5cff5a4a312988bbdcf0f`)
      .then(response => response.json()) 
      .then(data => { 
        console.log('Weather Data:', data); 
        const city= data.name;
        const locationEle = document.getElementById("location");
        locationEle.textContent = (city) ;
        const iconElement = document.getElementById("icon");
        const conditionElement = document.getElementById("condition");
        iconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        /*if(conditionElement) conditionElement.textContent = data.weather[0].description;
        const weatherCard = document.getElementById("weather-cards");
        const card = document.createElement('div');
        card.innerHTML = `
        <h2 class="day-name">${day}</h2>
        <div class="weather-icon">
        <img src="${weatherIcons[index]}" alt="Weather icon" />
        </div>
        <div class="day-temp">
        <h2 class="temp">${temp}</h2>
        <span class="temp-unit">°C</span>
        </div>
        `;
        
        weatherCardsContainer.appendChild(card);
        da1tee++;*/


        
        
        
        //const iconElement = document.getElementById("icon");
        const tempElement = document.getElementById("temp");
       // const conditionElement = document.getElementById("condition");
        const rainElement = document.getElementById("rain");
        const windElement = document.getElementById("wind-speed");
        const windSpeedElement = document.getElementById("wind");
        const sunriseElement = document.getElementById("sunrise");
        const sunsetElement = document.getElementById("sunset");
        const humidityElement = document.getElementById("humidity");
        const humidityElementstatus = document.getElementById("humidity-status");
        const visibilityElement = document.getElementById("visibility");
        const visibilityElementstatus = document.getElementById("visibility-status");
        const airQualityElement = document.querySelector("air-quality");
        const airElementstatus = document.getElementById("air-quality status");
        const uvIndexElement = document.getElementById("uv-index");
        const uvTest = document.getElementById("uv-text");

    rainElement.innerText= "Perc -" + data.precip + "%";
    //const precipitation = dayData.rain || 0; // Fallback to 0 if no rain
//rainElement.textContent = `Perc - ${data.precipitation} mm`;

    tempElement.innerText = data.main.temp;
    //if(iconElement) iconElement.querySelector = data.weather.
    if (conditionElement) conditionElement.textContent = data.weather[0].description;
    //if (rainElement) rainElement.textContent = data.rain ? `${data.rain['1h']} mm` : 'No rain';
    //if(weatherCard) weatherCard.textContent=  data.long?`${data.current.weather}`;
    if (windElement) windElement.textContent = ` ${data.wind.speed.toFixed(1)} m/s`;
    if(windSpeedElement) {
      wind = data.wind.speed.toFixed(1);
      if (wind < 5) {
        windSpeedElement.textContent = `Low `;
    } else if (wind >= 5 && wind <= 15) {
        windSpeedElement.textContent = `Moderate`;
    } else {
        windSpeedElement.textContent = `High`;
    }
    }

    if (humidityElement) humidityElement.textContent = `${data.main.humidity}%`;
      if (humidityElementstatus) {
        const humidity = data.main.humidity;
    
        if (humidity < 30) {
            humidityElementstatus.textContent = `Low `;
        } else if (humidity >= 30 && humidity <= 60) {
            humidityElementstatus.textContent = `Moderate`;
        } else {
            humidityElementstatus.textContent = `High`;
        }
    }

    if (visibilityElement) visibilityElement.textContent = `${data.visibility / 1000} km`;
    if (visibilityElementstatus) {
      const visiblity = data.visibility / 1000;
  
      if (visiblity < 7) {
          visibilityElementstatus.textContent = `Low `;
      } else if (visiblity >= 7 && visiblity <= 12) {
          visibilityElementstatus.textContent = `Moderate`;
      } else {
          visibilityElementstatus.textContent = `High`;
      }
  }
    if (sunriseElement) sunriseElement.textContent = `${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
    if (sunsetElement) sunsetElement.textContent = `${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`; 
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=85c5de0fdba5cff5a4a312988bbdcf0f`)
    .then(response => response.json())
    .then(uvData => {
      
      if (uvIndexElement) uvIndexElement.textContent = `${uvData.current.uvi}`;
    })
    .catch(error => console.error('Error fetching UV Index:', error));

    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=85c5de0fdba5cff5a4a312988bbdcf0f`)
    .then(response => response.json())
    .then(airQualityData => {

      if (airQualityElement) airQualityElement.textContent = `${airQualityData.list[0].main.aqi}`;
    })
    .catch(error => console.error('Error fetching Air Quality:', error));

    
});
})


    .catch(error => console.error('Error fetching weather data:', error)); 
  

}


 else { 
  console.log("location is not supported by this browser.");
}


