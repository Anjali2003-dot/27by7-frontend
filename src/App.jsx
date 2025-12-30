import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";

import ContactUs from "./pages/ContactUs";
import CloudSolutions from "./pages/CloudSolutions";
import "./index.css";

// Home Page
function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Industries />
      <Solutions />
      <Testimonials />
      <ContactSection />
      <FaqSection />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cloud-solutions" element={<CloudSolutions />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;












