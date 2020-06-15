//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    res.send("Your BMI is " + weight/(height * height));
})

app.listen(3000);