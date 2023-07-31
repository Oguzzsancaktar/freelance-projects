const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// const url = 'http://api.weatherstack.com/current?access_key=d27ac36d2a83796785492e384098256f&query=37.8267,-122.4233';

// request({ url: url , json:true }, (error , response) => {

//   // console.log(`${response.body.current.weather_descriptions[0]} It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degree out.`);

// })

// const geocodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?types=address&access_token=pk.eyJ1Ijoib2d1enpzYW5jYWt0YXIiLCJhIjoiY2tyY2U0OW55MDNlMjJ2b2Vya2huOXlneCJ9.wlUwgbQbmq58TaWuI_QqJg&limit=1";
// request({ url: geocodeURL, json: true }, (error, response) => {

//   if (error) {
//   console.log("Unable to connect to location services !");

//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location. Try another search");
//   }
//   else {
//   const latitude = response.body.features[0].center[1];
//   const longtitude = response.body.features[0].center[0];

//   console.log(latitude, longtitude);
//   }

// });

const address = process.argv[2];

if (!address) {
  console.log("Please provide the address");
} else {
  geocode(address.toString(), (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log("Error", error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log("Error", error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
