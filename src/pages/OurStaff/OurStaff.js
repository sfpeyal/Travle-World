import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './OurStaff.css'

const OurStaff = () => {
    return (
        <div className="team-container">
            <h1 className="py-5">Our Teams</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card border="0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1558403194-611308249627?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                            <Card.Body>
                                <Card.Title>TEAM 1</Card.Title>
                                <Card.Text>
                                    This is our dutiy to serve you the best trips here, you can choose your
                                    favourite deals here, because we numbers of teams who are working 24 hours to give best deals on Travle WORLD.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1551135049-8a33b5883817?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                            <Card.Body>
                                <Card.Title>TEAM 2</Card.Title>
                                <Card.Text>
                                    This is our dutiy to serve you the best trips here, you can choose your
                                    favourite deals here, because we numbers of teams who are working 24 hours to give best deals on Travle WORLD.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="0">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80" />
                            <Card.Body>
                                <Card.Title>TEAM 3</Card.Title>
                                <Card.Text>
                                    This is our dutiy to serve you the best trips here, you can choose your
                                    favourite deals here, because we numbers of teams who are working 24 hours to give best deals on Travle WORLD.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurStaff;