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
                    <div className="habilits reveal treeBox">
                        <h1>Paroquia São José Operário</h1>
                        <RiscoH largura='20' grossura='0.8' margens='20'/>
                        <p>Esse é um projeto teve inicio no final do ano de 2024. Ele tem como objetivo apresentar os ministério da paróquia, para os fiéis que a frequentam. Tecnologias Usadas: </p>
                        <div>
                            <FontAwesomeIcon icon={faHtml5} className="icon"/>
                            <FontAwesomeIcon icon={faCss3Alt} className="icon"/>
                            <FontAwesomeIcon icon={faJs} className="icon"/>
                        </div>
                    </div>
                    <div className="habilits reveal treeBox">
                        <h1>Projeto com Flask</h1>
                        <RiscoH largura='20' grossura='0.8' margens='20'/>
                        <p>Esse é um Projeto onde faço ligação de um Banco de Dados com FrontEnd usando o Python e a biblioteca Flask. Tecnologias Usadas: </p>
                        <div>
                            <FontAwesomeIcon icon={faPython} className="icon" />
                            <FontAwesomeIcon icon={faHtml5} className="icon" />
                            <FontAwesomeIcon icon={faCss3Alt} className="icon" />
                        </div>
                    </div>
                    <div className="habilits reveal treeBox">
                        <h1>Sistema de Estoque</h1>
                        <RiscoH largura='20' grossura='0.8' margens='20'/>
                        <p>Nesse pequeno projeto criei um sistema de estoque. Onde possui a funcionabilidade de Adcionar, Listar, Editar(preço, quantidade e nome) e deletar o produto ou apenas uma quantidade </p>
                        <FontAwesomeIcon icon={faPython} className="icon" />
                    </div>
                </main>
            </section>
        </>
    );
}

export default PartFour