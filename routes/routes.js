'use strict';
module.exports = function (app, express) {
	var login = require('../controllers/loginController');
	var user = require('../controllers/userController');
	var router = express.Router();              // get an instance of the express Router

	// middleware to use for all requests
	router.use(function (req, res, next) {
		// do logging
		console.log('Something is happening.');
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next(); // make sure we go to the next routes and don't stop here
	});

	// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
	router.get('/', function (req, res) {
		res.json({ message: 'hooray! welcome to our api!' });
	});

	router.post('/user/login', function (req, res) {
		login.doLogin(req, res);
	});

	router.post('/user/add', function (req, res) {
		user.addUser(req, res);
	});
	// all of our routes will be prefixed with /api
	app.use('/api', router);
};
