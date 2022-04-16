import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodItemBar.css'

const FoodTimeBar = () => {
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link as={Link} to="/breakfast">Breakfast</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/lunch' eventKey="">Lunch</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/dinner' eventKey="">Dinner</Nav.Link>
            </Nav.Item>
        </Nav>

    );
};

export default FoodTimeBar;