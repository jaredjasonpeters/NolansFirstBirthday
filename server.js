const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

//HELPERS
//-----------------------------------//


hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});



//ROUTES
//-----------------------------------//


app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Nolan\'s first birthday'
  });
});

app.get('/location', (req, res) => {
  res.render('location.hbs', {
    pageTitle: 'Location',
    welcomeMessage: ''
  });
});

app.get('/activities', (req, res) => {
  res.render('activities.hbs', {
    pageTitle: 'Activities',
    welcomeMessage: ''
  });
});


//-----------------------------------//

app.listen(port, () => {
  console.log(`port open on ${port}`);
});
