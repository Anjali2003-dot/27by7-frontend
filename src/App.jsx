import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import Footer from "./components/Footer";
import './index.css';




function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      {/* <Solutions /> */}
      <Industries />
      <Footer />
    </div>
  );
}

export default App;
