import logo from './logo.svg';
import './App.css';
import Faixa from './components/faixa';
import EuSP from './images/Imagem1.jpg';

function App() {
  return (
    <>
      <Faixa mensagem="Luiz Henrique Pasin Laikovski"/>
      <section id="sectionOne">
        <div className="containerOne">
          <h1>Quem sou eu?</h1>
          <p>Eu me chamo Luiz Henrique, nasci no dia 16 de Janeiro de 2008 em Blumenae.Atualmente estou cursando Desenvolvimento de Sistemas no Cedup, estou no segundo ano. A minha linguagem favorita é Python e Java.Quando eu sair do ensino médio preteno fazer especialização em Sistemas da Informação.</p>
        </div>
        <a href='https://www.instagram.com/lz.lvk/'><img src={EuSP} id='imagem1'/></a>
      </section>
      <Faixa />
    </>
  );
}

export default App;
