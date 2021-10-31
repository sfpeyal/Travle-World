import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './BookingProcess.css'

const BookingProcess = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://shocking-pirate-31404.herokuapp.com/books/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div className="process-container"> <br /><br /><br /><br /><br />
            <h1 className="my-3">Your Booking In Process.</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col></Col>
                    <Col>
                        <Card border="0">
                            <Card.Img variant="top" src={user.picture} />
                            <Card.Body>
                                <Card.Title className="fst-italic">{user.name}</Card.Title>
                                <Card.Text className="fst-italic">
                                    {user.info}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Link to={'/myorder'}><button type="button" className="btn btn-primary">Proceed To Booked</button></Link>
        </div>
    );
};

export default BookingProcess;