var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});
const useRedditDb = "USE `reddit_scrapper`;";
const createUser = " CREATE TABLE users (id INT(11) NOT NULL AUTO_INCREMENT,fullname VARCHAR(40) NOT NULL, username VARCHAR(30) NOT NULL UNIQUE,email VARCHAR(100) NOT NULL,password VARCHAR(30) NOT NULL,PRIMARY KEY (id));"
const insertUser = "INSERT INTO users (fullname,username,password,email) VALUES (\"kost\",\"kost\",\"1234\",\"tony@gnail.com\"); ";
//"users": "INSERT INTO users (fullname,employee_code,username,password,email) VALUES (?,?,?,?,?);",
const selectUsers = "SELECT * FROM users;"

con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
    return;
});
con.query(useRedditDb, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    return;
});
// con.end();

// con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
// });
// con.query(useRedditDb, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//     return;
// });
async function getUsers() {
    var qResult;
    await con.query(selectUsers, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result[0]["username"]);
        qResult = result;

    });
    con.end();

    return qResult;
}


const result = getUsers();
console.log("51");
console.log(result);

// pool.query(createUser, (err, result, fields) => {
//     if (err) {
//         return console.log(err);
//     }
//     return console.log(result);
// })