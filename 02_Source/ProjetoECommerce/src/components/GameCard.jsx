import { Link } from "react-router-dom";
import "../styles/GameCard.css";

export function GameCard({ jogo }) {
    const precoFinal = jogo.preco - (jogo.preco * (jogo.desconto / 100));

    let plataformaClass = "default";
    if (jogo.plataforma.toLowerCase().includes("playstation")) plataformaClass = "playstation";
    if (jogo.plataforma.toLowerCase().includes("xbox")) plataformaClass = "xbox";
    if (jogo.plataforma.toLowerCase().includes("nintendo")) plataformaClass = "nintendo";

    return (
        <div className="game-card">
            <Link to="/produto" className="link">
                <div className={`game-card-header ${plataformaClass}`}>
                    {jogo.plataforma}
                </div>
                <div className="game-card-image-container">
                    <img src={jogo.imagem} alt={jogo.nome} className="game-card-image" />
                </div>
                <div className="game-card-info">
                    <div className="game-card-platform-badge">{jogo.tags[0] || jogo.plataforma}</div>
                    <h4 className="game-card-title">{jogo.nome}</h4>

                    <div className="game-card-pricing">
                        <div className="game-card-discount-info">
                            <span className="game-card-original-price">
                                A partir de {jogo.desconto > 0 && <strike>R$ {jogo.preco.toFixed(2).replace('.', ',')}</strike>}
                            </span>
                            {jogo.desconto > 0 && (
                                <span className="game-card-discount-badge">-{jogo.desconto}%</span>
                            )}
                        </div>
                        <div className="game-card-final-price">
                            R$ {precoFinal.toFixed(2).replace('.', ',')}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}