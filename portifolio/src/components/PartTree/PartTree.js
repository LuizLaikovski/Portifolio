import './PartTree.css';
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
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
        <>
            <section className="BoxTwo">
                <div className="containerr">
                    <h2 className="tt2 reveal">Soft Skill's</h2>
                    <Risco altura='60' largura='2' margens='55' className='reveal'/>
                    <ul className="custom-list">
                        {SoftSkills.map((item, index) => (
                            <l1 key={index} className="list-item reveal">
                                <FontAwesomeIcon icon={faAward} className='custom-icon'/>
                                <span>{item}</span>
                            </l1>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
export default PartTree