import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home/Home';
import { NavBar } from './Components/NavBar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Gallery } from './Pages/Gallery/Gallery';
import { About } from './Pages/About/About';

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
