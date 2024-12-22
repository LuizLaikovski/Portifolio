import './PartTwo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa o componente FontAwesome
import { faCentercode, faCodepen, faCss3, faCss3Alt, faGit, faGithub, faHtml5, faJava, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'; // Importa o ícone específico

function PartTwo() {
    return (
        <>
            <section className="BoxOne">
                <div className="containerOne">
                    <h1 className="TitleSkill">Minhas Skill's</h1>
                    <div className="fx"></div>
                    <section className="MySKILLS">
                        <h1 className="tt1">Linguagens e FrameWorks:</h1>
                        <FontAwesomeIcon icon={faHtml5} className="icons HTML5"/>
                        <FontAwesomeIcon icon={faCss3Alt} className="icons CSS3"/>
                        <FontAwesomeIcon icon={faJs} className="icons JS"/>
                        <FontAwesomeIcon icon={faPython} className="icons PYTHON"/>
                        <FontAwesomeIcon icon={faReact} className="icons REACT"/>
                        <FontAwesomeIcon icon={faJava} className="icons JAVA"/>
                        <h1 className="tt1">Outras Tecnologias:</h1>
                        <FontAwesomeIcon icon={faGit} className="icons GIT"/>
                        <FontAwesomeIcon icon={faGithub} className="icons GITHUB"/>
                        <h1 className="tt1"></h1>
                    </section>
                </div>
            </section>
        </>
    );
}

let myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('Visible')
        } else {
            entry.target.classList.remove('Visible')
        }
    })
});

let element = document.querySelectorAll('.TitleSkill, .fx, .tt1, .icons');
element.forEach((elements) => {
    myObserver.observe(elements)
});

export default PartTwo