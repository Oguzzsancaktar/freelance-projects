const path = require('path');
const express = require('express');



const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.send('Home Page')
})

// app.get('/help', (req, res) => {
//   res.send('<h1>Help</h1>')
// })

// app.get('/about', (req, res) => {
//   res.send('<h1>About Page</h1>');

// });

app.get('/weather', (req, res) => {
  res.send({
    location: "Philadelphia",
    forecast:"Weather Forecast"
  });
});


app.listen(3000, () => {
  console.log('App running on port 3000');
  console.log('http://localhost:3000');
})