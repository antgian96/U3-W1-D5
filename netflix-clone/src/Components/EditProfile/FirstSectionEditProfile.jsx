import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FirstSectionEditProfile = () => {
  return (
    <section className="mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <h1>Edit Profile</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FirstSectionEditProfile;