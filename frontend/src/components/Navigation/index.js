import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';

const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
        } else {
        sessionLinks = (
            <>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
        }
    
        return (
        <div>
            <div className="top-navbar">
                <div >
                    <NavLink to="/"><img className="home-logo" src={logo} alt='logo' /></NavLink>
                </div>
                
                <div className="others">
                <NavLink to="/cart"><img className="cart-icon" src={cart}/></NavLink>
                    {sessionLinks}
                </div>
            </div>
        </div>
    );
}

export default Navigation;
