import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shopify from "./Pages/Shopify";
// App root — Navbar is always visible, routes swap content
function App() {
  return (
    <div className="min-h-screen bg-[#060d08]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopify" element={<Shopify/>} />
        <Route path="/about" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;