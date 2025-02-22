// src/components/Presentation.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Presentation = () => {
  return (
    <section id="about" className="presentation-section" style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
      <Container>
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h1>¡Hola! Soy [Tu Nombre]</h1>
            <p>Desarrollador Fullstack apasionado por crear soluciones innovadoras y escalables con tecnología.</p>
            <Button variant="primary" href="#contact">Contáctame</Button>
          </Col>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/400" // Aquí puedes colocar tu foto
              alt="Foto de perfil"
              className="img-fluid rounded-circle"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Presentation;
