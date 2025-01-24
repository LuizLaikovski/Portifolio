import './Faixa.css';
import logoInsta from './InstagramLogo.png';

function scrollToElements(id) {
    let target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({behavior : 'smooth'});
    }
}


function Faixa() {
    return (
        <>
            <header className="Faixa">
                <a className="LOGOO" href="https://github.com/luizlaikovski">Luiz Laikovski | Dev</a>
                <ul className="NavBar">
                    <li onClick={() => scrollToElements('SobreMim')}>Sobre Mim</li>
                    <li onClick={() => scrollToElements('Skills')}>Minhas Skill's</li>
                    <li onClick={() => scrollToElements('SoftSkill')}>Soft Skill's</li>
                    <li onClick={() => scrollToElements('MeusServicos')}>Meus Serviços</li>
                    <li onClick={() => scrollToElements('contato')}>Contato</li>
                </ul>
            </header>
        </>
    );
}

export default Faixa