require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Alonso Manilla',
    titulo: 'Curso de Node',
  });
});

// app.get('/', (req, res) => {
//   res.send('Home page');
// });
app.get('/generic', (req, res) => {
  //   res.send('Hello World in its own path');
  //   res.sendFile(__dirname + '/public/generic.html');
  res.render('generic', {
    nombre: 'Alonso Manilla',
    titulo: 'Curso de Node',
  });
});
app.get('/elements', (req, res) => {
  //   res.send('Hello World in its own path');
  //   res.sendFile(__dirname + '/public/elements.html');
  res.render('elements', {
    nombre: 'Alonso Manilla',
    titulo: 'Curso de Node',
  });
});
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
  //   res.send('404 | Page not found');
});

app.listen(port, () => {
  console.log('Example running on port: ', port);
});
