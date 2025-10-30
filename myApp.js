require("dotenv").config();

var express = require('express');
var app = express();

// Servir archivos estáticos desde la carpeta /public
app.use("/public",express.static(__dirname + "/public"));

// Sirve el archivo HTML ubicado en /views/index.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// ruta JSON
app.get("/json", function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ "message": message });
});


// No modifiques esta línea
module.exports = app;
































