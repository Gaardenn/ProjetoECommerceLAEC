import '../styles/Carrinho.css';
import { ProductItem } from "../components/ProductItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export function Carrinho() {
    const gow = {
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
        nome: "Halo 3",
        plataforma: "Xbox 360",
        dev: "Bungie Studios",
        pub: "Microsoft Game Studios",
        status: "Esgotado",
        midia: "Física",
        presente: false,
        quantidade: 0,
        marcado: false,
        preco: 49.99,
        imagem: "Halo 3.png"
    }

    const smo = {
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

    return (
        <div>
            <section className="body">
                <div className="body-content">
                    <div className="body-content-cart">
                        <div className="body-content-cart-header">
                            <FontAwesomeIcon icon={faCartShopping} className="body-content-cart-header-icon" />
                            <h1 className="body-content-cart-header-text">Carrinho de compras</h1>
                        </div>
                        <hr />
                        <ProductItem produto={gow} />
                        <ProductItem produto={h3} />
                        <ProductItem produto={smo} />
                        <div className="body-content-footer">
                            <label for="selectAll" className="body-content-footer-title">Selecionar todos</label>
                            <input type="checkbox" id="selectAll" name="selectAll" />
                        </div>
                    </div>
                    <div>Total</div>
                </div>
            </section>
        </div>
    )
}