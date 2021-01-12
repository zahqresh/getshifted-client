import React, { useState } from "react";
import { Col, Container, Row, Jumbotron } from "react-bootstrap";
import { AiFillStar, AiOutlineStar, AiOutlinePaperClip } from "react-icons/ai";
import { MdLocationOn, MdCake, MdEmail, MdFace } from "react-icons/md";
import styles from "../Worker/Worker.module.css";
import { AgencyNav } from "./AgencyNav";
import img from "./img.jpg";
export function Agencyprofile(props) {
  return (
    <div className={styles.profileBg}>
      <AgencyNav />
      <Container className="pt-5">
        <Jumbotron className={styles.profileJumbotron}>
          <Row>
            <Col>
              <img src={img} height="170" width="170" alt="" />
              <hr />
              <div className="text-left">
                <small style={{ color: "grey" }}>Bio</small> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                accusamus rem. Praesentium officiis quibusdam nobis deserunt
                aspernatur eos, aut ullam.
              </div>
              <div className="text-left mt-3">
                <small style={{ color: "grey" }}>Skills Needed</small> <br />
                <AiOutlinePaperClip /> Lorem ipsum dolor sit amet <br />
                <AiOutlinePaperClip /> Lorem ipsum dolor sit amet
                <br />
                <AiOutlinePaperClip /> Lorem ipsum dolor sit amet
                <br />
                <AiOutlinePaperClip /> Lorem ipsum dolor sit amet
                <br />
                <AiOutlinePaperClip /> Lorem ipsum dolor sit amet
                <br />
                <AiOutlinePaperClip /> Lorem ipsum dolor sit amet
                <br />
              </div>
            </Col>
            <Col className={styles.profileSecondColumn}>
              <h4>John Doe</h4>
              <MdLocationOn />
              <small style={{ color: "grey" }}>Lorem ipsum dolor sit</small>
              <p>Health Care Agency</p>
              <small style={{ color: "grey" }}>RATINGS</small>
              <p>
                8,6 <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                <AiOutlineStar />
              </p>
              <hr />
              <div className={styles.profileBasicInfo}>
                <small style={{ color: "grey" }}>Basic Information</small>
                <br />
                <b>
                  <MdEmail />
                </b>
                {"   "}
                agency@exmaple.com <br />
                <b>
                  <MdLocationOn />
                </b>
                {"   "}
                Lorem ipsum dolor sit amet. <br />
              </div>
              <hr />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
}
