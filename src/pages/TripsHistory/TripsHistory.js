import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './TripsHistory.css'

const TripsHistory = () => {
    return (
        <div className="trips-container">
            <h1 className="py-5">Our Successful Trips</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Body>
                                <h1 className="text-danger">1.5M+</h1>
                                <Card.Title>Trips Succeed</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h1
                                    className="text-danger">5.0</h1>
                                <Card.Title>Rating</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h1
                                    className="text-danger">120+</h1>
                                <Card.Title>Countires Trips Done</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TripsHistory;