import "../styles/ProductItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function ProductItem({ produto, adicionarProduto, removerUnidade, removerItem, marcar }) {
    const { imagem, nome, plataforma, dev, pub, status, midia, quantidade, marcado, preco } = produto;
    const [isChecked, setIsChecked] = useState(marcado);

    function ItemEmEstoque() {
        if (quantidade === 1) {
            return (
                <>
                    <div className="item">
                        <label className="item-check">
                            <input type="checkbox" onChange={() => marcar(produto) } />
                            <svg className="item-checkbox" aria-hidden="true" viewBox="0 0 15 11" 
                                fill="none">
                                <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={marcado ? "#fff" : "none"} />
                            </svg>
                        </label>
                        <img src={`/${imagem}`} />
                        <div className="item-data">
                            <h2 className="item-data-title">{nome} - {plataforma}</h2>
                            <p className="item-data-subtitle">Developer: {dev} / Publisher: {pub}</p>
                            <p className="item-data-media">Mídia: <span className="item-data-media-bold">{midia}</span></p>
                            <div className="item-data-extrainfo">
                                <div className="item-data-extrainfo-quantity">
                                    <p className="item-data-extrainfo-quantity-remove-disabled">-</p>
                                    <p className="item-data-extrainfo-quantity-value">{quantidade}</p>
                                    <button className="item-data-extrainfo-quantity-add" onClick={() => adicionarProduto(produto)}>+</button>
                                </div>
                                <input type="checkbox" id="presente" name="presente" className="item-data-extrainfo-checkbox" />
                                <label for="presente" className="item-data-extrainfo-text">Para presente</label>
                            </div>
                        </div>
                        <div className="item-useful">
                            <p className="item-useful-currency">R$ <span className="item-useful-value">{preco}</span></p>
                            <button className="item-useful-button" onClick={() => removerItem(produto)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                    <hr />
                </>
            )
        } else {
            return (
                <>
                    <div className="item">
                        <label className="item-check">
                            <input type="checkbox" onChange={() => { marcar(produto) }} />
                            <svg className="item-checkbox" aria-hidden="true" viewBox="0 0 15 11" 
                                fill="none">
                                <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={marcado ? "#fff" : "none"} />
                            </svg>
                        </label>
                        <img src={`/${imagem}`} />
                        <div className="item-data">
                            <h2 className="item-data-title">{nome} - {plataforma}</h2>
                            <p className="item-data-subtitle">Developer: {dev} / Publisher: {pub}</p>
                            <p className="item-data-media">Mídia: <span className="item-data-media-bold">{midia}</span></p>
                            <div className="item-data-extrainfo">
                                <div className="item-data-extrainfo-quantity">
                                    <button className="item-data-quantity-remove" onClick={() => removerUnidade(produto)}>-</button>
                                    <p className="item-data-extrainfo-quantity-value">{quantidade}</p>
                                    <button className="item-data-extrainfo-quantity-add" onClick={() => adicionarProduto(produto)}>+</button>
                                </div>
                                <input type="checkbox" id="presente" name="presente" className="item-data-extrainfo-checkbox" />
                                <label for="presente" className="item-data-extrainfo-text">Para presente</label>
                            </div>
                        </div>
                        <div className="item-useful">
                            <p className="item-useful-currency">R$ <span className="item-useful-value">{preco}</span></p>
                            <button className="item-useful-button" onClick={() => removerItem(produto)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                    <hr />
                </>
            )
        }
    }

    return (
        <ItemEmEstoque />
    )
}