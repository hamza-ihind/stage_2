const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const dbconfig = require("./dbconfig.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const addProf = require("./server_modules/ajouter-prof.js");
const addFiliere = require("./server_modules/ajouter-filiere.js");

const db = mysql.createPool({
  user: dbconfig.USER,
  host: dbconfig.HOST,
  password: dbconfig.PASSWORD,
  database: "timetable_db",
});

app.listen(3001, () => {
  console.log("server is running on port 3001...");
});

addProf.handling(app, db);
addFiliere.handling(app, db);
