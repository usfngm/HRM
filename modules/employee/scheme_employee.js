/*
The number of employees is 20 employee, 
the profile of each one contains name, id
number, title, personal photo, phone number,
address, department, manager, local-phone, email,
date-of-join, and attendance-balance. 
The titles available are “manager, developer and marketing” 
with a complete profile for each. The attendance of the employees
should be addedmanually over 5 weeks.
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeScheme = new Schema({
    name: String,
    id: String,
    title: String,
    personal_photo: String, // a uri to the personal photo
    phone_number: String,
    address: String,
    department: String,
    manager: String, // Manager ID
    local_phone: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date_of_join: String,
    attendance_balance: Number
});

module.exports = mongoose.model('Employee', employeeScheme);