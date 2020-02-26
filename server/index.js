/* eslint-disable no-shadow */
const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');

const port = parseInt(process.env.PORT, 10) || 3033;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(cookieParser());

  function signUp(req, res) {
    const { username, password } = req.body;
    if (username === 'adrian' && password === '1234567890') {
      res.cookie('auth', true, {
        maxAge: 1000 * 60 * 60 * 24 * 1 /* expire a week from today */,
        httpOnly: false /* document.cookie doesn't return this cookie */
      });
      res.json({ code: 302, message: 'autenticacion correcta' });
    } else {
      res.json({ code: 404, message: 'usuario no encontrado' });
    }
  }

  function signOut(req, res) {
    res.clearCookie('auth');
    res.json({ code: 200, message: 'Se cerro la sesion correctamente' });
  }

  function validateAuth(req, res, next) {
    if (!req.headers.cookie && req.cookies.auth) {
      res.redirect('/login');
    }
    next();
  }

  server.post('/api/v1/auth', signUp);
  server.post('/api/v1/signOut', signOut);

  server.get('/', validateAuth);
  server.get('/about', validateAuth);

  // server.get("/", (req, res, next) => {
  //   res.redirect("/login");
  //   next();
  // });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
  });
});
