// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: '50mb' }));

// set template engine middlewares
server.set('view engine', 'ejs');

// Arrancamos el servidor en el puerto 4001
const serverPort = 4001;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//static server
const serverStaticPath = './public';
server.use(express.static(serverStaticPath));

// tamplate engines
server.get('/interactive_card', (req, res) => {
  res.render('interactive_card');
})

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  let response = {};
  console.log(req.body.name);
  if (req.body.name === '' || req.body.name === undefined) {
    const error = 'debe indicar su nombre';
    response = { success: false, error: error };
  } else if (req.body.job === '') {
    const error = 'indica tu trabajo';
    response = { success: false, error: error };
  } else if (req.body.photo === '') {
    const error = 'pon tu foto';
    response = { success: false, error: error };
  } else if (req.body.email === '') {
    const error = 'indica tu email';
    response = { success: false, error: error };
  } else if (req.body.phone === '') {
    const error = 'indica tu teléfono';
    response = { success: false, error: error };
  } else if (req.body.linkedin === '') {
    const error = 'indica tu linkedin';
    response = { success: false, error: error };
  } else if (req.body.github === '') {
    const error = 'indica tu github';
    response = { success: false, error: error };
  } else {
    const cardURL = 'este es el enlace';
    response = { success: true, cardURL: cardURL };
  }

  res.json(response);
});
