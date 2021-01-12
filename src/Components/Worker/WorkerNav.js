import React from 'react'
import {
    Navbar,
    Form,
    Nav,
    NavDropdown,
    Button,
    FormControl
} from 'react-bootstrap'
import styles from './Worker.module.css'
export function Workernav(props) {
    

    return (
      <>
        <Navbar className={styles.Navbar} bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Messages</Nav.Link>
              <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Skills</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Notifications
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search Agency"
                className="mr-sm-2"
              />
              <Button className={styles.searchBtn} variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
}
