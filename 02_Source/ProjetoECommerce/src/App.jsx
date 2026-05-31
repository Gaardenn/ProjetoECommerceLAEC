import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Carrinho } from './pages/Carrinho';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </>
  )
}