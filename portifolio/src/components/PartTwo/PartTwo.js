import './PartTwo.css';
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Risco from '../Risco/Risco';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faJava, faPython, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';

function PartTwo() {
    useEffect(() => {
        setTimeout(() => {
            const sr = ScrollReveal({
                origin: 'bottom',
                distance: '50px',
                duration: 3000,
                reset: true,
            });

            sr.reveal('.reveal', {
                interval: 0,
            });
        });
    }, []);

    return (
        <section className="BoxOne">
            <div className="containerOne ">
                <h1 className="TitleSkill reveal">Minhas Skill's</h1>
                <Risco altura="55" largura="2" margens="30" className="fx" />
                <section className="MySKILLS">
                    <h1 className="tt1 reveal">Linguagens e FrameWorks:</h1>
                    <FontAwesomeIcon icon={faHtml5} className="icons HTML5" />
                    <FontAwesomeIcon icon={faCss3Alt} className="icons CSS3" />
                    <FontAwesomeIcon icon={faJs} className="icons JS" />
                    <FontAwesomeIcon icon={faReact} className="icons REACT" />
                    <FontAwesomeIcon icon={faJava} className="icons JAVA" />
                    <FontAwesomeIcon icon={faPython} className="icons PYTHON" />
                    <h1 className="tt1 reveal">Outras Tecnologias:</h1>
                    <FontAwesomeIcon icon={faGit} className="icons GIT" />
                    <FontAwesomeIcon icon={faGithub} className="icons GITHUB" />
                </section>
            </div>
        </section>
    );
}

export default PartTwo;
