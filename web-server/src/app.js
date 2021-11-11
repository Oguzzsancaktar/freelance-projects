const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '/../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather title',
    name: 'Weather name',
    message: 'Weather message',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help title',
    name: 'help name',
    message: 'help message',
  });
});

app.get('/about', (req, res) => {
  res.render('About', {
    title: 'About title',
    name: 'About name',
    message: 'About message',
  });
});


app.get('/about/*', (req, res) => {
  res.render('404', {
    title: '404 about',
    name: '404 about name',
    errorMessage: 'About article not found',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404 help',
    name: '404 help name',
    errorMessage: 'Help article not found',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: '404 name',
    errorMessage: 'Page not found',
  });
})


app.listen(3000, () => {
  console.log('App running on port 3000');
  console.log('http://localhost:3000');
});
