const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => {
	console.log('home page requested');
	res.sendFile(path.join(__dirname, 'app/public/index.html'));
});

app.get('/tables', (req, res) => {
  console.log('tables page requested');
  res.sendFile(path.join(__dirname, 'app/public/tables.html'));
});

app.get('/reserve', (req, res) => {
  console.log('reserve page requested');
  res.sendFile(path.join(__dirname, 'app/public/reserve.html'));
});



let tables = [
  {name: "john",
  phone: "8040300099",
  email: "john@smith.com",
  customerID: 1},
  {name: "jacob",
  phone: "8043002002",
  email: "john@jacob.com",
  customerID: 2},
  {name: "jingelhimer",
  phone: "8043900909",
  email: "jingel@himer.com",
  customerID: 3},
  {name: "schmitt",
  phone: "8040990909",
  email: "schmitt@tee.com",
  customerID: 4},
  {name: "john",
  phone: "80430002000   ",
  email: "john@smith.com",
  customerID: 5},
  {name: "jacob",
  phone: "8042003000",
  email: "jacob@john.com",
  customerID: 6}
  ];

app.get('/api/tables', (req, res) => {
  // console.log('table data requested');
  // var response = "testing";
  res.json(tables);
});

// reserve API call
app.post('/api/reserve', (req, res) => {
	console.log('reserve request submitted');
	console.log(req.body);

  const newReservation = req.body;

  tables.push(newReservation);

  //console.log(tables);

  // Check if user is in the first 5 in list
  let isBooked;
  if(tables.length <= 5){
    isBooked = true;
  }
  else{
    isBooked = false;
  }

  res.json(isBooked);

});


app.post('/api/clear', (req, res) => {
  console.log('clear all tables');
  tables = [];
  res.sendFile(path.join(__dirname, 'app/public/tables.html'));
});

app.post('/api/killreservation', (req, res) => {
  console.log(req.body.id);

  tables.splice(req.body.id, 1);
  // console.log(tables);
  res.json(tables);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
});
