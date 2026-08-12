import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPage';
import { Carrinho } from './pages/Carrinho';
import { Informacoes } from './pages/Informacoes';
import { Autenticacao } from './pages/Autenticacao';
import { useCart } from './hooks/useCart';
import { useUltimosAcessados } from './hooks/useUltimosAcessados';
import { useProducts } from './hooks/useProducts';

export function App() {
  const { products } = useProducts();
  const { cart, adicionarProduto, adicionarUnidade, removerUnidade, removerItem, marcar, todosMarcados, marcarTudo, presentear, quantMarcados, quantTotal,
          calcularSubtotal, calcularDescontoTotal, calcularFreteTotal } = useCart();
  const { queue, adicionarProdutoFila } = useUltimosAcessados();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home quantTotal={quantTotal} cart={cart} queue={queue} products={products}/>} />
        <Route path="/produto/:id" element={<ProductPage adicionarProduto={adicionarProduto} quantTotal={quantTotal} cart={cart} adicionarProdutoFila={adicionarProdutoFila}/>} />
        <Route path="/carrinho" element={<Carrinho cart={cart} adicionarUnidade={adicionarUnidade} removerUnidade={removerUnidade} removerItem={removerItem} marcar={marcar} todosMarcados={todosMarcados} marcarTudo={marcarTudo} presentear={presentear} quantMarcados={quantMarcados} quantTotal={quantTotal} calcularSubtotal={calcularSubtotal} calcularDescontoTotal={calcularDescontoTotal} calcularFreteTotal={calcularFreteTotal}/>} />
        <Route path="/informacoes" element={<Informacoes quantTotal={quantTotal} cart={cart}/>} />
        <Route path="/autenticacao" element={<Autenticacao />} />
      </Routes>
    </>
  )
}