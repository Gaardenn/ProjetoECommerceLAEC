import React from 'react'
import { ProductDetails } from '../components/ProductDetails';
import { ProductPrice } from '../components/ProductPrice';
import '../styles/ProductPage.css';

export function ProductPage() {
    return (
        <div className="product-page-wrapper">
            <main className="product-main-content">
                <ProductDetails /> 
            </main>
            <aside className="product-sidebar">
                <ProductPrice />
            </aside>
        </div>
    );
}