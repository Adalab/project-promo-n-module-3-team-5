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
const Database = require('better-sqlite3');

// Arrancamos el servidor en el puerto 4001
const serverPort = process.env.PORT || 4001;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// init and config data base
const db = new Database('./src/database.db', {
  // this line log in console all data base queries
  verbose: console.log,
});
//static server
const serverStaticPath = './public';
server.use(express.static(serverStaticPath));

// template engines
server.get('/interactive_card/:id', (req, res) => {
  console.log('Paso por aqui');
  const query = db.prepare(`SELECT * FROM card_interactive WHERE id =?`);
  const data = query.get(req.params.id);

  res.render('interactive_card', data);
});

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
    const query = db.prepare(
      'INSERT INTO card_interactive(palette, name, job, phone, photo, github, linkedin) VALUES (?, ?, ?, ?, ?, ?, ?)'
    );
    const result = query.run(
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.phone,
      req.body.photo,
      req.body.github,
      req.body.linkedin
    );
    response.success = true;
    response.cardURL = `https://chafarcoderas-ejs.herokuapp.com/interactive_card/${result.lastInsertRowid}`;
    //const cardURL = 'este es el enlace';
    //response = { success: true, cardURL: cardURL };
  }

  res.json(response);
});
