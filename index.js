const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')

const {mongoose}= require('./db'); //descrtural assignment
mongoose.set('strictQuery', false);
var employeeController = require('./controllers/employeeController');


var app = express();
app.use(bodyParser.json());
app.use(cors())
app.use(morgan())

app.listen(3000,()=> console.log('Server started at port : 3000'));

app.use('/employees',employeeController);