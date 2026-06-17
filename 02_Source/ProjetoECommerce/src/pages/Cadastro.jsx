import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cadastro.css";

export function Cadastro() {
    return (
        <div className="cadastro-page">
            <div className="cadastro-header">
                <Link to="/" className="cadastro-brand">
                    <img src="/Logo2.png" alt="CDist Logo" className="cadastro-logo-img" />
                    <div className="cadastro-titles">
                        <h2>CDist</h2>
                        <span>Sua locadora digital</span>
                    </div>
                </Link>
            </div>

            <main className="cadastro-container">
                <h1 className="cadastro-title">Novo cadastro</h1>

                <form className="cadastro-form">
                    <label className="cadastro-field">
                        <span>Insira seu endereço de e-mail</span>
                        <input type="email" name="email" />
                    </label>

                    <label className="cadastro-field">
                        <span>Senha</span>
                        <input type="password" name="password" />
                    </label>

                    <label className="cadastro-field">
                        <span>Confirme sua senha</span>
                        <input type="password" name="confirmPassword" />
                    </label>

                    <button type="submit" className="cadastro-submit-button">
                        Registrar-se
                    </button>

                    <p className="cadastro-terms">
                        Ao continuar, você concorda com os <Link to="/informacoes">Termos de Uso</Link> e <Link to="/informacoes">Política de Privacidade</Link>.
                    </p>

                    <Link to="/login" className="cadastro-login-button">
                        Fazer login
                    </Link>
                </form>
            </main>
        </div>
    );
}