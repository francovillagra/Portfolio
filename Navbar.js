import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default MyNavbar;
