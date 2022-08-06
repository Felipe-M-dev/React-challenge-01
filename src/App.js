import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header titulo="Liga Profesional de Fútbol de AFA" />
      <Cards src="/imgs/01.png" title="Club Atlético Boca Juniors" descripcion="Xeneize" />
      <Cards src="/imgs/02.png" title="Club Atlético Independiente" descripcion="Rojo" />
      <Cards src="/imgs/03.png" title="Racing Club" descripcion="La Academia" />
      <Cards src="/imgs/04.png" title="Club Atlético River Plate" descripcion="Millonarios" />
      <Cards src="/imgs/05.png" title="Club Atlético San Lorenzo de Almagro" descripcion="El Ciclón" />
      <Cards src="/imgs/06.png" title="Club Atlético Newell's Old Boys" descripcion="Leprosos" />
      <Footer />
    </div>
  );
}

export default App;