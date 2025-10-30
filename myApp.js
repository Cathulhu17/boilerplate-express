var express = require('express');
var app = express();

// Sirve el archivo HTML ubicado en /views/index.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// No modifiques esta línea
module.exports = app;

































 module.exports = app;
