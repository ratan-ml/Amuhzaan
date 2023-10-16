import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ email, password }))
        .catch(async (res) => {
            let data;
            try {
            data = await res.clone().json();
            } catch {
            data = await res.text(); 
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
    }

    const error_border = errors.length > 0 ? "error-border" : ""

    const handleDemo = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({email: "demo@user.io", password: "password" }))
    }

    return (
        <div className="login-container">
            <div className="login-logo">
                <NavLink to="/">
                    Amzn Logo
                </NavLink>
            </div>
            <div className={`error-container ${error_border}`}>
                <ul className="error-list">
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
            </div>
            <div className="login-form">
                <h1 className="login-header">Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email or mobile phone number
                        <input
                        id="login-email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </label>
                    <label>
                        Password
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </label>
                    <button className="login-btn" type="submit">Log In</button>
                    <button className="demo-btn" onClick={handleDemo}>Demo Login</button>
                </form>
                
                {/* <p className="login-agreement">
                    By continuing, you agree to Amuhzaan's Conditions of Use and Privacy Notice.
                </p> */}
            </div>
            <div className="divider">
                <h5>New to Amuhzaan?</h5>
            </div>
            <span className="create-account-container">
                <NavLink to="/signup">Create your Amuhzaan account</NavLink>
            </span>
        </div>
    );
}

export default LoginFormPage;