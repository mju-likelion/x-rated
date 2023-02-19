// server.js
const fs = require('fs');
const https = require('https');

const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send("IT'S WORKING!");
});

const httpsOptions = {
  key: fs.readFileSync('./cert/cert.key'),
  cert: fs.readFileSync('./cert/cert.pem'),
};

const server = https.createServer(httpsOptions, app).listen(port, err => {
  if (err) throw err;
  console.log('> Ready on https://local.mju-likelion.com:3000');
});
