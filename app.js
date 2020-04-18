require('dotenv').config()

const express = require ('express')
const app = express()
const morgan = require ('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(require('./routes/routes.js'));


const server = app.listen(process.env.PORT || 3000, process.env.IP , function() {
  console.log("Server listening at", server.address().port);
});