import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                <img src="/logonavbar.svg" alt="CDist Logo" className="navbar-logo-img"/>
                <div className="navbar-titles">
                    <h1 className="navbar-name">CDist</h1>
                    <span className="navbar-slogan">Sua locadora digital</span>
                </div>
                
            </Link>
            <div className="navbar-search">
                <span className="navbar-search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                <input type="text" placeholder= "Pesquisar..." className="navbar-search-input"/>
            </div>

            <div className="navbar-actions">
                <Link to="/carrinho" className="navbar-cart">
                    <span className="navbar-cart-icon"><FontAwesomeIcon icon={faCartShopping} /></span>
                    <span className="navbar-cart-counter">2</span>
                </Link>

                <Link to="/login" className="navbar-login">
                    <span className="navbar-login-icon"><FontAwesomeIcon icon={faUser} /></span>
                    <span className="navbar-login-text">Login</span>
                </Link>
            </div>
        </nav>
    )
}