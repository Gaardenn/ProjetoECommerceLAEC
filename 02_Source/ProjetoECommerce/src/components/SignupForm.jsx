import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Autenticacao.css";

function SignupForm({ onToggle }) {
    return (
        <div className='auth-container'>
            <h1 className="auth-title">Criar conta</h1>

            <form className="auth-form">
                <label className="auth-field">
                    <span>Insira seu endereço de e-mail</span>
                    <input type="email" name="email" />
                </label>

                <label className="auth-field">
                    <span>Senha</span>
                    <input type="password" name="password" />
                </label>

                <label className="auth-field">
                    <span>Confirmar senha</span>
                    <input type="password" name="confirmPassword" />
                </label>

                <button type="submit" className="auth-submit-button">
                    Criar conta
                </button>

                <p className="auth-terms">
                    Ao continuar, você concorda com os <Link to="/informacoes">Termos de Uso</Link> e <Link to="/informacoes">Política de Privacidade</Link>.
                </p>

                <button 
                    type="button" 
                    className="auth-create-account-button"
                    onClick={onToggle}
                >
                    Fazer login
                </button>
            </form>
        </div>
    );
}

export default SignupForm;
