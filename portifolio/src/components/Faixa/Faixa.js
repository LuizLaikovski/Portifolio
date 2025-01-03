import './Faixa.css';
import logoInsta from './InstagramLogo.png';

function Faixa() {
    return (
        <>
            <header className="Faixa">
                <a className="LOGOO" href="https://github.com/luizlaikovski">Luiz Laikovski | Dev</a>
                <ul className="NavBar">
                    <li href="#SobreMim">Sobre Mim</li>
                    <li>Minhas Skill's</li>
                    <li>Soft Skill's</li>
                    <li>Meus Serviços</li>
                    <li href="#contato">Contato</li>
                </ul>
            </header>
        </>
    );
}

export default Faixa