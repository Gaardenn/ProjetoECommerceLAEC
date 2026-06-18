import React from 'react';
import { Link } from "react-router-dom";
import "../styles/CardAcesso.css";

function CardAcesso() {
    return (
        <div className='auth-container'>
            <h1 className="auth-title">Fazer login</h1>

            <form className="auth-form">
                <label className="auth-field">
                    <span>Insira seu endereço de e-mail</span>
                    <input type="email" name="email" />
                </label>

                <label className="auth-field">
                    <span>Senha</span>
                    <input type="password" name="password" />
                </label>

                <button type="submit" className="auth-submit-button">
                    Fazer login
                </button>

                <p className="auth-terms">
                    Ao continuar, você concorda com os <Link to="/informacoes">Termos de Uso</Link> e <Link to="/informacoes">Política de Privacidade</Link>.
                </p>

                <p className="auth-signup-text">Não possui cadastro?</p>

                <Link to="/autenticacao" className="auth-create-account-button">
                    Criar conta
                </Link>
            </form>
        </div>
    );
}

export default CardAcesso;