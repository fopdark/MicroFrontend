import { Toast } from "react-bootstrap";

interface ToastModel {
  message: string;
  title: string;
  background?: any;
  show: boolean;
}

function ToastCustom(props: ToastModel) {
  const { message, title, background = "primary", show } = props;
  return (
      <Toast bg={background} show={show} autohide>
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
  );
}

export default ToastCustom;
