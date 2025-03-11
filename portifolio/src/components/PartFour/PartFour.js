import './PartFour.css'
import Risco from '../Risco/Risco';
import RiscoH from '../RiscoH/RiscoH';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss, faCss3, faCss3Alt, faHtml5, faJs, faPython } from '@fortawesome/free-brands-svg-icons';


function PartFour() {
    return (
        <>
            <section className="Partf" id='MeusServicos'>
                <main className="division">
                    <a href='https://paroquia-sao-jose-operario.vercel.app' className='LINKSSSSSSSS'>
                        <div className="habilits reveal treeBox">
                            <h1>Paroquia São José Operário</h1>
                            <RiscoH largura='20' grossura='0.8' margens='8'/>
                            <img src='/Opera Instantâneo_2025-03-10_135335_paroquia-sao-jose-operario.vercel.app.png' className='imageOneExemple' ></img>
                        </div>
                    </a>
                    <a href='https://github.com/LuizLaikovski/EstudosComFlask' className='LINKSSSSSSSS'>
                        <div className="habilits reveal treeBox">
                            <h1>Projeto com Flask</h1>
                            <RiscoH largura='20' grossura='0.8' margens='15'/>
                            <p>Esse é um Projeto onde faço ligação de um Banco de Dados com FrontEnd usando o Python e a biblioteca Flask. Tecnologias Usadas: </p>
                            <div>
                                <FontAwesomeIcon icon={faPython} className="icon" />
                                <FontAwesomeIcon icon={faHtml5} className="icon" />
                                <FontAwesomeIcon icon={faCss3Alt} className="icon" />
                            </div>
                        </div>
                    </a>
                    <a href='https://github.com/LuizLaikovski/ProjetosEmPythonProntos/blob/main/Estoque%20Razer%20BD.py' className='LINKSSSSSSSS'>
                        <div className="habilits reveal treeBox">
                            <h1>Sistema de Estoque</h1>
                            <RiscoH largura='20' grossura='0.8' margens='12'/>
                            <p>Nesse pequeno projeto criei um sistema de estoque. Onde possui a funcionabilidade de Adcionar, Listar, Editar(preço, quantidade e nome) e deletar o produto ou apenas uma quantidade </p>
                            <FontAwesomeIcon icon={faPython} className="icon" />
                        </div>
                    </a>
                </main>
            </section>
        </>
    );
}

export default PartFour