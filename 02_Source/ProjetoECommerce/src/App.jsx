import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPage';
import { Carrinho } from './pages/Carrinho';
import { Informacoes } from './pages/Informacoes';
import { Autenticacao } from './pages/Autenticacao';
import { useCart } from './hooks/useCart';

export function App() {
  const { cart, adicionarProduto, adicionarUnidade, removerUnidade, removerItem, marcar, todosMarcados, marcarTudo, presentear, quantMarcados, quantTotal,
          calcularSubtotal, calcularDescontoTotal, calcularFreteTotal } = useCart();

  const gow = {
        id: 1,
        nome: "God of War Ragnarök",
        plataforma: "Playstation 4",
        dev: "Santa Monica Studios",
        pub: "Sony Interactive Entertrainment",
        status: "Em estoque",
        midia: "Física",
        presente: false,
        quantidade: 1,
        marcado: false,
        preco: 187.87,
        desconto: 0,
        imagem: "god-of-war.svg",
        peso: 0.05,
        volume: 1,
        classificacao: "18",
        data: "09 de novembro de 2022",
        modo: "Single-Player",
        tags: ["PS4", "Ação", "Aventura"],
        descricao: "God of War Ragnarök (2022) acompanha Kratos e Atreus em busca por respostas enquanto o Fimbulwinter devasta os nove reinos. Eles enfrentam deuses nórdicos, incluindo Thor e Odin, para impedir a batalha profetizada que pode trazer o fim do mundo, enquanto Atreus tenta entender seu papel como Loki."
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home quantTotal={quantTotal} cart={cart} />} />
        <Route path="/produto" element={<ProductPage produto={gow} adicionarProduto={adicionarProduto} quantTotal={quantTotal} cart={cart}/>} />
        <Route path="/carrinho" element={<Carrinho cart={cart} adicionarUnidade={adicionarUnidade} removerUnidade={removerUnidade} removerItem={removerItem} marcar={marcar} todosMarcados={todosMarcados} marcarTudo={marcarTudo} presentear={presentear} quantMarcados={quantMarcados} quantTotal={quantTotal} calcularSubtotal={calcularSubtotal} calcularDescontoTotal={calcularDescontoTotal} calcularFreteTotal={calcularFreteTotal}/>} />
        <Route path="/informacoes" element={<Informacoes quantTotal={quantTotal} cart={cart}/>} />
        <Route path="/autenticacao" element={<Autenticacao />} />
      </Routes>
    </>
  )
}