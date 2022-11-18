import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './compornents/Header';
import Home from './compornents/Home';
import Recruitment from './compornents/Recruitment';
import Company from './compornents/Company';
import Inquiry from './compornents/Inquiry';
import Footer from './compornents/Footer';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/company" element={<Company />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
