"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var mysql = require('mysql');
var Database = /** @class */ (function () {
    function Database() {
        this.host = "localhost";
        this.user = "root";
        this.password = "";
        this.connect();
        this.endConnection();
    }
    Database.prototype.connect = function () {
        this.dbConnection = mysql.createConnection({ host: this.host, user: this.user, password: this.password });
        var useRedditDb = "USE `reddit_scrapper`;";
        this.dbConnection.query(useRedditDb, function (err, result) {
            if (err)
                throw err;
            return;
        });
    };
    Database.prototype.endConnection = function () {
        this.dbConnection.end();
        return;
    };
    Database.prototype.selectAllUsers = function (callback) {
        this.connect();
        var allUsersQuery = "SELECT * FROM users;";
        var allUsersResult = this.dbConnection.query(allUsersQuery, callback);
        this.endConnection();
        return allUsersResult;
    };
    Database.prototype.insertAUser = function (user, callback) {
        this.connect();
        var insertUserQuery = "INSERT INTO users (fullname,username,password,email) VALUES ( \"" + user.fullname + "\",\"" + user.username + "\",\"" + user.password + "\",\"" + user.email + "\");";
        this.dbConnection.query(insertUserQuery, callback);
        this.endConnection();
    };
    return Database;
}());
exports.Database = Database;
