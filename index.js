const PORT = process.env.PORT || 4269;

const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const mustacheExpress = require('mustache-express');
const methodOverride = require('method-override');
const bodyParser = require("body-parser");
const session = require ("express-session");
const bcrypt = require('bcrypt');


var fetch = require('node-fetch');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');
app.use("/", express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var db = pgp(process.env.DATABASE_URL || 'postgres://danielletwaalfhoven@localhost:5432/cannabisList');

app.listen(PORT, function() {
  console.log('Node app is running on', PORT);
});



//EMAIL DATA - WORKS!
app.post('/contact', function(req, res){
  console.log(req.body.name);
    db.one("INSERT INTO emails(name, email, message) values($1, $2, $3) returning message", [req.body.name, req.body.email, req.body.message])
   .then(function(data){
     console.log(data.id);
     res.render("saved",{message: data.message});
   })
   .catch(function(error){
     console.log("Error, User could not be made", error.message || error);
   });
});



// //SIGN UP DATA - WORKS!
// app.post('/signup', function(req, res){
//     console.log(req.body.name);
//     db.one("INSERT INTO users(email, password_digest) values($1, $2) returning id", [req.body.email, req.body.password])
//    .then(function(data){
//      console.log(data.id);
//      res.render("sign-up/signin",{id: data.id});
//    })
//    .catch(function(error){
//      alert("Error, User could not be made", error.message || error);
//    });
// });

// //SIGN IN DATA
// app.get('/signin', function(req, res){
//     console.log(req.body.name);
//     db.one("SELECT email, password_digest FROM users IF email === users.email, users.password_digest")
//     .then(function(data){
//    res.render("index");
//  });
// });


//START OF TESTING
app.get("/", function(req, res){
  var logged_in;
  var email;

  if(req.session.user){
    logged_in = true;
    email = req.session.users.email;
  }

  var data = {
    "logged_in": logged_in,
    "email": email
  }

  res.render('sign-up/signin');
});

app.post('/signup', function(req, res){
  var data = req.body;

  bcrypt.hash(data.password, 10, function(err, hash){
    db.none(
      "INSERT INTO users (email, password_digest) VALUES ($1, $2)",
      [data.email, hash]
    ).then(function(){
      res.render('sign-up/signin');
    })
  });
})

app.post('/signin', function(req, res){
  var data = req.body;

  db.one(
    "SELECT * FROM users WHERE email = $1",
    [data.email]
  ).catch(function(){
    res.send('Email/Password not found.')
  }).then(function(user){
    bcrypt.compare(data.password, user.password_digest, function(err, cmp){
      if(cmp){
        req.session.user = user;
        res.render('index');
      } else {
        res.send('Email/Password not found.')
      }
    });
  });
});

//END OF TESTING









//SAVED DATA FOR STRAINS
app.post('/search', function(req, res){
  var userId;
    if(req/session.user) {
      logged_in = true;
      email = req.session.user.email;
      password_digest = req.session.user.id;
    }
    var userId
    var name = req.body.name;
    console.log(req.body.name);
    db.none("INSERT INTO saved(name) values($1)", [name])
   .then(function(data){
     console.log(data.name);
     res.render("saved");
   })
});

//SAVED DATA FOR EDIBLES
app.post('/edibles', function(req, res){
    console.log(req.body.name);
    db.one("INSERT INTO saved(name) values($1) returning id", [req.body.name])
   .then(function(data){
     console.log(data.id);
     res.render("saved",{name: data.name});
   })
});
