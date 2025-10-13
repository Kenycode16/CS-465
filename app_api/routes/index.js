const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

//define route for our trips endpoint 
router
    .route("/trips")
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip); // Post method add a new trip



//GET method routes tripsFindByCode - require parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip); // Put method to update a trip



module.exports = router;