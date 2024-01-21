import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Rings from "./Components/Rings";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rings" element={<Rings />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
