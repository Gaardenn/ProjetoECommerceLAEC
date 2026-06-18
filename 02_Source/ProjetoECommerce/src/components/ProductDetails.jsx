import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faDolly, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProductDetails.css';

export function ProductDetails() {
    return (
        <div className="product-details-container">
            <div className="product-gallery-panel">
                <div className="main-image-frame">
                    <img src="/god-of-war.svg" alt="Capa do jogo God of War Ragnarök" className="main-image" />
                </div>

                <div className="thumbnail-gallery">
                    <button type="button" className="nav-arrow" aria-label="Imagem anterior">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <img src="/god-of-war.svg" alt="Miniatura 1" className="thumb thumb-active" />
                    <img src="/god-of-war.svg" alt="Miniatura 2" className="thumb thumb-muted" />
                    <img src="/god-of-war.svg" alt="Miniatura 3" className="thumb thumb-muted" />
                    <img src="/god-of-war.svg" alt="Miniatura 4" className="thumb thumb-muted" />
                    <div className="thumb more-photos-circle">+5</div>
                    <button type="button" className="nav-arrow" aria-label="Próxima imagem">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>

            <div className="product-info-section">
                <h1 className="product-title">God of War Ragnarök</h1>
                <p className="info-line"><strong>Developer:</strong> Santa Monica Studios</p>
                <p className="info-line"><strong>Publisher:</strong> Sony Interactive Entertainment</p>
                <p className="info-line"><strong>Mídia:</strong> Física</p>

                <h2 className="section-title">Descrição</h2>
                <p className="description-text">
                    God of War Ragnarök (2022) acompanha Kratos e Atreus em busca por respostas enquanto o Fimbulwinter devasta os nove reinos. Eles enfrentam deuses nórdicos, incluindo Thor e Odin, para impedir a batalha profetizada que pode trazer o fim do mundo, enquanto Atreus tenta entender seu papel como Loki.
                </p>

                <h2 className="section-title">Especificações</h2>
                <ul className="specs-list">
                    <li><span>Classificação Indicativa:</span> 18 anos</li>
                    <li><span>Data de lançamento:</span> 09 de novembro de 2022</li>
                    <li><span>Modo de jogo:</span> Single-Player</li>
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