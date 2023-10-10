import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import './SignupForm.css';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ name, email, password }))
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
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    const error_border = errors.length > 0 ? "error-border" : ""
    
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
                <h1 className="login-header">Create account</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Your name
                        <input
                        type="text"
                        placeholder="First and last name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                    </label>
                    <label>
                        Mobile number or email
                        <input
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
                        placeholder="At least 6 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </label>
                    {/* <div>
                        <span className="i-icon">i</span>
                        <p className="alert-content">Passwords must be at least 6 characters.</p>
                    </div> */}
                    <label>
                        Re-enter password
                        <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        />
                    </label>
                    <button className="signup-btn" type="submit">Create Account</button>
                </form>
            </div>
        </div>
    );
}

export default SignupFormPage;