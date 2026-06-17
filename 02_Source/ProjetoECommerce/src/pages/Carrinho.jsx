import '../styles/Carrinho.css';
import { ProductItem } from "../components/ProductItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export function Carrinho() {
    const { cart, adicionarProduto, removerUnidade, removerItem, marcar, todosMarcados, marcarTudo, presentear, quantMarcados,
        calcularSubtotal } = useCart();
    const [todos, setTodos] = useState(() => todosMarcados());
    const [quant, setQuant] = useState(() => quantMarcados());
    const [subtotal, setSubtotal] = useState(() => calcularSubtotal());

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
        imagem: "Jogo 1.png"
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
        imagem: "Halo 3.png"
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
        imagem: "Super Mario Odyssey.png"
    }

    useEffect(() => {
    }, []);

    useEffect(() => {
        setTodos(todosMarcados());
        setQuant(quantMarcados());
        setSubtotal(calcularSubtotal());
    }, [cart]);

    return (
        <div className="page">
            <Navbar />
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
                                <input type="checkbox" onChange={() => { marcarTudo(!todos); setTodos(!todos) }} />
                                <svg className="body-content-footer-checkbox" aria-hidden="true" viewBox="0 0 15 11"
                                    fill="none">
                                    <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={todos ? "#fff" : "none"} />
                                </svg>
                                <span className="body-content-footer-check-title">Selecionar Todos</span>
                            </label>
                        </div>
                    </div>
                    <div className="body-content-total">
                        {quant > 1 ?
                            <p className="body-content-total-quantity">({quant} produtos)</p> :
                            <p className="body-content-total-quantity">({quant} produto)</p>
                        }
                        <div className="body-content-total-subtotal">
                            <p className="body-content-total-subtotal-text">Subtotal</p>
                            <p className="body-content-total-subtotal-currency">
                                R$
                                <span className="body-content-total-subtotal-price">{subtotal}</span>
                            </p>
                        </div>
                        <div className="body-content-total-shipping">
                            <p className="body-content-total-shipping-text">Frete</p>
                            <p className="body-content-total-shipping-currency">
                                R$
                                <span className="body-content-total-shipping-price">11,71</span>
                            </p>
                        </div>
                        <div className="body-content-total-discount">
                            <p className="body-content-total-discount-text">Desconto</p>
                            <p className="body-content-total-discount-currency">
                                R$
                                <span className="body-content-total-discount-price">20,00</span>
                            </p>
                        </div>
                        <div className="body-content-total-value">
                            <p className="body-content-total-value-text">TOTAL</p>
                            <p className="body-content-total-value-currency">
                                R$
                                <span className="body-content-total-value-price">{subtotal + 11.71 - 20 < 0 ? 0 : subtotal + 11.71 - 20}</span>
                            </p>
                        </div>
                        <Link to="/" className="body-content-total-button">Comprar</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}