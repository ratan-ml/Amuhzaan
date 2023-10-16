import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';

const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const history = useHistory()
    const [term, setTerm] = useState("")

    useEffect(()=> {

    },[])

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
    
    const handleSearch = e => {
        e.preventDefault();
        if (term.length === 0) {
            history.push('/');
        } else {
            history.push(`/search/${term}`)
        }
    }

    return (
        <div>
            <div className="top-navbar">
                <div >
                    <NavLink to="/"><img className="home-logo" src={logo} alt='logo' /></NavLink>
                </div>
                
                <div>
                    <form className="search-form" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search Amuhzaan"
                            value={term}
                            onChange={e => setTerm(e.target.value)}
                        />
                        <button type="submit">find</button>
                    </form>
                </div>

                <div className="others">
                    {sessionLinks}
                    <div className="cart-set">
                        <NavLink to="/cart">
                            <img className="cart-icon" src={cart}/>
                            <span className="cart-icon-name">Cart</span>
                        </NavLink>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Navigation;
