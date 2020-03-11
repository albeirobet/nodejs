const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// Require Test routes
const testRoutes = require('./src/routes/test.route')

function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
}
app.use(ignoreFavicon);


app.get('/', (req, res) => {
  res.json({ "message": "Hello World" });
});
// listen for requests
app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});


// Middleware

// Test
app.use('/api/test', testRoutes)


// ps -e|grep node