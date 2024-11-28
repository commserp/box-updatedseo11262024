import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Packages } from './components/Packages';
import { GeopoliticalService } from './components/services/GeopoliticalService';
import { CyberSecurityService } from './components/services/CyberSecurityService';
import { FAQ } from './components/FAQ';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Summary } from './components/Summary';
import FounderPage from './pages/Founder';
import ContactPage from './pages/Contact';
import ErrorPageNotFound from './components/ErrorPageNotFound';

function HomePage() {
  return (
    <>
      <Hero />
      <Summary />
      <Services />
      <About />
      <Packages />
      <GeopoliticalService />
      <CyberSecurityService />
      <FAQ />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>
          Black Box Analytix | James Scott's Advanced Cybersecurity & Critical
          Infrastructure Solutions
        </title>
        <meta
          name="description"
          content="Uncover Black Box Analytix, helmed by James Scott, a leader in advanced cybersecurity solutions, critical infrastructure protection, and cyber espionage detection. Fortify your operations with cutting-edge intelligence and unmatched resilience."
        />
        <meta
          name="keywords"
          content="James Scott, Black Box Analytix, Advanced Cybersecurity, Critical Infrastructure Protection, Threat Actor Profiling, Cyber Espionage Detection, Conflict Zone Mapping, Predictive Cyber Analytics, Real-Time Cybersecurity"
        />
        <meta name="author" content="James Scott" />
        <meta property="og:site_name" content="Black Box Analytix" />
        <meta
          property="og:image:title"
          content="Unparalleled Cybersecurity Solutions by Black Box Analytix"
        />
        <meta
          property="og:image:alt"
          content="James Scott's Black Box Analytix providing critical infrastructure protection and advanced cybersecurity"
        />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
