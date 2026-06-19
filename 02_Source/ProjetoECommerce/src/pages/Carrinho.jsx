import '../styles/Carrinho.css';
import { ProductItem } from "../components/ProductItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export function Carrinho({cart, adicionarProduto, removerUnidade, removerItem, marcar, todosMarcados, marcarTudo, presentear, quantMarcados, quantTotal, calcularSubtotal, calcularDescontoTotal, calcularFreteTotal}) {
    
    const [todos, setTodos] = useState(() => todosMarcados());
    const [quant, setQuant] = useState(() => quantMarcados());
    const [subtotal, setSubtotal] = useState(() => calcularSubtotal());
    const [descontoTotal, setDescontoTotal] = useState(() => calcularDescontoTotal());
    const [frete, setFrete] = useState(() => calcularFreteTotal());

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
        imagem: "Jogo 1.png",
        peso: 0.05,
        volume: 1
    }

    const h3 = {
        id: 2,
        nome: "Halo 3",
        plataforma: "Xbox 360",
        dev: "Bungie Studios",
        pub: "Microsoft Game Studios",
        status: "Em estoque",
        midia: "Física",
        presente: false,
        quantidade: 0,
        marcado: false,
        preco: 49.99,
        desconto: 20,
        imagem: "Halo 3.png",
        peso: 0.06,
        volume: 1
    }

    const smo = {
        id: 3,
        nome: "Super Mario Odyssey",
        plataforma: "Nintendo Switch",
        dev: "Nintendo Entertrainment Planning & Development",
        pub: "Nintendo",
        status: "Em estoque",
        midia: "Digital",
        presente: true,
        quantidade: 1,
        marcado: true,
        preco: 349.99,
        desconto: 0,
        imagem: "Super Mario Odyssey.png",
        peso: 0,
        volume: 0
    }

    useEffect(() => {
    }, []);

    useEffect(() => {
        setTodos(todosMarcados());
        setQuant(quantMarcados());
        setSubtotal(calcularSubtotal());
        setDescontoTotal(calcularDescontoTotal());
        setFrete(calcularFreteTotal());
    }, [cart]);

    return (
        <div className="page">
            <Navbar quantTotal={quantTotal} cart={cart} />
            <section className="body">
                <div className="body-content">
                    <div className="body-content-cart">
                        <div className="body-content-cart-header">
                            <FontAwesomeIcon icon={faCartShopping} className="body-content-cart-header-icon" />
                            <h1 className="body-content-cart-header-text">Carrinho de compras</h1>
                        </div>
                        <hr className="body-content-cart-line" />
                        {cart.map((p) => (
                            <ProductItem key={p.id} produto={p} adicionarProduto={adicionarProduto} removerUnidade={removerUnidade}
                                removerItem={removerItem} marcar={marcar} presentear={presentear} />
                        ))}
                        <div className="body-content-footer">
                            <label className="body-content-footer-check">
                                <input type="checkbox" onChange={() => {
                                    marcarTudo(!todos); setTodos(!todos); setSubtotal(calcularSubtotal());
                                    setQuant(quantMarcados()); setDescontoTotal(calcularDescontoTotal()); setFrete(calcularFreteTotal()); setTotal(calcularTotal());
                                }} />
                                <svg className="body-content-footer-checkbox" aria-hidden="true" viewBox="0 0 15 11"
                                    fill="none">
                                    <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={todos ? "#fff" : "none"} />
                                </svg>
                                <span className="body-content-footer-check-title">Selecionar Todos</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="body-content-total">
                            {quant > 1 ?
                                <p className="body-content-total-quantity">({quant} produtos)</p> :
                                <p className="body-content-total-quantity">({quant} produto)</p>
                            }
                            <div className="body-content-total-subtotal">
                                <p className="body-content-total-subtotal-text">Subtotal</p>
                                <p className="body-content-total-subtotal-currency">
                                    R$
                                    <span className="body-content-total-subtotal-price">{subtotal.toFixed(2)}</span>
                                </p>
                            </div>
                            <div className="body-content-total-shipping">
                                <p className="body-content-total-shipping-text">Frete</p>
                                <p className="body-content-total-shipping-currency">
                                    R$
                                    <span className="body-content-total-shipping-price">{frete.toFixed(2)}</span>
                                </p>
                            </div>
                            <div className="body-content-total-discount">
                                <p className="body-content-total-discount-text">Desconto</p>
                                <p className="body-content-total-discount-currency">
                                    R$
                                    <span className="body-content-total-discount-price">{descontoTotal.toFixed(2)}</span>
                                </p>
                            </div>
                            <div className="body-content-total-value">
                                <h2 className="body-content-total-value-text">TOTAL</h2>
                                <p className="body-content-total-value-currency">
                                    R$
                                    <span className="body-content-total-value-price">{subtotal + frete - descontoTotal < 0 ? (0).toFixed(2) : (subtotal + frete - descontoTotal).toFixed(2)}</span>
                                </p>
                            </div>
                            <Link to="/comprar" className="body-content-total-button">Comprar</Link>
                        </div>
                        <div className="body-content-shipping">
                            <h2 className="body-content-shipping-header">Calcular frete e entrega:</h2>
                            <form className="body-content-shipping-form">
                                <div className="body-content-shipping-form-input">
                                    <label for="cep" className="body-content-shipping-form-input-text">Insira seu CEP</label>
                                    <input type="text" id="cep" name="cep" placeholder="00000-000" className="body-content-shipping-form-input-field" />
                                </div>
                                <div className="body-content-shipping-form-city body-content-shipping-form-text">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <p>Sua cidade</p>
                                </div>
                                <input type="submit" value="Calcular" className="body-content-shipping-form-submit" />
                            </form>
                            <hr />
                            <div className="body-content-shipping-value">
                                <p className="body-content-shipping-value-title">Valor</p>
                                <p className="body-content-shipping-value-money">R$ 11,71</p>
                            </div>
                            <div className="body-content-shipping-value">
                                <p className="body-content-shipping-value-title">Tempo</p>
                                <p className="body-content-shipping-value-days">até 9 dias úteis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}