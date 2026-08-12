import { useEffect } from 'react'
import { ProductDetails } from '../components/ProductDetails';
import { ProductPrice } from '../components/ProductPrice';
import '../styles/ProductPage.css';
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useProducts } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';

export function ProductPage({adicionarProduto, quantTotal, cart, adicionarProdutoFila}) {
    const { id } = useParams();
    const { products } = useProducts();

    const produto = products.find((p) => p.id === Number(id));

    useEffect(() => {
        if (produto) {
            adicionarProdutoFila(produto);
        }
    }, [produto]);

    if (products.length === 0) {
        return (
            <p>Carregando...</p>
        )
    }

    if (!produto) {
        return (
            <p>Produto não encontrado.</p>
        )
    }

    return (
        <>
            <Navbar quantTotal={quantTotal} cart={cart} />
            <div className="product-page">
                <div className="product-page-wrapper">
                    <main className="product-main-content">
                        <ProductDetails produto={produto} />
                    </main>
                    <aside className="product-sidebar">
                        <ProductPrice produto={produto} adicionarProduto={adicionarProduto}/>
                    </aside>
                </div>
            </div>
            <Footer />
        </>
    );
}