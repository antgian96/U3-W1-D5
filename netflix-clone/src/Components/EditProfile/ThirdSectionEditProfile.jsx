import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ThridSectionEditProfile = () => {
  return (
    <section>
      <Container className="text-center">
        <hr className="hr1" />
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="d-flex flex-wrap justify-content-center text-center">
            <Button variant="light" className="mb-2 mx-2">
              SAVE
            </Button>
            <Button variant="outline-light" className="text-white mb-2 mx-2">
              CANCEL
            </Button>
            <Button variant="outline-light" className="text-white mb-2 mx-2">
              DELETE PROFILE
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThridSectionEditProfile;
