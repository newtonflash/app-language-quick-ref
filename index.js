var express = require('express');
var app = express();

// set the view engine to ejs
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './pages');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index');
});


app.listen(3001);