const mongoose = require('mongoose');
const User = require('../models/user');




const register = async (req, res) => {
    // Validate message to insure that all parameters are present 
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
        .status(400)
        .json({ "message": "All fields required" });
    }
    // Create a new user
    const user = new User(
        {
        name : req.body.name,
        email : req.body.email,
        password : ''
    });

    user.setPassword(req.body.password) // Set the password for the user
    const q = await user.save(); // Save the user
    
    if(!q) {

        // Database returned no data
        return res
        .status(400)
        .json(err);
    } else {
        //Return new user token 
        const token = user.generateJWT();
        return res
            .status(200)
            .json(token );

    }
};


module.exports = {
     register

    };

