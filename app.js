const express = require('express');
const http = require('http');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');

app.use( bodyParser.urlencoded({extended: false})); // middleware for body

// set view engine and views
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

// setting up router connection
const surveyRouter = require('./routes/survey');
app.use('/', surveyRouter); // anything that starts with '/', use this router


// turn on server
app.listen(port);
console.log("listening on http://localhost:" + port);