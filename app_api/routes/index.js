const express = require('express');

const router = express.Router();
//
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');
const { authenticateJWT } = require('../config/jwt');

const jwt = require('jsonwebtoken');
//



// define route for login endpoint
router
.route('/login')
.post(authController.login);

// define route for register endpoint
router
.route('/register')
.post(authController.register);


//define route for our trips endpoint 
router
    .route("/trips")

    .get(tripsController.tripsList)

    .post(authenticateJWT,tripsController.tripsAddTrip); // Post method add a new trip





//GET method routes tripsFindByCode - require parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT,tripsController.tripsUpdateTrip); // Put method to update a trip




module.exports = router;