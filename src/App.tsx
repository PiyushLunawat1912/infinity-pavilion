
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import React, { useState } from "react";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import VenueSection from './components/VenueSection'
import GallerySection from './components/GallerySection'
import ServicesSection from './components/ServiceSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'
import FloatingContact from "./components/FloatingContact";

function App() {
   const [showSplash, setShowSplash] = useState(true);
  return (
<div className="bg-primary-dark text-white min-h-screen pt-0">
  {/* Hero is ALWAYS rendered */}
      <HeroSection />
 {/* Splash sits above hero */}
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}
      <Navbar />
      <FloatingContact />
   
       <AboutSection />
      <VenueSection />
      <GallerySection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}



export default App
