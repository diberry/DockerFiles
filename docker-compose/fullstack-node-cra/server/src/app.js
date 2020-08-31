const express = require('express');
const path = require('path');
const cors = require('cors')

// app config
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  credentials: true,
  origin: `http://localhost:3000`
}))
app.use(express.static(path.join(__dirname, './public')));

// public routes
app.get('/status', (req, res) => {
  res.send({ status: "success" });
});

// all routes that aren't caught go here
app.use((req, res, next) => {

  if (!res.statusCode) {
    next({
      status: 404,
      message: 'Not Found',
  });
  } else {
    next()
  }
});

process.on('uncaughtException', (err) => {
  console.log('-------------------------- Caught exception: ' + err);
});
module.exports = app;
