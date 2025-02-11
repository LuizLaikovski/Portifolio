import './Faixa.css';
import logoInsta from './InstagramLogo.png';
import './Curriculo.docx';

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
                <div className='mobile-menu'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
                <ul className="NavBar">
                    <li onClick={() => scrollToElements('SobreMim')}>Sobre Mim</li>
                    <li onClick={() => scrollToElements('Skills')}>Minhas Skill's</li>
                    <li onClick={() => scrollToElements('SoftSkill')}>Soft Skill's</li>
                    <li onClick={() => scrollToElements('MeusServicos')}>Projetos</li>
                    <li onClick={() => scrollToElements('contato')}>Contato</li>
                    <li><a href="/Curriculo.docx" download="Curriculo.docx">Baixar Curriculo</a></li>
                </ul>
            </header>
        </>
    );
}

class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }


    animateLinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = "navLinkFade 0.5s ease forwards 0.3s");
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init () {
        if (this.mobileMenu) {
            this.addClickEvent();
        }

        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".NavBar",
    ".NavBar li"
);
mobileNavBar.init();

export default Faixa