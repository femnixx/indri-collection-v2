import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import KnowUs from './components/KnowUs';
import Collection from './components/Collection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

export default function App() {
  // Binds the IntersectionObserver directly onto the master DOM lifecycle layer safely
  const appContainerRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={appContainerRef}>
      <h2 className="sr-only">Indri Collection — website perusahaan konveksi milik penyandang disabilitas di Malang</h2>
      
      <Navbar />
      <Hero />
      <About />
      <KnowUs />
      <Collection />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating Re-triggerable WhatsApp Deep Link App Engine */}
      <a
        href="https://wa.me/628123456789?text=Halo%20Bu%20Indri,%20saya%20tertarik%20dengan%20koleksi%20konveksi%20Anda."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 active:scale-95 hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" />
        </svg>
      </a>
    </div>
  );
}