import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })

    }

    return (
        <div className="login-container">
            <div>

                <h1>Login First Before Booking.</h1>
                <br />
                <button onClick={handleGoogleLogin}>Sing With Google</button>
            </div>
        </div>
    );
};

export default Login;