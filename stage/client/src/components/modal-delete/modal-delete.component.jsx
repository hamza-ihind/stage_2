import "./modal-delete.styles.scss";

const ModalDelete = ({ text, closeModal, deleteVar, value }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Vous etes sur ?</h1>
        </div>
        <div className="body">
          <p>Est ce-que vous etes sur de supprimer {text}</p>
        </div>
        <div className="footer">
          <button id="cancelBtn" onClick={() => closeModal(false)}>
            Anuuler
          </button>
          <button
            id="deletebtn"
            onClick={() => {
              deleteVar(value);
              closeModal(false);
            }}
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
