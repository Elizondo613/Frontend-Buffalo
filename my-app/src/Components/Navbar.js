import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Producto from './Producto';
import Inventario from './Inventario';
import Proveedor from './Proveedor';
import Login from './Login';

function BasicExample() {
  return (
    <Router>
        <div>
            <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>Buffalo Licores</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/Venta"}>Venta</Nav.Link>
                    <Nav.Link as={Link} to={"/Proveedor"}>Proveedores</Nav.Link>
                    <NavDropdown title="Producto" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/Inventario"}>Ver productos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Producto"}>Registrar producto</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Editar"}>
                        Editar producto
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        <div>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Producto' element={<Producto/>}/>
                <Route path='/Inventario' element={<Inventario/>}/>
                <Route path='/Proveedor' element={<Proveedor/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default BasicExample;