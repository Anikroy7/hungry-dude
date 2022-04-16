import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../../src/images/logo2.png'
import Search from '../Main/Search/Search';

const Header = () => {
    return (
        <>



            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ width: '200px', height: '40px' }} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className='me-4 fw-bold' href="#deets"><FontAwesomeIcon
                                icon={faShoppingCart} ></FontAwesomeIcon></Nav.Link>
                            <Nav.Link className='me-4 fw-bold' href="#deets">Login</Nav.Link>
                            <Nav.Link className='px-4 ms-2 bg-danger rounded-pill text-white' eventKey={2} href="#memes">
                                Signup
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
