import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

export function Login() {
    return (
        <div className='login-page'>
            <div className='login-header'>
                <Link to="/" className="login-brand">
                    <img src="/Logo2.png" alt="CDist Logo" className="login-logo-img"/>
                    <div className="login-titles">
                        <h2>CDist</h2>
                        <span>Sua locadora digital</span>
                    </div>
                </Link>
            </div>
            <div className='login-container'>
                <h1 className="login-title">Fazer login</h1>

                <form className="login-form">
                    <label className="login-field">
                        <span>Insira seu endereço de e-mail</span>
                        <input type="email" name="email" />
                    </label>

                    <label className="login-field">
                        <span>Senha</span>
                        <input type="password" name="password" />
                    </label>

                    <button type="submit" className="login-submit-button">
                        Fazer login
                    </button>

                    <p className="login-terms">
                        Ao continuar, você concorda com os <Link to="/informacoes">Termos de Uso</Link> e <Link to="/informacoes">Política de Privacidade</Link>.
                    </p>

                    <p className="login-signup-text">Não possui cadastro?</p>

                    <Link to="/autenticacao" className="login-create-account-button">
                        Criar conta
                    </Link>
                </form>
            </div>
            <div className="login-footer">
                <img src="/logofooter.svg" alt="CDist Logo" className="login-footer-logo-img"/>
                <span className="login-footer-title">CDist</span>
                <span className="login-footer-point">•</span>
                <span>© 2026. Todos os direitos reservados.</span>
            </div>
        </div>
    );
}