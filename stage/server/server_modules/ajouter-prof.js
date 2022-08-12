const handling = (app, db) => {
  app.post("/api/insert/prof", (req, res) => {
    const matricule = req.body.matricule;
    const nom = req.body.nom;
    const email = req.body.email;

    const sqlInsert =
      "INSERT INTO profs (matricule, nom, email) VALUES (?,?,?)";

    db.query(sqlInsert, [matricule, nom, email], (err, result) => {
      if (err) {
        res.send(false);
      } else {
        res.send(true);
      }
    });
  });

  app.get("/api/get/prof", (req, res) => {
    const sqlSelect = "SELECT * FROM profs";
    db.query(sqlSelect, (err, result) => {
      res.send(result);
    });
  });

  app.post("/api/delete/prof", (req, res) => {
    const matricule = req.body.matricule;
    const sqlDelete = "DELETE FROM profs WHERE matricule = ?";

    db.query(sqlDelete, [matricule], (err, result) => {
      if (err) {
        res.send(false);
      } else {
        res.send(true);
      }
    });
  });
};
module.exports = {
  handling,
};
