import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Buffalo Licores</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Compra</Nav.Link>
            <Nav.Link href="#pricing">Venta</Nav.Link>
            <Nav.Link href="#pricing">Proveedores</Nav.Link>
            <NavDropdown title="Producto" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Registrar producto</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ver productos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Actualizar producto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Eliminar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Cuenta</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;