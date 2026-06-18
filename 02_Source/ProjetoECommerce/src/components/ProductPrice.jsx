import '../styles/ProductPrice.css';

export function ProductPrice() {
    return (
        <div className="product-price-container">
            <section className="purchase-card">
                <div className="price-headline">
                    <div className="price-label">R$</div>
                    <div className="price-value">187,87</div>
                    <div className="discount-info">à vista</div>
                </div>
                <div className="installments-info">ou por R$ 18,79/mês <br /> em 12x</div>

                <div className="delivery-info">
                    <div className="delivery-row">
                        <span className="delivery-text">Quantidade:</span>
                        <div className="quantity">
                            <button type="button">-</button>
                            <span>1</span>
                            <button type="button">+</button>
                        </div>
                    </div>
                    <div className="delivery-status">Chegará sábado</div>
                    <div className="stock-info">Estoque disponível</div>
                </div>

                <button className="add-to-cart-button">Adicionar ao carrinho</button>
            </section>

            <section className="rating-card">
                <div className="rating-title">Opiniões do produto:</div>
                <div className="rating-summary">
                    <div className="rating-score">4.7</div>
                    <div className="rating-details">
                        <div className="rating-stars">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span className="star-empty">★</span>
                        </div>
                        <div className="rating-count">5.345 avaliações</div>
                    </div>
                </div>

                <div className="rating-bars">
                    <div className="rating-bar"><div className="bar-track"><div className="bar-fill fill-5"></div></div><div className="rating-scale"><span>5</span><span>★</span></div></div>
                    <div className="rating-bar"><div className="bar-track"><div className="bar-fill fill-4"></div></div><div className="rating-scale"><span>4</span><span>★</span></div></div>
                    <div className="rating-bar"><div className="bar-track"><div className="bar-fill fill-3"></div></div><div className="rating-scale"><span>3</span><span>★</span></div></div>
                    <div className="rating-bar"><div className="bar-track"><div className="bar-fill fill-2"></div></div><div className="rating-scale"><span>2</span><span>★</span></div></div>
                    <div className="rating-bar"><div className="bar-track"><div className="bar-fill fill-1"></div></div><div className="rating-scale"><span>1</span><span>★</span></div></div>
                </div>
            </section>
        </div>
    );
}