import './Risco.css';
import React, { useEffect } from 'react';
import ScrollReveal from "scrollreveal";

function PartOne() {

    useEffect(() => {
        const sr = ScrollReveal({
          origin: "bottom", // Origem da animação (top, bottom, left, right)
          distance: "50px", // Distância que o elemento percorre
          duration: 300,   // Duração da animação em milissegundos
          reset: true,      // Define se a animação será repetida ao rolar a página
        });
    
        sr.reveal(".reveal", {
          interval: 0, // Intervalo entre as animações de múltiplos elementos
        });
    }, []);


    return (
        <>
            <div className="container reveal">
                <h1 className="TituloPrincipal reveal">Luiz Laikovski</h1>
                <div className="Faixaa reveal"></div>
                <div className="TextBox reveal">
                    <article className='txtxtxtxtxt reveal'>Tenho 16 anos e estou começando o terceiro ano do ensino médio. Sou apaixonado por tecnologia e aprendi, por conta própria, a programar em HTML, CSS, JavaScript, Python e MySQL. Gosto de criar projetos e resolver desafios, sempre buscando aprender mais. Meu objetivo é me tornar um desenvolvedor de destaque e construir uma carreira na área de tecnologia.</article>
                </div>
            </div>
        </>
    );
}


let myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('Visible');
        } else {
            entry.target.classList.remove('Visible');
        }
    });
});

let elements = document.querySelectorAll('.TituloPrincipal, .TextBox, .Faixaa');

elements.forEach((element) => {
    myObserver.observe(element);
});


export default PartOne