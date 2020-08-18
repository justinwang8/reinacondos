// Express
var express = require("express");
var app = express();

// Body Parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// CSS
app.use(express.static("public"));

// EJS Shortcut
app.set("view engine", "ejs");

// Home Page
app.get("/", function(req, res){
	res.render("home");
})

// Listen
app.listen(3000, function(){
	console.log("SERVER IS RUNNING!");
})