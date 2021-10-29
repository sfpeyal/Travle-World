import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();

    return (
        <div className="login-container">
            <br /><br /><br /><br /><br /><br /><br />
            <button onClick={signInUsingGoogle}>Sing with google</button>
        </div>
    );
};

export default Login;