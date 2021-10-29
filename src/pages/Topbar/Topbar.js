import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Topbar = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Travel WORLD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#home">Tours</Nav.Link>
                            <Nav.Link href="#link">Pages</Nav.Link>
                            <Nav.Link href="#home">Blogs</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link> */}



                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/helpline">Helpline</Nav.Link>
                            {user.email ?
                                <Button onClick={logOut} variant="danger">LogOut</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Topbar;