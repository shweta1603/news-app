import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css';
const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to='/'>NEWS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='news-list'>Headline-India</Nav.Link>
                        <Nav.Link as={NavLink} to='news'>News List</Nav.Link>
                        <Nav.Link as={NavLink} to='news-tech'>Technology</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
