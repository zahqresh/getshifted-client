import React from "react";
import styles from "./Main.module.css";
import { Button, Form, Container, Jumbotron, Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
export function WorkerRegister() {
  return (
    <>
      <Container className={styles.WorkerRegisterContainer}>
        <Jumbotron>
          <form>
            <Row className="mb-3">
              <Col lg={6} md={6} sm={12}>
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control mb-2"
                />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                />
              </Col>
            </Row>
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-3"
            />
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className="mb-3">
                  <Form.File id="formcheck-api-custom" custom>
                    <Form.File.Input  />
                    <Form.File.Label data-browse="Uplaod Certification">
                      Custom file input
                    </Form.File.Label>
                    <Form.Control.Feedback type="valid">
                      You did it!
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="mb-3">
                  <Form.File id="formcheck-api-custom" custom>
                    <Form.File.Input  />
                    <Form.File.Label data-browse="State ID">
                      Custom file input
                    </Form.File.Label>
                    <Form.Control.Feedback type="valid">
                      You did it!
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="mb-3">
                  <Form.File id="formcheck-api-custom" custom>
                    <Form.File.Input  />
                    <Form.File.Label data-browse="Application">
                      Custom file input
                    </Form.File.Label>
                    <Form.Control.Feedback type="valid">
                      You did it!
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="mb-3">
                  <Form.File id="formcheck-api-custom" custom>
                    <Form.File.Input  />
                    <Form.File.Label data-browse="FingerPrints">
                      Custom file input
                    </Form.File.Label>
                    <Form.Control.Feedback type="valid">
                      You did it!
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
              </Col>
            </Row>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            />
            <button className="btn btn-primary btn-block mt-3">
              Register <BsArrowRight size={25}></BsArrowRight>
            </button>
          </form>
        </Jumbotron>
      </Container>
    </>
  );
}
