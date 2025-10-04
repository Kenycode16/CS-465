//Bring in the DB connection and the Mongoose model
const { Mongoose } = require('mongoose');
const mongoose = require('./db');
const Trip = mongoose.model('trips');

//Read seed data from JSON file 
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync("./data/trips.json", 'utf8'));

// delete all existing records, then insert seed data

const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
}

// Close the MongoDB connection and exist 

seedDB().then(async () => {
    await mongoose.disconnect
    process.exit(0);
});