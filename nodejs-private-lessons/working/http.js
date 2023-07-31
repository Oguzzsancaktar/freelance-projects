const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=d27ac36d2a83796785492e384098256f&query=45,-75&units=f`;

const request = http.request(url, (response) => {

  let data = '';

  response.on('data', (chunk) => {
    data += chunk.toString();
  })

  response.on('end', () => {
    console.log(JSON.parse(data));
  })

});

request.end()