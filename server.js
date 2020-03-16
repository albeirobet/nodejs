// ########## Principal require's
const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// ############

// ########## Setup server port
const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// ########## Require Routes
const testRoute = require('./src/routes/test.route')
const originRoute = require('./src/routes/origin.route')

// ############ Ignore call favicon
function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
}
app.use(ignoreFavicon);
// ############

// ########## Configuring the database ################
const dbConfig = require('./src/config/data-base.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});
// #####################################################



// ############ define a root/default route
app.get('/', (req, res) => {
  res.json({ "app": "ms-security-access" });
});
// ############ 

// ############ listen for requests
app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});
// ############ 


// ############ Middleware's ################
// ############ Test Middleware
app.use('/api/test', testRoute)
app.use('/api/origin', originRoute)



// ########## Important Notes
// ps -e|grep node