const fetchTemperature = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch temperature: ${response.status}`);
      }
      const data = await response.json();
      return `Temperature: ${data.current_weather.temperature}°C, Wind Speed: ${data.current_weather.windspeed} km/h `;
    } catch (error) {
      return `Error fetching temperature: ${error.message}`;
    }
  };
  
  const fetchCityWeather = async (city) => {
    try {
      const cityResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      if (!cityResponse.ok) {
        throw new Error(`Failed to fetch city details: ${cityResponse.status}`);
      }
      const cityData = await cityResponse.json();
  
      if (cityData.results && cityData.results.length > 0) {
        const { latitude, longitude } = cityData.results[0];
        console.log(`${city}: Latitude ${latitude}, Longitude ${longitude}`);
        const weather = await fetchTemperature(latitude, longitude);
        return `${city} - ${weather}`;
      } else {
        return `Weather data for ${city} not found`;
      }
    } catch (error) {
      return `Error fetching weather for ${city}: ${error.message}`;
    }
  };
  
  // Main function to fetch weather for multiple cities
  const getWeatherForCities = async (cities) => {
    console.log('Fetching weather data...');
  
    const promises = cities.map((city) => fetchCityWeather(city));
    const results = await Promise.all(promises);
  
    results.forEach((result) => console.log(result));
  };
  
  getWeatherForCities([
    'Louisville',
    'Murray',
    'Portland',
    'Las Vegas',
    'Boise',
    'Salt Lake',
  ]);
  

  const celsiusToFahrenheit = celsius => {
    return (celsius * 9 / 5) + 32;
  }

  let tempCelsius = -1.9;
  let tempFahrenheit = celsiusToFahrenheit(tempCelsius);
  console.log(`${tempCelsius}°C is equal to ${tempFahrenheit}`);


// // Weather Data

// const fetchWeather = async (city) => {
//   try {
//     const response = await fetch(
//       `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
//     );
//     if (!response.ok) {
//       throw new Error(
//         `Failed to fetch weather for ${city}: ${response.status}`
//       );
//     }
//     const data = await response.json();

//     // Check if the city exists
//     if (data.results && data.results.length > 0) {
//       return `${city}: Latitude ${data.results[0].latitude}, Longiitude ${data.results[0].longitude}`;
//     } else {
//       return `Weather data for ${city} not found.`;
//     }
//   } catch (error) {
//     return `Error fetching weather for ${city}: ${error.message}`;
//   }
// };

// // Main function to fetch weather data for multiple cities
// const getWeatherForCities = async (cities) => {
//   console.log('Fetching weather data...');

//   const promises = cities.map((city) => fetchWeather(city));
//   const results = await Promise.all(promises);

//   results.forEach((result) => console.log(result));
// };

// // Call the function with a list of cities;
// getWeatherForCities([
//   'Kentucky',
//   'Murray',
//   'Louisville',
//   'Portland',
//   'Salt Lake',
// ]);

// Again, but Temps included

// Never give up!! Create and Code your future.

