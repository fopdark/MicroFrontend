import {
  ButtonCustom,
  commonState,
  ModalCustom,
} from "@loiNguyen/common";
import { POST } from "@loiNguyen/utility";
import { useEffect, useRef, useState } from "react";
import { InputGroup, FormControl, Container, Row, Col } from "react-bootstrap";

export default function Root() {
  let userNameRef = useRef(null);
  let userPasswordRef = useRef(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const subcription = commonState.subscribe((data) => {
      console.log("Dữ liệu nhận được khi subcription commonState", data);
    });

    return () => {
      subcription.unsubscribe();
    };
  });

  const setCommonState = (data) => {
    commonState.next({ data });
  };

  const onHandleLogin = async () => {
    const url = "localhost:8081/";
    const requestData = {
      userName: userNameRef?.current?.value,
      password: userPasswordRef?.current?.value,
    };

    setCommonState(requestData);
    const response = await POST(url, "login", requestData);

    if ((response.status == 200)) {
      setMessage("Đăng nhập thành công");
    } else {
      setMessage("Đăng nhập thất bại");
    }
    setShowModal(true);
  };

  return (
    <section>
      <ModalCustom
        show={showModal}
        handleClose={() => setShowModal(false)}
        title="Thông báo"
        content={message}
      />

      <Container fluid>
        <h2 className="text-center"> Đăng nhập </h2>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Tên tài khoản"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="text"
                ref={userNameRef}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Mật khẩu"
                aria-label="Password"
                aria-describedby="basic-addon2"
                type="password"
                ref={userPasswordRef}
              />
            </InputGroup>
            <ButtonCustom
              title="Đăng nhập"
              onClickCustom={() => onHandleLogin()}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
