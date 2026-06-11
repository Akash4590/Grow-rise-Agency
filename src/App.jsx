import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shopify from "./Pages/Shopify";
import SocialMedia from "./Pages/Socialmedia";
import MetaMarketing from "./Pages/MetaMarketing";

import { useEffect } from "react";
// App root — Navbar is always visible, routes swap content
function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.hash]);
  return (
    <div className="min-h-screen bg-[#060d08]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopify" element={<Shopify/>} />
        <Route path="/SocialMedia" element={<SocialMedia />} />
      <Route path="/metamarketing" element={<MetaMarketing />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;