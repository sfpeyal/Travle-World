import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = (props) => {
    // console.log(props.book);
    const { name, picture, info, _id } = props.book;

    return (
        <div className="book-container">
            <div>
                <img className="book-img" src={picture} alt="" />
            </div>
            <div className="">
                <br />
                <h3>{name}</h3>
                <p>{info.slice(0, 55)}</p>
                <Link to={`/books/process/${_id}`}><button type="button" className="btn btn-primary">Book Now</button></Link>
            </div>
        </div>
    );
};

export default Book;