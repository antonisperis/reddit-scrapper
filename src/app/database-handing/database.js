var mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});
const useRedditDb = "USE `reddit_scrapper`;";
const createUser = " CREATE TABLE users (id INT(11) NOT NULL AUTO_INCREMENT,fullname VARCHAR(40) NOT NULL, username VARCHAR(30) NOT NULL UNIQUE,email VARCHAR(100) NOT NULL,password VARCHAR(30) NOT NULL,PRIMARY KEY (id));"

con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
    con.query(useRedditDb, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
    con.query(createUser, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});
// pool.query(createUser, (err, result, fields) => {
//     if (err) {
//         return console.log(err);
//     }
//     return console.log(result);
// })