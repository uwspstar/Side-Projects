var express = require('express'); // class
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

// set up the view engine and the views directory
app.set('views', path.join(__dirname, '../web/views'));
app.set('view engine', 'ejs');

// set up public folder for static files
app.use(express.static('./web/public')); // link style
//app.use('/assets', express.static('assets'))

// middleware, can do login logic here
app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next(); // middleware, can do login logic here
});

//  ‘/’ route to render the views/index.ejs page
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id });
});

app.get('/api', function (req, res) {
    res.json({ firstName: 'xing', lastName: 'wang' });
});

app.listen(port);