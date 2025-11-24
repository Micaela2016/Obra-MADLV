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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100">
      <Navbar /> {/* fuera del main */}

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
