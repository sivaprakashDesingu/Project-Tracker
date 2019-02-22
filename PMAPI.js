var http = require("http");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
    host: 'localhost', //mysql database host name
    user: 'root', //mysql database user name
    password: '', //mysql database password
    database: 'ProjectTracker' //mysql database name
    // multipleStatements: true
});

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected...')
})
//end mysql connection

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
var server = app.listen(8000, "localhost", function () {
    var host = 'localhost'
    var port = server.address().port
    console.log("Node Serve Running at http://%s:%s", host, port)
});


//rest api for logged in user profile picture
app.post('/isValiduser/', function (req, res) {
    var postData = req.body;
    connection.query('select * from Employee where EmpEmailID=? And password=?', [postData.id,postData.password], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});
//rest api for logged in user profile picture
app.post('/getLggedinEmployeeData/', function (req, res) {
    var postData = req.body;
    //console.log("select * from Employee where EmpEmailID="+postData.id);
    connection.query('select * from Employee where EmpID=?', [postData.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//is newproject assigned successfully
app.post('/isTaskAssignedSuccesssfully/', function (req, res) {
    var postData = req.body;
    console.log(postData);
    
    /*//console.log("select * from Employee where EmpEmailID="+postData.id);
    //var sql="INSERT INTO project (ProjectTitle,ProjectAssignedTo,ProjectStatus,ProjectPriority,ProjectCreatedBy,ProjectTakenTime,ProjectEstimatedFinishDate,ProjectFinishedDate) VALUES (?,?,?,?,?,?,?,?)";
    var sql = "INSERT INTO project (ProjectTitle,ProjectDescription,ProjectAssignedTo,ProjectStatus,ProjectPriority,ProjectCreatedBy,ProjectEstimatedFinishDate,ProjectRef) VALUES ('" + postData.proTitle + "','" + postData.Discription + "','" + postData.assignTo + "','" + postData.projectStatus + "','" + postData.Priority + "','" + postData.createdBy + "','" + postData.dtbco + "','" + postData.Reference + "')";
    console.log(sql); */
    connection.query('INSERT INTO project (ProjectTitle,ProjectDescription,ProjectAssignedTo,ProjectStatus,ProjectPriority,ProjectCreatedBy,ProjectEstimatedFinishDate,ProjectRef) VALUES(?,?,?,?,?,?,?,?)', 
    [postData.proTitle,postData.Discription,postData.assignTo,postData.projectStatus,postData.Priority,postData.createdBy,postData.dtbco,postData.Reference], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

app.post('/noOfProjectsByLead/', function (req, res) {
    var postData = req.body;
    //console.log(postData);
    //SELECT ProjectStatus,COUNT(*) counts FROM   project   where ProjectCreatedBy=? GROUP BY ProjectStatus UNION ALL SELECT 'Total',COUNT(*) counts FROM   project where ProjectCreatedBy=?;
    connection.query("SELECT ProjectStatus,COUNT(*) counts FROM   project   where ProjectCreatedBy=? GROUP BY ProjectStatus UNION ALL SELECT 'Total',COUNT(*) counts FROM   project where ProjectCreatedBy=?", [postData.id,postData.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
  
});
