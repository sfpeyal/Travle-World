import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Booking.css'

const Booking = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://shocking-pirate-31404.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="main">
            <h1 className="py-5">Here Is Our Booking Items</h1>
            <div className="d-flex justify-content-center">
                <div className="booking-container">

                    {
                        books.map(book => <Book
                            key={book.id}
                            book={book}
                        ></Book>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Booking;