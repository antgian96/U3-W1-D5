import React from "react";
import { Navbar, Nav, Container, Button, Dropdown, DropdownButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FirstSectionAccount = () => {
  return (
    <Navbar expand="lg" variant="dark" className="bg-black px-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/assets/netflix_logo.png"
            alt="Netflix Logo"
            className="img-fluid avatar-img"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link href="#" className="text-white">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">TV Shows</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">Recently Added</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">My List</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center">
          <Button variant="link" className="text-white me-3">
            <i className="bi bi-search"></i>
          </Button>
          <span className="text-white me-3">KIDS</span>
          <Button variant="link" className="text-white me-3">
            <i className="bi bi-bell-fill"></i>
          </Button>

          <Dropdown align="end">
            <Dropdown.Toggle variant="link" id="avatarDropdown" className="text-white">
              <img
                src="/assets/avatar.png"
                alt="avatar"
                className="img-fluid avatar-img"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu aria-labelledby="avatarDropdown">
              <Dropdown.Item href="#">Profile</Dropdown.Item>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
              <Dropdown.Item href="#">Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default FirstSectionAccount;
