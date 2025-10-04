const mongoose = require('mongoose');
const Trip = require ('../models/travlr');
const Model = mongoose.model('trips');

// GET /api/trips


const tripsList = async (req, res) => {
    const q = await Model
        .find({})
        .exec();


    if (!q) { // Database returned an error 
        return res
            .status(404)
            .json({ "message": "trips not found" });
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }





};


const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode})
        .exec();


    if (!q) { // Database returned an error 
        return res
            .status(404)
            .json({ "message": "trips not found" });
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }





};

module.exports = {
  tripsList,
  tripsFindByCode

};