import Header from "./Componentes/header";
import Section from "./Componentes/section";
import Nav from "./Componentes/nav";
import Footer from "./Componentes/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import styles from '../src/App.css';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Section />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
