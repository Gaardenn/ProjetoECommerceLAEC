import React from 'react'
import { ProductDetails } from '../components/ProductDetails';
import { ProductPrice } from '../components/ProductPrice';
import '../styles/ProductPage.css';
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export function ProductPage({produto, adicionarProduto, quantTotal, cart}) {
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