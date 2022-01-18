const jwt_decode = require('jwt-decode');

module.exports = function checkUser(req, res, next) {
    if (req.method === "OPTIONS") {

        return next()
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.status(403).send('Error adtorization')
    }
    let user = jwt_decode(token)
    req.user = user;
    console.log(user)
    return next()
}