{
const now = new Date();
const da1te = now.toLocaleDateString('en-US', { weekday: 'long' });
const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
console.log(da1te +", "+ time);


const date = document.getElementById("datetime");
date.textContent = da1te + ", " + time; 
//console.log( + date.textContent);
}
if (navigator.location) {
    navigator.location.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  const locationElement = document.getElementById("location"); 
  if (locationElement) { locationElement.textContent = "Latitude: " + latitude + ", Longitude: " + longitude; } 
   const apiKey = 'YOUR_API_KEY_HERE'; 
   const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`; 
   fetch(url) .then(response => response.json()) .then(data => { console.log('Weather Data:', data); 
   const weatherElement = document.getElementById("weather"); 
   if (weatherElement) { weatherElement.textContent = `Temperature: ${data.current.temp_c}°C, Condition: ${data.current.condition.text}`; } }) 
    .catch(error => console.error('Error fetching weather data:', error)); 
},

   function(error) { switch (error.code) { case error.PERMISSION_DENIED: console.log("User denied the request for Geolocation."); 
    break; 
    case error.POSITION_UNAVAILABLE: console.log("Location information is unavailable."); 
    break; 
    case error.TIMEOUT: console.log("The request to get user location timed out."); 
    break; 
    case error.UNKNOWN_ERROR: console.log("An unknown error occurred."); break; 
}
 }); 
} else { console.log("Geolocation is not supported by this browser.");
}

