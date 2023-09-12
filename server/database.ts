const mysql = require('mysql');
import { Connection } from 'mysql';

class Database {

    private host: String = "localhost";
    private user: String = "root";
    private password: String = "";
    private dbConnection!: Connection;
    constructor() {
        this.connect();
        this.endConnection();
    }
    connect() {
        this.dbConnection = mysql.createConnection({ host: this.host, user: this.user, password: this.password });
        const useRedditDb = "USE `reddit_scrapper`;";
        this.dbConnection.query(useRedditDb, function (err: any, result: any) {
            if (err) throw err;
            return;
        });
    }
    endConnection() {
        this.dbConnection.end();
        return;
    }

    selectAllUsers(callback: Object) {
        this.connect();
        const allUsersQuery = "SELECT * FROM users;";
        const allUsersResult = this.dbConnection.query(allUsersQuery, callback);
        this.endConnection();
        return allUsersResult;
    }

    insertAUser(user: any, callback: Object) {
        this.connect();
        const insertUserQuery = "INSERT INTO users (fullname,username,password,email) VALUES (" + user.fullname + "," + user.username + "," + user.password + "," + user.email + ");"
        this.dbConnection.query(insertUserQuery, callback);
        this.endConnection();
    }
}

export { Database };