import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './header.css'
import Logo from './Logo';
import { Home, Info, Support } from '../../assets';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Container >
                    <Navbar.Brand href="#home">
                        <Logo />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#"><Home className="linkIcon"/> Home</Nav.Link>
                            <Nav.Link href="#"><Info className="linkIcon"/>About</Nav.Link>
                            <Nav.Link href="#"><Support className="linkIcon"/>Support</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;