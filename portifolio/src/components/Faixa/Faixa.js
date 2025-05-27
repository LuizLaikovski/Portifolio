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
                    <button onClick={clickNavBar()} className="botaoAF">☰</button>
                </div>
                <ul className="NavBar">
                    <li onClick={() => scrollToElements('SobreMim')}>Sobre Mim</li>
                    <li onClick={() => scrollToElements('Skills')}>Minhas Skill's</li>
                    <li onClick={() => scrollToElements('SoftSkill')}>Soft Skill's</li>
                    <li onClick={() => scrollToElements('MeusServicos')}>Projetos</li>
                    <li onClick={() => scrollToElements('contato')}>Contato</li>
                    <li><a href="/Curriculo.pdf" download="Curriculo.pdf">Baixar Curriculo</a></li>
                </ul>
            </header>
        </>
    );
}

function clickNavBar() {
    let menu = document.querySelector(".NavBar");
    // if (menu.style.display == "none") {
    //     menu.style.display = "block";
    //     console.log("display block");
    // }  else if (menu.style.display == "block") {
    //     menu.style.display = "none";
    //     console.log("display none");
    // } else {
    //     console.log("POPO");
    // }


    if (!menu) {
        console.error("Elemento .NavBar não encontrado!");
        return;
    }

    let computedStyle = window.getComputedStyle(menu).display;

    if (computedStyle === "none") {
        menu.style.display = "block";
        console.log("display block");
    } else {
        menu.style.display = "none";
        console.log("display none");
    }
}


export default Faixa