const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");



let port = process.env.PORT || 3000;
let app = express();

app.post('/#', function(req, res){

});

 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

   app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/all", function(req, res) {
    res.json(characters);
  });

 app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });

// Post is not idempotent: n times, n resources should be created.
