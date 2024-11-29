import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const FourthSectionAccount = () => {
  return (
    <section>
      <Container>
        <Row className="g-1">
          <Col></Col>
          <Col xs={12} md={6}>
            <Container className="mt-4 px-3 p-5">
              <Row className="text-start">
                <Col xs={6} md={3}>
                  <h6>Settings</h6>
                </Col>

                <Col xs={6} md={3}>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Parental Controls
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Test Participation
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Manage download device
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Activate a device
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Recent device streaming activity
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Sign out of all devices
                    </a>
                  </p>
                </Col>

                <Col xs={6} md={3}></Col>
                <Col xs={6} md={3}></Col>
              </Row>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default FourthSectionAccount;
