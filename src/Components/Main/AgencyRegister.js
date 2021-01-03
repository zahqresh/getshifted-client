import React from 'react'
import styles from './Main.module.css';
import {
Button,
Form,
Container,
Jumbotron,
Row,
Col
} from 'react-bootstrap';
export function AgencyRegister() {
    

    return (
        <>
          <Container>
        <Jumbotron className={styles.loginJumbotron}>
 <Form.Group className={styles.formGroup}>
    <Form.Label>Agency Name</Form.Label>
    <Form.Control  type="text" placeholder="Enter Name" />

    <Form.Label className={styles.agencyRegisterInput}>Email</Form.Label>
    <Form.Control  type="text" placeholder="Enter Email" />

    <Form.Label className={styles.agencyRegisterInput}>Adress</Form.Label>
    <Form.Control type="text" placeholder="Enter Adress" />

    <Row>
        <Col>
        <Form.Label className={styles.agencyRegisterInput}>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" />
        </Col>
        <Col>
        <Form.Label className={styles.agencyRegisterInput}>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
        </Col>
    </Row>
    <Button variant='success' block className={styles.agencyRegisterButton}>Register    
    
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
</svg>
    </Button>
</Form.Group>
        </Jumbotron>
        </Container>  
        </>
    )
}
