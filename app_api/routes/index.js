const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');



const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');
const authenticateJWT = require('../config/jwt');

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);

//define route for our trips endpoint 
router
    .route("/trips")
    .get(tripsController.tripsList)
<<<<<<< HEAD
    .post(tripsController.tripsAddTrip); // Post method add a new trip
=======
    .post(authenticateJWT,tripsController.tripsAddTrip); // Post method add a new trip




//GET method routes tripsFindByCode - require parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT,tripsController.tripsUpdateTrip); // Put method to update a trip



module.exports = router;