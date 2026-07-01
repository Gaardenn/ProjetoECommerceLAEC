import { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Autenticacao.css";

function LoginForm({ onToggle }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erro, setErro] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (email === "") {
            setErro("Preencha o e-mail.");
            return;
        }

        if (!email.includes("@")) {
            setErro("E-mail inválido.");
            return;
        }

        if (password === "") {
            setErro("Preencha a senha.");
            return;
        }

        setErro("");
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Login realizado!");
    }

    return (
        <div className='auth-container'>
            <h1 className="auth-title">Fazer login</h1>

            <form className="auth-form" onSubmit={handleSubmit}>
                <label className="auth-field">
                    <span>Insira seu endereço de e-mail</span>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label className="auth-field">
                    <span>Senha</span>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                {erro && <p className="auth-error">{erro}</p>}

                <button type="submit" className="auth-submit-button">
                    Fazer login
                </button>

                <p className="auth-terms">
                    Ao continuar, você concorda com os <Link to="/informacoes">Termos de Uso</Link> e <Link to="/informacoes">Política de Privacidade</Link>.
                </p>

                <p className="auth-signup-text">Não possui cadastro?</p>

                <button 
                    type="button" 
                    className="auth-create-account-button"
                    onClick={onToggle}
                >
                    Criar conta
                </button>
            </form>
        </div>
    );
}

export default LoginForm;