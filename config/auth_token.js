var jwt = require('jsonwebtoken');

const SECRET = 'kvarajg4';

module.exports.TOKEN_SECRET = SECRET;
module.exports.checkToken = function (req, res, next) {

    var token = req.headers.authtoken;

    jwt.verify(token, SECRET, function (err, decoded) {
        if (token) {
            if (err) {
                res.status(400).json({'message': 'UNKNOWN_ERR'});
            }
            else {
                req.email = decoded.email;
                req.name = decoded.name;
                next();
            }
        }
        else {
            res.status(400).json({'message': 'NO_TOKEN_ERR'});
        }
    });
}





