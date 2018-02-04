const express = require('express');
const path = require('path');
const employee = require('./modules/employee/router.js');
var bodyParser = require('body-parser');
const app = express();
require('./config/db_connect.js');

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, 'public'));
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

app.use('/employee', employee);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('HRM System Listening on port 3000!'));