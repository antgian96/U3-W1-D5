import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SecondSectionAccount = () => {
  return (
    <section>
      <section className="mt-5">
        <Container className="text-start">
          <Row>
            <Col></Col>
            <Col xs={12} md={6}>
              <h1>Account</h1>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <hr />
      </section>

      <Container>
        <Row className="g-1">
          <Col></Col>
          <Col xs={12} md={6}>
            <Container className="mt-4 px-3 p-5">
              <Row className="text-start">
                <Col xs={6} md={3}>
                  <h6>Membership & Billings</h6>
                  <Button variant="secondary">Cancel Membership</Button>
                </Col>

                <Col xs={6} md={3}>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      student@strive.school
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Password: ******
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover  text-white"
                    >
                      Phone: 321 044 1279
                    </a>
                  </p>
                  <div className="d-flex align-items-center ">
                    <i className="bi bi-paypal"></i>
                    <div><strong>admin@strive.school</strong></div>
                  </div>
                </Col>

                <Col xs={6} md={3}></Col>
                <Col xs={6} md={3}>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Change account email
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Change password
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Change Phone number
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Update payment info
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Billing details
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Redeem gift card or promo code
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Where to buy gift cards
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

export default SecondSectionAccount;
