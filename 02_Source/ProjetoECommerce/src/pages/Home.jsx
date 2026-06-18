import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/Home.css"

export function Home() {
    return (
        <div className="page">
            <Navbar />
            <div className="page-body">
                <section className="page-body-hero">
                    <div className="page-body-hero-info">
                        <h1 className="page-body-hero-title">Mídias físicas e digitais de jogos novos e usados a <span className="page-body-hero-title-alt">um clique</span> de distância</h1>
                        <a href="#catalogo" className="page-body-hero-button">Confira nosso catálogo</a>
                    </div>
                    <img src="CD.png" className="page-body-hero-image" />
                </section>
                <section className="page-body-classes">
                    <h2 className="page-body-classes-title">CATEGORIAS</h2>
                    <div className="page-body-classes-cards">
                        <div className="page-body-classes-playstation">
                            <Link to="/playstation" className="page-body-classes-playstation-gradient">
                                <img src="Img-Sony-PlayStation-PNG-Image 1.png" alt="" className="page-body-classes-playstation-gradient-img" />
                                <h3 className="page-body-classes-playstation-gradient-title">PlayStation</h3>
                            </Link>
                        </div>
                        <div className="page-body-classes-xbox">
                            <Link to="/xbox" className="page-body-classes-xbox-gradient">
                                <img src="Img-Xbox.png" alt="" className="page-body-classes-xbox-gradient-img" />
                                <h3 className="page-body-classes-xbox-gradient-title">Xbox</h3>
                            </Link>
                        </div>
                        <div className="page-body-classes-nintendo">
                            <Link to="/nintendo" className="page-body-classes-nintendo-gradient">
                                <img src="5bbc07b9af4bb-5135506e4e5927d3c9fc6b95a3322b97 1.png" alt="" className="page-body-classes-nintendo-gradient-img" />
                                <h3 className="page-body-classes-nintendo-gradient-title">Nintendo</h3>
                            </Link>
                        </div>
                        <div className="page-body-classes-retro">
                            <Link to="/retro" className="page-body-classes-retro-gradient">
                                <img src="563-5632966_sega-konsolen-liste-sega-mega-drive-classic-hd-Photoroom 1.png" alt="" className="page-body-classes-retro-gradient-img" />
                                <h3 className="page-body-classes-retro-gradient-title">Retro</h3>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}