import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Informacoes } from './pages/Informacoes';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacoes" element={<Informacoes />} />
      </Routes>
    </>
  )
}