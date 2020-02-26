/* eslint-disable no-shadow */
const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const port = parseInt(process.env.PORT, 10) || 3033;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const authService = require('./services/auth');

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(cookieParser());

  // Peticiones externas
  server.post('/api/v1/auth', authService.signIn);
  server.post('/api/v1/signOut', authService.signOut);

  // Peticiones Locales
  server.get('/', authService.validateTokenJWT);
  server.get('/about', authService.validateTokenJWT);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
  });
});
