import React from "react";
import img from "./hire.svg";
import styles from "./Main.module.css";
import { Button, Col, Row, Container } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className={styles.gradient}>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h1 className={styles.mainHeading}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nihil,cum.
            </h1>
            <Button
              className={styles.between}
              style={{ backgroundColor: "#ef0f71", border: "none" }}
              href="/agency/register"
              size="lg"
              varient="primary"
            >
              Agency
            </Button>
            <Button
              size="lg"
              style={{ backgroundColor: "#ff6804", border: "none" }}
              href="/worker/register"
            >
              Worker
            </Button>
          </Col>
          <Col lg={6} md={6}>
            <img
              className={styles.svg}
              height="600px"
              width="600px"
              src={img}
              alt=""
            />
          </Col>
        </Row>
      </Container>
      <div class="custom-shape-divider-bottom-1609627759">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LandingPage;
