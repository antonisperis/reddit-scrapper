"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
var cors = require('cors');
var database = new database_1.Database();
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.get('/', function (req, response) {
    response.send("Server running.");
});
console.log('Listening to 5000');
app.post("/loginUser", function (req, response) {
    var username = req.body["username"];
    var password = req.body["password"];
    // response.send(JSON.stringify(req));
    database.selectAllUsers(function (err, queryResult) {
        if (err)
            response.send(err);
        for (var i in queryResult) {
            if (queryResult[i]["username"] == username && queryResult[i]["password"] == password) {
                response.send({ "response": true });
                return;
            }
        }
        response.send({ "response": false });
        return;
    });
});
app.post("/signUpUser", function (req, response) {
    var user = req.body;
    database.insertAUser(user, function (err, queryResult) {
        if (err)
            response.send(err);
        response.send({ "userSignedUp": true });
    });
});
app.listen(5000);
