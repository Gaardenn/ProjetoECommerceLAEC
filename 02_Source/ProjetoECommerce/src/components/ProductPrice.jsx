import React from 'react'
import '../styles/ProductPrice.css';

export function ProductPrice() {
    return (
        <div className="product-price-container">
            <div className="price-headline">
                <div className="price-label">R$</div>
                <div className="price-value">187,87</div>
                <div className="discount-info">à vista</div>
            </div>
            <div className="installments-info">ou por R$ 18,99 <br /> em 12x</div>

            <div className="delivery-info">
                <div className="delivery-text">Entrega:</div>
                <div className="delivery-cost">R$ 15,90</div>
                <div className="delivery-time">em até 7 dias úteis</div>
                <hr className="delivery-separator" />
                <div className="delivery-quantity">Quantidade:</div>
                <input type="number" className="quantity-input" min="1" defaultValue="1" />
                <div className="stock-info">10 em estoque</div>
            </div>

            <button className="add-to-cart-button">Adicionar ao carrinho</button>
        </div>
    );
}