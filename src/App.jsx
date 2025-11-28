import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Historia from "./components/Historia";
import Cronograma from "./components/Cronograma";
import GaleriaParticipantes from "./components/GaleriaParticipantes";
import Footer from "./components/Footer";
import GaleriaEnsayos from "./components/GaleriaEnsayos";
import Direccion from "./components/Direccion";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ background: "radial-gradient(circle at 50% 30%, #f5fbff 0%, #dff4ff 40%, #bfe7fa 100%)"}}>
      <Navbar /> 
      <main className="flex-grow">
        <Home />
        <Historia />
        <Cronograma />
        <GaleriaParticipantes />
        <Direccion />
        <GaleriaEnsayos />
      </main>

      <Footer />
    </div>
  );
}

export default App;
