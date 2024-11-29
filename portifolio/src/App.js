import logo from './logo.svg';
import './App.css';
import Faixa from './components/faixa';
import EuSP from './images/Imagem1.jpg';
import HTMLLogo from './images/html-5.png';
import JavaLogo from './images/java-logo-1.png';
import MySQLLogo from './images/mysql.png';
import PythonLogo from './images/python.png';

function App() {
  return (
    <>
      <Faixa mensagem="Luiz Henrique Pasin Laikovski"/>
      <section id="section1">
        <div className="container1">
          <h1>Quem sou eu?</h1>
          <p>Eu me chamo Luiz Henrique, nasci no dia 16 de Janeiro de 2008 em Blumenae.Atualmente estou cursando Desenvolvimento de Sistemas no Cedup, estou no segundo ano. A minha linguagem favorita é Python e Java.Quando eu sair do ensino médio preteno fazer especialização em Sistemas da Informação.</p>
        </div>
        <a href='https://www.instagram.com/lz.lvk/'><img src={EuSP} id='imagem1'/></a>
      </section>
      <Faixa />
      <section id="section2">
        <h1>Meus projetos</h1>
        <div className="container2">
          <p>Algumas das linguages que sei são:</p>
          <div>
          <img src={HTMLLogo}/>
          <img src={JavaLogo}/>
          <img src={MySQLLogo}/>
          <img src={PythonLogo}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;