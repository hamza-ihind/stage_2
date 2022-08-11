const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const dbconfig = require("./dbconfig.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  user: dbconfig.USER,
  host: dbconfig.HOST,
  password: dbconfig.PASSWORD,
  database: "timetable_db",
});

// Ajouter des profs: Par Admin

// Ajouter

app.post("/api/insert", (req, res) => {
  const matricule = req.body.matricule;
  const nom = req.body.nom;
  const email = req.body.email;

  const sqlInsert = "INSERT INTO profs (matricule, nom, email) VALUES (?,?,?)";

  db.query(sqlInsert, [matricule, nom, email], (err, result) => {
    if (err) {
      console.log(err);
      res.send(false);
    } else {
      res.send(true);
    }
  });
});

// Afficher

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM profs";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

// Supprimer

app.post("/api/delete", (req, res) => {
  const matricule = req.body.matricule;
  const sqlDelete = "DELETE FROM profs WHERE matricule = ?";

  db.query(sqlDelete, [matricule], (err, result) => {
    if (err) {
      console.log(err);
      res.send(false);
    } else {
      res.send(true);
    }
  });
});

//

app.listen(3001, () => {
  console.log("server is running on port 3001...");
});

// Ajouter des (filières + Niveaux): Par Admin
