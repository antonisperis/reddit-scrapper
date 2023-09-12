import { Database } from "./database";


const cors = require('cors');
const database: Database = new Database();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use((req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', function (req: any, response: any) {
    response.send("Server running.");
});
console.log('Listening to 5000');

app.post("/loginUser", function (req: any, response: any) {
    const username = req.body["username"];
    const password = req.body["password"];
    // response.send(JSON.stringify(req));
    database.selectAllUsers(function (err: any, queryResult: any) {
        if (err)
            response.send(err);
        for (let i in queryResult) {
            if (queryResult[i]["username"] == username && queryResult[i]["password"] == password) {
                response.send({ "response": true });
                return;
            }
        }
        response.send({ "response": false });
        return;
    });
});
app.listen(5000);