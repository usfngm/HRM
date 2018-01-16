var employee = require('./scheme_employee.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var auth = require('../../config/auth_token');

module.exports.login = function (req, res) {

    employee.findOne({ 'email': req.body.email }, function (err, emp) {

        var response = {
            message: 'UNKNOWN_ERROR',
            employee: null
        }
        var code = 400;

        if (err) {
            res.status(code).json(err);
            return;
        }
        else if (emp && bcrypt.compareSync(req.body.password, emp.password)) {

            // Create a login token
            var token = jwt.sign({
                email: emp.email,
                name: emp.name
            }, auth.TOKEN_SECRET, { expiresIn: 60 * 60 });
            response.message = 'SUCCESS';
            response.employee = emp;
            response.token = token;
            code = 200;
        }
        else {
            response.message = 'WRONG_CREDS';
        }
        res.status(code).json(response);
    });

};