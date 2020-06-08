// jshint esversion: 6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, world!</h1>")
});

app.get("/contact", function(req, res) {
    res.send("<h1>Contact me at: nhamhung.gttn@gmail.com</h1>");
});

app.get("/about", function(req, res) {
    res.send("<h1>Hi I'm Hung and I love node.js</h1>")
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Code</li><li>Machine Learning</li></ul>")
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});