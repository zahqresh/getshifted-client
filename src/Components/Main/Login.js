import React from 'react'
import styles from './Main.module.css';
import {
Button,
Form,
Container,
Jumbotron
} from 'react-bootstrap';
export function Login(props) {


return (
<>
    <Container>
        <Jumbotron className={styles.loginJumbotron}>
            <Form>
                <Form.Group className={styles.formGroup} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className={styles.formGroup} controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                    Submit
                </Button>
            </Form>
        </Jumbotron>
    </Container>
</>
)
}