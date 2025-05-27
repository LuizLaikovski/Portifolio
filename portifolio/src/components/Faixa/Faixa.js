// import './Faixa.css';
// import logoInsta from './InstagramLogo.png';
// import './Curriculo.docx';

// function scrollToElements(id) {
//     let target = document.getElementById(id);
//     if (target) {
//         target.scrollIntoView({behavior : 'smooth'});
//     }
// }


// function Faixa() {
//     return (
//         <>
//             <header className="Faixa">
//                 <a className="LOGOO" href="https://github.com/luizlaikovski">Luiz Laikovski | Dev</a>
//                 <div className='mobile-menu'>
//                     <button onClick={clickNavBar()} className="botaoAF">☰</button>
//                 </div>
//                 <ul className="NavBar">
//                     <li onClick={() => scrollToElements('SobreMim')}>Sobre Mim</li>
//                     <li onClick={() => scrollToElements('Skills')}>Minhas Skill's</li>
//                     <li onClick={() => scrollToElements('SoftSkill')}>Soft Skill's</li>
//                     <li onClick={() => scrollToElements('MeusServicos')}>Projetos</li>
//                     <li onClick={() => scrollToElements('contato')}>Contato</li>
//                     <li><a href="/Curriculo.pdf" download="Curriculo.pdf">Baixar Curriculo</a></li>
//                 </ul>
//             </header>
//         </>
//     );
// }

// function clickNavBar() {
//     let menu = document.querySelector(".NavBar");
//     if (menu.style.display == "none") {
//         menu.style.display = "block";
//         console.log("display block");
//     }  else if (menu.style.display == "block") {
//         menu.style.display = "none";
//         console.log("display none");
//     } else {
//         console.log("POPO");
//     }


//     if (!menu) {
//         console.error("Elemento .NavBar não encontrado!");
//         return;
//     }

//     let computedStyle = window.getComputedStyle(menu).display;

//     if (computedStyle === "none") {
//         menu.style.display = "block";
//         console.log("display block");
//     } else {
//         menu.style.display = "none";
//         console.log("display none");
//     }
// }


// export default Faixa



import './Faixa.css';
import logoInsta from './InstagramLogo.png';
import './Curriculo.docx';
import { useState } from 'react';

function scrollToElements(id) {
    let target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({behavior : 'smooth'});
    }
}

function Faixa() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className="Faixa">
                <a className="LOGOO" href="https://github.com/luizlaikovski">Luiz Laikovski | Dev</a>
                <div className='mobile-menu'>
                    <button onClick={toggleMenu} className="botaoAF">☰</button>
                </div>
                <ul className={`NavBar ${menuOpen ? 'active' : ''}`}>
                    <li onClick={() => {scrollToElements('SobreMim'); setMenuOpen(false);}}>Sobre Mim</li>
                    <li onClick={() => {scrollToElements('Skills'); setMenuOpen(false);}}>Minhas Skill's</li>
                    <li onClick={() => {scrollToElements('SoftSkill'); setMenuOpen(false);}}>Soft Skill's</li>
                    <li onClick={() => {scrollToElements('MeusServicos'); setMenuOpen(false);}}>Projetos</li>
                    <li onClick={() => {scrollToElements('contato'); setMenuOpen(false);}}>Contato</li>
                    <li><a href="/Curriculo.pdf" download="Curriculo.pdf">Baixar Curriculo</a></li>
                </ul>
            </header>
        </>
    );
}

export default Faixa;