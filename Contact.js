// src/components/Contact.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría el código para manejar el envío del formulario
    console.log(formData);
  };

  return (
    <section id="contact" style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="text-center mb-4">Contacto</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Escribe tu mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Enviar Mensaje
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
