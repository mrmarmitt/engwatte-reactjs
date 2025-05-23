import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Sobre from './pages/Sobre';
import Servico from './pages/Servico';
import Case from './pages/Case';
import Contato from './pages/Contato';

function App() {

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servico />} />
          {/* <Route path="/cases" element={<Case />} /> */}
          <Route path="/contato" element={<Contato />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
