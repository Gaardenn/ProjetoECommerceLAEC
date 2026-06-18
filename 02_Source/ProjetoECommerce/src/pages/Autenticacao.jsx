import React from "react";
import CardAcesso from "../components/CardAcesso";
import { Link } from "react-router-dom";
import "../styles/Autenticacao.css";

export function Autenticacao() {
    return (
        <div className="auth-page">
            <div className='auth-header'>
                <Link to="/" className="auth-brand">
                    <img src="/Logo2.png" alt="CDist Logo" className="auth-logo-img"/>
                    <div className="auth-titles">
                        <h2>CDist</h2>
                        <span>Sua locadora digital</span>
                    </div>
                </Link>
            </div>
            <CardAcesso />
            <div className="auth-footer">
                <img src="/logofooter.svg" alt="CDist Logo" className="auth-footer-logo-img"/>
                <span className="auth-footer-title">CDist</span>
                <span className="auth-footer-point">•</span>
                <span>© 2026. Todos os direitos reservados.</span>
            </div>
        </div>
    );
}