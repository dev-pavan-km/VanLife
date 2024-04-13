import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vans from "./pages/Vans.jsx";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className="site-logo">
          #VANLIFE
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
