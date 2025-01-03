import './PartTree.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import Risco from '../Risco/Risco';


function PartTree() {
    let item;

    let SoftSkills = [
        "Proativo",
        "Trabalho em Equipe",
        "Interrese em Aprender",
        "Comunicação",
        "Detalhista"
    ];

    return (
        <>
            <section className="BoxTwo">
                <div className="containerr">
                    <h2 className="tt2">Soft Skill's</h2>
                    <Risco altura='60' largura='2' margens='55'/>
                    <ul className="custom-list">
                        {SoftSkills.map((item, index) => (
                            <l1 key={index} className="list-item">
                                <FontAwesomeIcon icon={faAward} className="custom-icon"/>
                                <span>{item}</span>
                            </l1>
                        ))}
                    </ul>
                </div>
            </section>
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

let elements = document.querySelectorAll('.tt2, .fxx, .list-item, .custom-icon')

elements.forEach((element => {
    myObserver.observe(element);
}));

export default PartTree