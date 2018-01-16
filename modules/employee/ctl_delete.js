var employee = require('./scheme_employee.js');

module.exports.remove = function (req, res) {

    var query = {
        'email': req.email
    }

    employee.findOne(query, function (err, model) {
        if (err) {
            res
                .status(400)
                .json({message: 'UNKNOWN_ERR'});
        } else {
            if (model) {
                model
                    .remove(function (err) {
                        res
                            .status(200)
                            .json({message: 'SUCCESS'});
                    });
            } else {
                res
                    .status(400)
                    .json({message: 'NO_SUCH_USER'});
            }
        }
    });

};