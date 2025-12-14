import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Footer from "./components/Footer";
import Localisation from "./pages/Localisation";

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/prices" element={<Prices />} />
                <Route path="/local" element={<Localisation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/reserve" element={<Reservation />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
