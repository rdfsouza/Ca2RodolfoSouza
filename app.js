require('dotenv').config()

const express = require ('express')
const app = express()
const morgan = require ('morgan')
const bodyParser = require('body-parser')


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(require('./Routes/routes.js'));


server.listen(process.env.PORT || 3000, process.env.IP , function() {
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});