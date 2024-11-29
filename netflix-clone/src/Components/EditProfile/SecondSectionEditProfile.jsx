import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProfileSettings = () => {
  return (
    <section className="mt-4">
      <Container>
        <hr className="hr1" />
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <Row>
              <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-3 mb-md-0">
                <Image
                  src="/assets/avatar.png"
                  className="img-fluid mb-2"
                  alt="Profile Picture"
                  style={{ width: '100px', height: '100px' }}
                />
                <span className="edit-icon text-white">
                  <i className="bi bi-pencil"></i>
                </span>
              </Col>

              <Col xs={12} md={8}>
                <div className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Strive Student"
                    className="input-group-text"
                  />
                  <br />
                  <Form.Label htmlFor="language">Language:</Form.Label>
                  <Form.Select className="bg-dark text-light" id="language">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </Form.Select>
                </div>
                <hr />
                <div className="mb-3">
                  <Form.Label>Maturity Settings:</Form.Label>
                  <br />
                  <Button variant="outline-light" size="sm" className="mb-1">
                    ALL MATURITY RATINGS
                  </Button>
                  <p className="mb-1">
                    Show titles of all maturity ratings for this profile.
                  </p>
                  <Button variant="outline-light" size="sm">
                    EDIT
                  </Button>
                </div>
                <hr />
                <div className="mb-4">
                  <Form.Label>Autoplay controls:</Form.Label>
                  <div className="form-check">
                    <Form.Check
                      type="checkbox"
                      id="autoplay-next"
                      label="Autoplay next episode in a series on all devices."
                      className="checks"
                    />
                  </div>
                  <div className="form-check">
                    <Form.Check
                      type="checkbox"
                      id="autoplay-previews"
                      label="Autoplay previews while browsing on all devices."
                      className="checks"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProfileSettings;
