import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Redux Toolkit</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/">Product</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/cart">My Bag</Nav.Link>
                    </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
