import { useState, useEffect } from "react";
import ModalDelete from "../../components/modals/modal-delete.component";
/* import ModalError from "../../components/modals/modal-error.component"; */

import "./ajout-prof.styles.scss";
import Axios from "axios";

import { Button, Form, Col, Row } from "react-bootstrap";

const AjoutProf = () => {
  // states des informations des profs
  const [nom, setNom] = useState("");
  const [matricule, setMatricule] = useState("");
  const [email, setEmail] = useState("");
  const [profs, setProfs] = useState([]);

  const refreshProfs = () => {
    Axios.get("http://localhost:3001/api/get/prof").then((response) => {
      setProfs(response.data);
    });
  };

  useEffect(() => {
    refreshProfs();
  }, []);

  const createProf = () => {
    if (true) {
      Axios.post("http://localhost:3001/api/insert/prof", {
        nom,
        matricule,
        email,
      }).then((response) => {
        refreshProfs();
      });
    } else {
      //exception
    }
  };

  const deleteProf = (matricule) => {
    Axios.post("http://localhost:3001/api/delete/prof", { matricule }).then(
      () => {
        refreshProfs();
      }
    );
  };

  // the UI
  return (
    <div>
      <h1 className="title">Ajoutez un prof</h1>

      <div className="add-prof">
        <Row className="mb-4">
          <Form.Group as={Col} controlId="nom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              key="Nom"
              type="text"
              placeholder="Nom"
              onChange={(event) => {
                setNom(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="matricule">
            <Form.Label>Matricule</Form.Label>
            <Form.Control
              key="Matricule"
              type="text"
              placeholder="Matricule"
              onChange={(event) => {
                setMatricule(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              key="email"
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Group>

          <Button as={Col} variant="success" onClick={createProf}>
            Ajouter
          </Button>
        </Row>
      </div>

      <table className="container">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Matricule</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {profs.map((prof) => {
            return (
              <tr key={prof.matricule} className="elems-container">
                <td className="elem">{prof.nom}</td>
                <td className="elem">{prof.matricule}</td>
                <td className="elem">{prof.email}</td>
                <td className="list-buttons">
                  <ModalDelete
                    text={prof.nom}
                    deleteVar={deleteProf}
                    value={prof.matricule}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AjoutProf;
