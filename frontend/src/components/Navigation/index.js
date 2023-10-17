import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { getCartItems } from '../../store/cart_items';
import { AiFillCaretDown } from 'react-icons/ai';
import * as sessionActions from '../../store/session';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';

const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const history = useHistory()
    const [term, setTerm] = useState("")
    const cartItems = useSelector(getCartItems)
    let quantity = 0
    cartItems.map(item => quantity += item.quantity)

    const categories = {
        "Electronics": "electronics",
        "Clothing and Fashion": "clothing",
        "Home and Furniture": "home",
        "Book and Media": "books",
        "Sports and Outdoors": "sports"
    }


    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    const displayUser = sessionUser ? (
        <>
            <div className="nav-link-account">
                <div className="nav-line-1-container">
                    <span className="nav-line-1">Hello, {sessionUser.name}</span>
                </div>
                <span className="nav-line-2">
                    Account & Lists
                    <AiFillCaretDown size="11px" color="#a7acb2"/>
                </span>
            </div>
            <div className="dropdown-content">
                <button className="menu-logout" onClick={handleLogout}>Logout</button>
                <p>See you later! ヾ( ´･ω･｀)</p>
            </div>
        </>
    ) : (
        <>
            <div className="nav-link-account">
                <div className="nav-line-1-container">
                    <span className="nav-line-1">Hello, sign in</span>
                </div>
                <span className="nav-line-2">
                    Account & Lists
                    <AiFillCaretDown size="11px" color="#a7acb2"/>
                </span>
            </div>
            <div className="dropdown-content">
                <NavLink className="menu-login-container" to="/login">
                    <span className="login-text">Sign in</span>
                    {/* <a className="menu-login" href="/login">Sign in</a> */}
                </NavLink>
                <div className="new-customer">
                    New Customer?
                    <a className="menu-signup" href="/signup">Start here.</a>
                </div>
            </div>
        </>
    )
    
    const handleSearch = e => {
        e.preventDefault();
        if (term.length === 0) {
            history.push('/');
        } else {
            history.push(`/search/${term}`)
        }
    }

    const cartAccess = sessionUser ? "/cart" : "/login"

    return (
        <div>
            <div className="top-navbar">
                <div className="nav-left">
                    <NavLink to="/"><img className="home-logo" src={logo} alt='amznLogo' /></NavLink>
                    <a href="https://linkedin.com/in/raymondtan-py"><img className="linkedin" src={linkedinIcon} alt='linkedinLogo' /></a>
                    <a href="https://github.com/ratan-ml"><img className="github" src={githubIcon} alt='githubLogo' /></a>
                    
                </div>
                
                <div className="nav-search">
                    <form className="search-form" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search Amuhzaan"
                            value={term}
                            onChange={e => setTerm(e.target.value)}
                        />
                        <button type="submit">
                            <FaMagnifyingGlass size="18px"/>
                        </button>
                        
                    </form>
                </div>

                <div className="user-widgets">
                    <div className="dropdown">
                        {displayUser}
                    </div>
                    <div className="cart-set">
                        <p>{cartItems.length === 0 || sessionUser === null ? 0 : quantity}</p>
                        <NavLink style={{position:'relative'}} to={cartAccess}>
                            <img className="cart-icon" src={cart}/>
                            <span className="cart-icon-name">Cart</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="navbar-category-container">
                {Object.entries(categories).map(([category, param]) => 
                    <div className="nav-category">
                        <NavLink className="category-link" to={`/categories/${param}`}>
                            {category}
                        </NavLink>
                    </div>
                )}
            </div>


        </div>
    );
}

export default Navigation;
