const express = require("express");
//const exphbs=require('express-haldlebars');
const app = express();
const bodyParser = require("body-parser");
const path=express('path');
const db=require('./config/database');
var apiRoutes = require('./routes/gigs.js');
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

apiRoutes(app,db)

db.authenticate().then(function () {
  app.listen(PORT, function () {
      console.log(`Listening on PORT ${PORT}`);
  });
});

