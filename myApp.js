require("dotenv").config();

var express = require('express');
var app = express();

// ✅ Root-level middleware para loguear todas las solicitudes
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

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

// Ruta GET /name
app.get("/name", function(req, res) {
  const { first, last } = req.query;
  res.json({ name: `${first} ${last}` });
});

// Ruta POST /name
app.post("/name", function(req, res) {
  const firstName = req.body.first;
  const lastName = req.body.last;
  res.json({ name: `${firstName} ${lastName}` });
});


// No modifiques esta línea
module.exports = app;
































