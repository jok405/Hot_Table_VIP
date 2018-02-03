const express = require('express');
let port = process.env.PORT || 3000;
let app = express();

app.post('/#', function(req, res){

});

app.get('/#', function(req, res){

});

app.listen(3000);

// Post is not idempotent: n times, n resources should be created.
