import { useState, useEffect } from "react";
import ModalDelete from "../modal-delete/modal-delete.component";
import "./ajout-prof.styles.scss";
import Axios from "axios";

const AjoutProf = () => {
  const [openModal, setOpenModal] = useState(false);

  // states des informations des profs
  const [nom, setNom] = useState("");
  const [matricule, setMatricule] = useState("");
  const [email, setEmail] = useState("");
  const [profs, setProfs] = useState([]);

  const refreshProfs = () => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setProfs(response.data);
    });
  };

  useEffect(() => {
    refreshProfs();
  }, []);

  const createProf = () => {
    Axios.post("http://localhost:3001/api/insert", {
      nom,
      matricule,
      email,
    }).then((response) => {
      refreshProfs();
      console.log(response);
    });
  };

  const deleteProf = (matricule) => {
    Axios.post("http://localhost:3001/api/delete", { matricule }).then(
      (response) => {
        refreshProfs();
        console.log(response);
      }
    );
  };

  // the UI
  return (
    <div>
      <h1 className="title">Ajoutez un prof</h1>

      <div className="add-prof">
        <input
          key="Nom"
          type="text"
          placeholder="Nom"
          onChange={(event) => {
            setNom(event.target.value);
          }}
        />
        <input
          key="Matricule"
          type="text"
          placeholder="Matricule"
          onChange={(event) => {
            setMatricule(event.target.value);
          }}
        />
        <input
          key="Email"
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button onClick={createProf}>Ajouter</button>
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
                  <button onClick={() => setOpenModal(true)}>Delete</button>
                  {openModal && (
                    <ModalDelete
                      closeModal={setOpenModal}
                      text={prof.nom}
                      deleteVar={deleteProf}
                      value={prof.matricule}
                    />
                  )}
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
