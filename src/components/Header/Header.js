import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Dantist Care</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Blogs</Nav.Link>
                    <Nav.Link href="#pricing">About me</Nav.Link>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                    <Nav.Link href="#pricing">Register</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;