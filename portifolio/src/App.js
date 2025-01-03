import './App.css';
import PartOne from './components/PartOne/PartOne.js';
import Faixa from './components/Faixa/Faixa.js';
import PartTwo from './components/PartTwo/PartTwo.js';
import PartTree from './components/PartTree/PartTree.js';
import Footer from './components/Footer/Footer.js';
import PartFour from './components/PartFour/PartFour.js';

function App() {
  return (
    <>
      <section className="Section1">
        <div className="NAVBAR">
          <Faixa></Faixa>
        </div>
        <div className="CaixaOne" id="SobreMim">
          <PartOne nome="Luiz Laikovski" text="Tenho 16 anos e estou começando o terceiro ano do ensino médio. Sou apaixonado por tecnologia e aprendi, por conta própria, a programar em HTML, CSS, JavaScript, Python e MySQL. Gosto de criar projetos e resolver desafios, sempre buscando aprender mais. Meu objetivo é me tornar um desenvolvedor de destaque e construir uma carreira na área de tecnologia."></PartOne>
        </div>
      </section>
      <section className="Section2">
        <PartTwo></PartTwo>
        <PartTree></PartTree>
        <PartFour></PartFour>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;