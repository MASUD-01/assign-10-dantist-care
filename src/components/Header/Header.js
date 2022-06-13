import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../asset/png.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" style={{ background: '#ffffff' }} >
            <Container>
                <Navbar.Brand as={Link} to="/home" className='fs-1 text-black'> <img className='image-size' src={logo} alt="logo" /> Dentist Care</Navbar.Brand>
                <Navbar.Toggle className='toggle' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-text" >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/aboutme">About me</Nav.Link>
                        <Nav.Link as={Link} to="">Our Team</Nav.Link>
                        <Nav.Link as={Link} to="">pages</Nav.Link>
                        <Nav.Link as={Link} to="">service</Nav.Link>
                        <Nav.Link as={Link} to="">contact</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {!user ? <Nav.Link as={Link} to="/login">Login</Nav.Link> :
                            <Nav.Link as={Link} onClick={handleSignout} to="/home">Signout</Nav.Link>}
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    </Nav>
                    <Nav.Link as={Link} to="" className='appoinment'>Appoinment</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;