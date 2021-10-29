import React from 'react';
import './Book.css'

const Book = (props) => {
    console.log(props.book);
    const { name, picture, info } = props.book;

    return (
        <div className="book-container">
            <div className="">
                <img className="book-img" src={picture} alt="" />
            </div>
            <div className="">
                <h3>{name}</h3>
                <small>{info}</small>
            </div>
        </div>
    );
};

export default Book;