import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FoodTimeBar = () => {
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link as={Link} to="/breakfast">Breakfast</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/lunch' eventKey="link-1">Lunch</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/dinner' eventKey="link-2">Dinner</Nav.Link>
            </Nav.Item>
        </Nav>

    );
};

export default FoodTimeBar;