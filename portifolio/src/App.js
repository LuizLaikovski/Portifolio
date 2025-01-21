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
          <PartOne></PartOne>
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