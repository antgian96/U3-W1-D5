import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const FifthSectionAccount = () => {
  return (
    <section>
      <Container>
        <Row className="g-1">
          <Col></Col>
          <Col xs={12} md={6}>
            <Container className="mt-4 px-3 p-5">
              <Row className="text-start">
                <Col xs={6} md={3}>
                  <h6>My Profile</h6>
                </Col>

                <Col xs={6} md={3}>
                  <div className="d-flex align-items-center">
                    <img
                      src="/assets/avatar.png"
                      className="avatar-img"
                      alt="Profile Avatar"
                    />
                    <div><strong>Strive Student</strong></div>
                  </div>
                  <br />
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Language
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Playback settings
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Subtitle appearance
                    </a>
                  </p>
                </Col>

                <Col xs={6} md={3}>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Viewing activity
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Ratings
                    </a>
                  </p>
                </Col>

                <Col xs={6} md={3}>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Manage Profile
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                    >
                      Add profile email
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default FifthSectionAccount;
