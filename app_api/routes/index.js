const express = require('express');
const router = express.Router();
<<<<<<< HEAD
=======
const jwt = require('jsonwebtoken');
>>>>>>> origin/module7



const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');
<<<<<<< HEAD


router.route('/register').post(authController.register);
//router.route('/login').post(authController.login);
=======
const authenticateJWT = require('../config/jwt');

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);
>>>>>>> origin/module7

//define route for our trips endpoint 
router
    .route("/trips")
    .get(tripsController.tripsList)
<<<<<<< HEAD
    .post(tripsController.tripsAddTrip); // Post method add a new trip
=======
    .post(authenticateJWT,tripsController.tripsAddTrip); // Post method add a new trip
>>>>>>> origin/module7




//GET method routes tripsFindByCode - require parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
<<<<<<< HEAD
    .put(tripsController.tripsUpdateTrip); // Put method to update a trip
=======
    .put(authenticateJWT,tripsController.tripsUpdateTrip); // Put method to update a trip
>>>>>>> origin/module7



module.exports = router;