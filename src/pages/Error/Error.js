import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div className="error-container">
            <div>
                <h1 className="text-danger">404</h1>
                <h2 className="text-danger">SORRY!</h2>
                <h2 className="text-danger">Page Not Found</h2>
            </div>
        </div>
    );
};

export default Error;