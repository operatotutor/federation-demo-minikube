'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({'Hello': 'World', 'node_version': '14'});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);