import "../styles/ProductItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../hooks/useCart";

export function ProductItem({ produto }) {
    const { imagem, nome, plataforma, dev, pub, status, midia, quantidade, preco } = produto;
    const { removerUnidade, removerItem } = useCart();

    function ItemEsgotado() {
        return (
            <>
                <div className="item">
                    <img src={`/${imagem}`} />
                    <div className="item-data">
                        <h2 className="item-data-title">{nome} - {plataforma}</h2>
                        <p className="item-data-subtitle">Developer: {dev} / Publisher: {pub}</p>
                        <p className="item-data-status">Status: <span className="item-data-status-soldout">{status}</span></p>
                        <div className="item-data-extrainfo">
                            <p className="item-data-extrainfo-text">Mídia: {midia}</p>
                            <input type="checkbox" id="presente" name="presente" className="item-data-extrainfo-checkbox" />
                            <label for="presente" className="item-data-extrainfo-text">Para presente</label>
                        </div>
                    </div>
                    <div className="item-useful">
                        <p className="item-useful-currency">R$ <span className="item-useful-value">{preco}</span></p>
                        <button className="item-useful-remove" className="item-useful-button" onClick={() => removerItem(produto)}>Remover</button>
                    </div>
                </div>
                <hr />
            </>
        )
    }

    function ItemEmEstoque() {
        if (quantidade === 1) {
            return (
                <>
                    <div className="item">
                        <img src={`/${imagem}`} />
                        <div className="item-data">
                            <h2 className="item-data-title">{nome} - {plataforma}</h2>
                            <p className="item-data-subtitle">Developer: {dev} / Publisher: {pub}</p>
                            <p className="item-data-status">Status: {status}</p>
                            <div className="item-data-extrainfo">
                                <p className="item-data-extrainfo-text">Mídia: {midia}</p>
                                <input type="checkbox" id="presente" name="presente" className="item-data-extrainfo-checkbox" />
                                <label for="presente" className="item-data-extrainfo-text">Para presente</label>
                            </div>
                            <div className="item-data-quantity">
                                <button className="item-data-quantity-button">
                                    <FontAwesomeIcon icon={faTrash} className="item-data-quantity-button-trashicon" onClick={() => removerItem(produto)}/>
                                </button>
                                <p className="item-data-quantity-value">{quantidade}</p>
                                <button className="item-data-quantity-button">+</button>
                            </div>
                        </div>
                        <div className="item-useful">
                            <p className="item-useful-currency">R$ <span className="item-useful-value">{preco}</span></p>
                            <input type="checkbox" id="ativo" name="ativo" />
                            <button className="item-useful-remove" className="item-useful-button" onClick={() => removerItem(produto)}>Remover</button>
                        </div>
                    </div>
                    <hr />
                </>
            )
        } else {
            return (
                <>
                    <div className="item">
                        <img src={`/${imagem}`} />
                        <div className="item-data">
                            <h2 className="item-data-title">{nome} - {plataforma}</h2>
                            <p className="item-data-subtitle">Developer: {dev} / Publisher: {pub}</p>
                            <p className="item-data-status">Status: {status}</p>
                            <div className="item-data-extrainfo">
                                <p className="item-data-extrainfo-text">Mídia: {midia}</p>
                                <input type="checkbox" id="presente" name="presente" className="item-data-extrainfo-checkbox" />
                                <label for="presente" className="item-data-extrainfo-text">Para presente</label>
                            </div>
                            <div className="item-data-quantity">
                                <button className="item-data-quantity-button" onClick={() => removerUnidade(produto)}>-</button>
                                <p className="item-data-quantity-value">{quantidade}</p>
                                <button className="item-data-quantity-button">+</button>
                            </div>
                        </div>
                        <div className="item-useful">
                            <p className="item-useful-currency">R$ <span className="item-useful-value">{preco}</span></p>
                            <input type="checkbox" id="ativo" name="ativo" />
                            <button className="item-useful-remove" className="item-useful-button" onClick={() => removerItem(produto)}>Remover</button>
                        </div>
                    </div>
                    <hr />
                </>
            )
        }
    }


    if (status === "Esgotado") {
        return (
            <ItemEsgotado />
        )
    } else {
        return (
            <ItemEmEstoque />
        )
    }
}