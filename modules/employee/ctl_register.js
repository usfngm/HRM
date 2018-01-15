var employee = require('./scheme_employee.js');

module.exports.register = function (req, res) {
    var employeeInfo = {
        name: req.body.name || null,
        id: null,
        title: req.body.title || null,
        personal_photo: req.body.photo_url || null, // a uri to the personal photo
        phone_number: req.body.phone_number || null,
        address: req.body.address || null,
        department: req.body.department || null,
        manager: req.body.manager || null, // Manager ID
        local_phone: req.body.local_phone || null,
        email: req.body.email,
        password: req.body.password,
        date_of_join: req.body.date_of_join || null,
        attendance_balance: req.body.attendance_balance || null
    }

    employee.create(employeeInfo, function (err, doc) {

        var response = { // default response body
            message: 'UNKNOWN_ERROR',
            employee: null
        }
        var code = 400; //default code

        if (err) {
            if (err.code === 11000)
                response.message = 'DUPLICATE_KEY'
        }
        else {
            response.message = 'SUCCESS';
            response.employee = doc;
            code = 200;
        }

        res.status(code).json(response);
    });
};