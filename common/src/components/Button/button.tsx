import { Button } from "react-bootstrap";

interface ButtonModel {
  title: string;
  variant?: string;
  type?: any;
  onClickCustom?: Function;
}

function ButtonCustom(props: ButtonModel) {
  const { title = "submit", variant = "primary", type = "submit", onClickCustom } = props;
  return (
    <Button variant={variant} type={type} onClick={() => onClickCustom()}>
      {title}
    </Button>
  );
}

export default ButtonCustom;
