var employee = require('./scheme_employee.js');

module.exports.edit = function (req, res) {

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
        password: req.body.password,
        date_of_join: req.body.date_of_join || null,
        attendance_balance: req.body.attendance_balance || null
    }

    var query = { 'email': req.body.email }
    employee.update(query, employeeInfo, function (err, doc) {

        var response = { // default response body
            message: 'UNKNOWN_ERROR',
            employee: null
        }
        var code = 400; //default code

        if (!err) {
            response.message = 'SUCCESS';
            response.employee = doc;
            code = 200;
        }

        res.status(code).json(response);
    });

};