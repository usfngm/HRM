var employee = require('./scheme_employee.js');

module.exports.remove = function (req, res) {

    var query = { 'email': req.email }
    employee.remove(query,  function (err, doc) {

        var response = { // default response body
            message: 'UNKNOWN_ERROR',
        }
        var code = 400; //default code

        if (err == null) {
            response.message = 'SUCCESS';
            code = 200;
        }

        res.status(code).json(response);
    });

};