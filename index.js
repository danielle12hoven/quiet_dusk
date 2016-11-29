const PORT = process.env.PORT || 4269;

const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const mustacheExpress = require('mustache-express');

var fetch = require('node-fetch');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');
app.use("/", express.static(__dirname + '/public'));



var db = pgp(process.env.DATABASE_URL || 'postgres://danielletwaalfhoven@localhost:5432/linkedIn');

// var db = pgp(process.env.DATABASE_URL || 'postgres://danielletwaalfhoven@localhost:5432/heroku_test');

app.listen(PORT, function() {
  console.log('Node app is running on', PORT);
});

app.get("/", function(req, res) {
  res.render("people");
  // res.render("index");
});




// this is the original one
// app.get('/', function(req, res) {
//     db.any('SELECT * FROM users').then(function(data) {
//         var template_data = {
//             messages: data
//         }
//         res.render('index', template_data);
//     });
// });


//this should work like the realty exercise in pulling data from the r_basicprofile
//and rendering the info in the people.html page



