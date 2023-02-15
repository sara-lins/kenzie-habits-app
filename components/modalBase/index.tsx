import ReactModal from "react-modal";
import Modal from "react-modal";
import { IModalBase } from "../../interfaces";

const styleModal: Modal.Styles = {
  overlay: {
    position: "fixed",
    display: "flex",
    width: "100vw",
    height: "100vh",
    zIndex: "1",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(2px)",
    backgroundColor: "#3532ff14",
  },
  content: {
    position: "relative",
    inset: "0",
    width: "20rem",
    height: "28rem",
    background: "var(--blue-dark)",
    color: "#F8F9FA",
    WebkitOverflowScrolling: "touch",
    borderRadius: "10px",
    border: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "0",
    boxShadow: "3px 3px 5px #000000",
  },
};

ReactModal.setAppElement("body");

const ModalBase = ({ state, setState, children }: IModalBase) => {
  return (
    <Modal
      isOpen={state}
      onRequestClose={() => setState(false)}
      style={styleModal}
      parentSelector={() => document.body}
    >
      {children}
    </Modal>
  );
};

export default ModalBase;
