// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),  // for data from the request body
    mongoose = require('mongoose'),      // to interact with our db
    User = require('./models/users.js'),
    Rectangle = require('./models/rectangles.js'),
    Circle = require('./models/circles.js'),
    User = require('./models/users.js'),
    Image = require('./models/images.js'),
    bcrypt = require('bcrypt'),
    salt = bcrypt.genSaltSync(10),
    session = require('express-session'),
    Wireframe = require('./models/wireframes.js');

// connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/wireframe2'
);

//serve js and css files
app.use(express.static(__dirname + '/public'));

// configure session
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: process.env.SESSION_SECRET || require('./config').SESSION_SECRET,
  cookie: { maxAge: 60000 }
}));

// configure body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Middleware

app.use('/', function (req, res, next) {
 // saves userId in session for logged-in user
 req.login = function (user) {
   req.session.userId = user._id;
 };

 // finds user currently logged in based on `session.userId`
 req.currentUser = function (callback) {
   User.findOne({_id: req.session.userId}, function (err, user) {
     req.user = user;
     callback(null, user);
   });
 };

 // destroy `session.userId` to log out user
 req.logout = function () {
   req.session.userId = null;
   req.user = null;
 };

 next();  // required for middleware
});


// Create a new user
app.post('/users', function (req, res) {
	console.log('signing up');
  // grab user data from params (req.body)
  var newUser = req.body.user;

  // create new user with secure password
  User.createSecure(newUser.firstName, newUser.lastName, newUser.email, newUser.password, function (err, user) {
    // console.log(user);
    req.login(user);
    res.redirect('/profile');
  });
});

//	Login users to their unique profile
app.get('/api/me', function(req, res){
	User.findOne({_id: req.session.userId}).populate('wireframes').exec(function (err, user) {
	  req.user = user;
	  res.json(user);
	});
})

// authenticate user and set session
app.post('/login', function (req, res) {
	console.log('logging in');
  	var userData = {
  	  email: req.body.email,
  	  password: req.body.password
  	};

  User.authenticate(userData.email, userData.password, function (err, user) {
    if (user){
      req.login(user);
      console.log('logged in:', user);
      res.redirect('/profile');

      console.log("logged in")
   
    } else {
      // find some way to handle 
      // whatever error came from the authentication code
      res.status(500).send(err);
    }
  });
});

// log out user (destroy session)
app.get('/logout', function (req, res) {
 req.logout();
 res.redirect('/');
});

// 
app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/views/login.html')
})

app.get('/profile', function(req, res){
	res.sendFile(__dirname + '/public/views/index.html')
})

// Wireframe Routes

app.get('/api/wireframes', function(req, res){
	Wireframe.find({}, function(req, wireframes){
		res.json(wireframes)
		console.log(wireframes);
	});
});

app.get('/api/wireframes/:id', function(req, res){
	Wireframe.findOne({"_id": req.params.id}).exec(function(req, wireframe){
		res.json(wireframe);
		console.log(wireframe);
	});
});

app.post('/api/wireframes/:id/rectangles', function(req, res){
	Wireframe.findOne({"_id": req.params.id}).exec(function(data, wireframe){
		req.body.rectangleDivs.forEach(function(div){
			wireframe.rectangles.push(div);
		});
		req.body.circleDivs.forEach(function(div){
			wireframe.circles.push(div);
		});
		wireframe.save();
		console.log(wireframe);
		// res.json(wireframe);
	});
});

// listen on port 3030
app.listen(process.env.PORT || 3030, function () {
  console.log('server started on localhost:3030');
});