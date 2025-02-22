// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '60px 0' }}>
      <Container>
        <h2 className="text-center mb-4">Mis Proyectos</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Proyecto 1</Card.Title>
                <Card.Text>
                  Descripción breve del proyecto. Esta aplicación utiliza tecnologías como React y Node.js.
                </Card.Text>
                <Button variant="primary" href="https://github.com/mi-repo">Ver en GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Proyecto 2</Card.Title>
                <Card.Text>
                  Descripción breve del proyecto. Esta aplicación utiliza tecnologías como React y Node.js.
                </Card.Text>
                <Button variant="primary" href="https://github.com/mi-repo">Ver en GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Proyecto 3</Card.Title>
                <Card.Text>
                  Descripción breve del proyecto. Esta aplicación utiliza tecnologías como React y Node.js.
                </Card.Text>
                <Button variant="primary" href="https://github.com/mi-repo">Ver en GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
