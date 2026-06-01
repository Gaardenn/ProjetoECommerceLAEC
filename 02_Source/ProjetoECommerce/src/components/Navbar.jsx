import React from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="/logonavbar.svg" alt="CDist Logo" className="navbar-logo-img"/>
                <div className="navbar-titles">
                    <h1 className="navbar-name">CDist</h1>
                    <span className="navbar-slogan">Sua locadora digital</span>
                </div>
                
            </div>
            <div className="navbar-search">
                <span className="navbar-search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                <input type="text" placeholder= "Pesquisar..." className="navbar-search-input"/>
            </div>
        </nav>
    )
}