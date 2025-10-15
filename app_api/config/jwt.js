// app_api/config/jwt.js
const jwt = require('jsonwebtoken');
// Method to authenticate our JWT (copied from your selected code)
function authenticateJWT(req, res, next) {
    console.log("In Middleware");

    const authHeader = req.headers['authorization'];
    console.log('Auth Header: ' + authHeader);

    if (authHeader == null) {
        console.log("Auth Header Required but NOT PRESENT!");
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if (headers.length < 1) {
        console.log("Not enough tokens in Auth Header: " + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    console.log("Token: " + token);

    if (token == null) {
        console.log("Null Bearer Token");
        return res.sendStatus(401);
    }

    // console.log(process.env.JWT_SECRET);
}

module.exports = {
    authenticateJWT
};

