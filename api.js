var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//start body-parser configuration
//app.use(cookieParser());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
//end body-parser configuration
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//create app server
var server = app.listen(8080, "localhost", function () {
    var host = 'localhost'
    //var port = server.address().port
    var port  = process.env.PORT;
    if (port == null || port == "") {
        port = 8080;
    }
    console.log("Example app listening at http://%s:%s", host, port)
});



/* User profile section */
//rest api to get a single employee data
app.get('/getMethod', function (req, res) {
	res.end(JSON.stringify("from Get Metod"));
    
});
app.post('/postMethod', function (req, res) {
   res.end(JSON.stringify("post data"));
});

