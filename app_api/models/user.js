const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({

    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },

    hash: String,
    salt: String



});

// Method to set password on this record. 
userSchema.methods.setPassword = function(password) {
    // Create a unique salt for a particular user 
    this.salt = crypto.randomBytes(16).toString('hex');
    // Hashing user's salt and password with 1000 iterations, 64 length and sha512 digest 
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
};

// Method to compare entered password against stored hash 
userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.hash === hash;
};

//Method to generate Jwt for the user
userSchema.methods.generateJWT =  function() {
    return jwt.sign({
        email: this.email,
        name: this.name,
        _id: this._id
    }, 
    process.env.JWT_SECRET,// Secret stored in env file
    { expiresIn: '1h' });// Token expires in 1 hour
};

const User = mongoose.model ('users', userSchema);
module.exports = User;