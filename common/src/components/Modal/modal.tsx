import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ModalModel {
  show: boolean;
  handleClose: Function;
  content: string;
  title: string;
}

function ModalCustom(props: ModalModel) {
  const { show, handleClose, content, title } = props;
  return (
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCustom;
