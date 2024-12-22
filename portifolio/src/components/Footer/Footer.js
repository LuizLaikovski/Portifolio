import './Footer.css';
import Direitos from '../Direitos/Direitos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <>
            <footer className="FOOTER">
                <section className="litleText">
                    <h1>Entre em Contato</h1>
                    <article>Meu objetivo é apoiar você na criação de soluções digitais personalizadas que impulsionem o sucesso do seu negócio. Vamos conversar sobre suas necessidades e encontrar as melhores estratégias para alcançar seus objetivos?</article>
                </section>
                <div className="alling">
                    <div className="linksAlling">
                        <FontAwesomeIcon icon={faGithub} className="iconsMidia"/>
                        <a className="midiaLinks" href="https://github.com/luizlaikovski">GitHub</a>
                    </div>
                    <div className="linksAlling">
                        <FontAwesomeIcon icon={faWhatsapp} className="iconsMidia"/>
                        <a className="midiaLinks" href='https://wa.me/5547988729248'>Whatsapp</a>
                    </div>
                    <div className="linksAlling">
                        <FontAwesomeIcon icon={faGoogle} className="iconsMidia"/>
                        <a className="midiaLinks" href="mailto:luizlaikovski@gmail.com">E-Mail: luizlaikovski@gmail.com</a><br></br>
                    </div>
                    <div className="linksAlling">
                        <FontAwesomeIcon icon={faInstagram} className="iconsMidia"/>
                        <a className="midiaLinks" href="https://www.instagram.com">instagram: @lz.lvk</a>
                    </div>
                    <div className="locationSection"> 
                        <FontAwesomeIcon icon={faLocationDot} className="iconsMidia" />
                        <h2 className="locTxt">Blumenau, Santa Catarina - Brasil</h2>
                    </div>
                </div>
                <div>
                    <Direitos />    
                </div>
            </footer>
        </>
    );
}

export default Footer