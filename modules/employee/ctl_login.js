var employee = require('./scheme_employee.js');

module.exports.login = function (req, res) {

    var employeeInfo = {
        email: req.body.email,
        password: req.body.password
    }

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
        else if (emp && emp.password === req.body.password) {
            response.message = 'SUCCESS';
            response.employee = emp;
            code = 200;
        }
        else {
            response.message = 'WRONG_CREDS';
        }
        res.status(code).json(response);
    });

};