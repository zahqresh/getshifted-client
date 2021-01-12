import React from "react";
import styles from "./Main.module.css";
import { Button, Form, Container, Jumbotron, Row, Col } from "react-bootstrap";
import { BsArrowRight, BsFillPersonFill } from "react-icons/bs";
export function AgencyRegister() {
  return (
    <>
      <Container>
        <Jumbotron className={styles.loginJumbotron}>
          <Form.Group className={styles.formGroup}>
            <Form.Label>Agency Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />

            <Form.Label className={styles.agencyRegisterInput}>
              Email
            </Form.Label>
            <Form.Control type="text" placeholder="Enter Email" />

            <Form.Label className={styles.agencyRegisterInput}>
              Adress
            </Form.Label>
            <Form.Control type="text" placeholder="Enter Adress" />

            <Row>
              <Col lg={6} md={6} sm={12}>
                <Form.Label className={styles.agencyRegisterInput}>
                  Password
                </Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Form.Label className={styles.agencyRegisterInput}>
                  Confirm Password
                </Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Col>
            </Row>
            <Button
              variant="success"
              block
              className={styles.agencyRegisterButton}
            >
              Register <BsArrowRight size={25} />
            </Button>
          </Form.Group>
        </Jumbotron>
      </Container>
    </>
  );
}
