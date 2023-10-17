const express = require('express');
const http = require('http');
const app = express();
const port = 3000;
app.listen(port);
app.set('view engine', 'pug');
app.set('views', 'views');
console.log("listening on http://localhost:" + port);


app.get('/survey', (req, res) =>
{
    res.render('survey');
})

// page not found
app.get('/', (req, res) =>
{
    res.render('notFound');
})
