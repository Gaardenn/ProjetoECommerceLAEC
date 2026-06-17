import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Carrinho } from './pages/Carrinho';
import { Informacoes } from './pages/Informacoes';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/informacoes" element={<Informacoes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </>
  )
}