const handling = (app, db) => {
  app.post("/api/insert/niveau", (req, res) => {
    const nom = req.body.nom;
    const nombreNiveau = req.body.nombreNiveau;

    const sqlInsert = "INSERT INTO filieres (nom, nmbr_niveaux) VALUES (?,?)";

    db.query(sqlInsert, [nom, nombreNiveau], (err, result) => {
      if (err) {
        res.send(false);
      } else {
        res.send(true);
      }
    });
  });

  // Afficher

  app.get("/api/get/niveau", (req, res) => {
    const sqlSelect = "SELECT * FROM filieres";
    db.query(sqlSelect, (err, result) => {
      res.send(result);
    });
  });

  // Supprimer

  app.post("/api/delete/niveau", (req, res) => {
    const id = req.body.id;

    const sqlDelete = "DELETE FROM filieres WHERE id = ?";

    db.query(sqlDelete, [id], (err, result) => {
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
