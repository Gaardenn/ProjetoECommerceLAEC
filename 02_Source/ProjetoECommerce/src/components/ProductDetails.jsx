import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faDolly, faShieldHalved,  } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProductDetails.css';

export function ProductDetails() {
    return (
        <div className="product-details-container">
            <div className="product-images-section">

                <div className="main-image-container">
                    <img src="god-of-war.svg" alt="Capa do jogo" className="main-image" />
                </div>

                <div className="thumbnail-gallery">
                    <FontAwesomeIcon icon={faChevronLeft} className="nav-arrow" />
                    <img src="thumb1.svg" alt="" className="thumb" />
                    <img src="thumb2.svg" alt="" className="thumb" />
                    <img src="thumb3.svg" alt="" className="thumb" />
                    <img src="thumb4.svg" alt="" className="thumb" />
                    <div className="thumb more-photos-circle">+5</div>
                    <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
                </div>
            </div>

            <div className="product-info-section">
                <h1 className="product-title">God of War Ragnarök</h1>
                <p className="info-line"><strong>Developer:</strong> Santa Monica Studios</p>
                <p className="info-line"><strong>Publisher:</strong> Sony Interactive Entertainment</p>
                <p className="info-line"><strong>Mídia:</strong> Física</p>

                <h2 className="section-title">Descrição do Jogo</h2>
                <p className="description-text">
                    God of War Ragnarök (2022) acompanha Kratos e Atreus na busca por respostas enquanto o Fimbulwinter devasta os nove reinos. Eles devem enfrentar deuses nórdicos, incluindo Thor e Odin, para impedir a batalha profetizada que resultará no fim do mundo, enquanto lidam com o dilema de Atreus entender seu papel como Loki.
                </p>

                <h2 className="section-title">Especificações</h2>
                <ul className="specs-list">
                    <li>Classificação Indicativa: 18 anos</li>
                    <li>Data de lançamento: 09 de novembro de 2022</li>
                    <li>Modo de Jogo: Single-Player</li>
                </ul>

                <h2 className="section-title">Tags</h2>
                <div className="tags-container">
                    <span className="tag-category">PS4</span>
                    <span className="tag-category">Ação</span>
                    <span className="tag-category">Aventura</span>
                </div>

                <div className="guarantees-container">
                    <div className="guarantee-item">
                        <FontAwesomeIcon icon={faShieldHalved} className="guarantee-icon" />
                        <span>Garantia estendida</span>
                    </div>
                    <div className="guarantee-item">
                        <FontAwesomeIcon icon={faDolly} className="guarantee-icon" />
                        <span>Devolução em até 7 dias</span>
                    </div>
                </div>
            </div>
        </div>
    );
}