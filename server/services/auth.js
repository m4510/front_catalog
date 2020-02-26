/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signIn = (req, res) => {
  const { username, password } = req.body;
  if (username === 'adrian' && password === '1234567890') {
    const accessToken = jwt.sign({ username, password }, process.env.token, { expiresIn: '1m' });
    res.cookie('token', accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 1 /* expire a week from today */,
      httpOnly: false /* document.cookie doesn't return this cookie */
    });
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
};

exports.validateTokenJWT = (req, res, next) => {
  if (req.cookies.token) {
    jwt.verify(req.cookies.token, process.env.token, err => {
      if (err) {
        console.log(err);
        res.clearCookie('token');
        res.redirect('/login');
      }
      next();
    });
  } else {
    res.redirect('/login');
  }
};

exports.signOut = (req, res) => {
  res.clearCookie('token');
  res.sendStatus(200);
};
