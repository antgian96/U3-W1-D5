import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ThirdSectionAccount = () => {
  return (
    <section>
      <Container>
        <Row className="g-1">
          <Col></Col>
          <Col xs={12} md={6}>
            <Container className="mt-4 px-3 p-5">
              <Row className="text-start">
                <Col xs={6} md={3}>
                  <h6>Plan Details</h6>
                </Col>

                <Col xs={6} md={3}>
                  <div className="d-flex align-items-center">
                    <strong>Premium</strong>
                    <Badge bg="secondary" className="ms-2">
                      ULTRA HD
                    </Badge>
                  </div>
                </Col>

                <Col xs={6} md={3}></Col>

                <Col xs={6} md={3}>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Change plan
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <hr />
    </section>
  );
};

export default ThirdSectionAccount;
