import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faDesktop, faPhone, faAlignRight, faPortrait } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <Navbar bg="dark" id="navbar" className="navbar-dark fixed-top" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="text-danger">MZ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                        <Nav.Link href="#projects"><FontAwesomeIcon icon={faDesktop}/> Works</Nav.Link>
                        <Nav.Link href="#resume"><FontAwesomeIcon icon={faPortrait}/> Resume</Nav.Link>
                        <Nav.Link href="#about"><FontAwesomeIcon icon={faInfoCircle}/> About</Nav.Link>
                        <Nav.Link href="#contact"><FontAwesomeIcon icon={faPhone}/> Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <button className="menu btn btn-danger rounded-pill">
        //     <FontAwesomeIcon icon={faAlignRight} size="lg" />
        // </button>
    )
}


export default Header
