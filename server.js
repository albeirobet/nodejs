const express = require('express');
const bodyParser = require('body-parser');
// Require Test routes
const testRoutes = require('./src/routes/test.route')
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
}

app.use(ignoreFavicon);
// define a root/default route
app.get('/', (req, res) => {
  console.log('>>>>>>>>>>>>>>> Entrando principal')
  // try {
  //   const m = 1;
  //   const n = m + z;
  // } catch (err) {
  //   return res.status(400).send({
  //     message: 'This is an error!' + err
  //   });
  // }
  res.json({ "message": "Hello World" });

});
// listen for requests
app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});


// Middleware

// Test
app.use('/api/test', testRoutes)