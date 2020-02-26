/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
require('dotenv').config();

const expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

exports.signIn = (req, res) => {
  const { username, password } = req.body;
  if (username === 'adrian' && password === '1234567890') {
    const accessToken = jwt.sign({ username, password }, process.env.token, { expiresIn: '1h' });
    res.cookie('token', accessToken, {
      httpOnly: true,
      expires: expiryDate
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
