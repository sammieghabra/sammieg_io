import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

const NavigationBar = () => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#about">about</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
};

export default NavigationBar
