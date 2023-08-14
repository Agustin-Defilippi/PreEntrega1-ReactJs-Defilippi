import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import  "./NavBar.css"

const NavBar = () =>{
    return(
        <Navbar expand="lg" className="bg-NavBar my-0 py-1 w-100">
        <Container className='w-80'>
          <Navbar.Brand href="#home" className='fs-3 text-light'>Defilippi Classic Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Aplicacion" className='fs-5' id="basic-nav-dropdown">
                <NavDropdown title="Tienda" id="basic-nav-dropdown">
                    <NavDropdown.Item className='text-light bg-dark' href="#">
                        Herramientas
                    </NavDropdown.Item>
                    <NavDropdown.Item className='text-light bg-dark my-2' href="#">
                        Indumentarias de trabajo
                    </NavDropdown.Item>
                    <NavDropdown.Item className='text-light bg-dark' href="#">
                        Elementos de seguriad
                    </NavDropdown.Item>
                </NavDropdown>
                    <Nav.Link href="#link">Conocenos</Nav.Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget/>
      </Navbar>
    )
}

export default NavBar;