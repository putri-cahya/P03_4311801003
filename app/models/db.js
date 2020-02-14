//app/models/db.js
const mysql = require("../models/db");
const dbConfig = require("../config/db.config.js");
var connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE
});
module.exports = connection;