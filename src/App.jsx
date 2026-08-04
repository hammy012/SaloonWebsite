import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";

// Component imports
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Transformation from "./components/Transformation";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Instagram from "./components/Instagram";
import FAQ from "./components/FAQ";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (isLoading) return; // Wait until loading completes to initialize scrolling

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium smooth easing
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Keep links scrolling smoothly
    const handleScrollToAnchor = (e) => {
      const target = e.target.closest("a[href^='#']");
      if (target) {
        const href = target.getAttribute("href");
        if (href === "#") return;
        
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          lenis.scrollTo(element, { offset: -80 });
        }
      }
    };

    document.addEventListener("click", handleScrollToAnchor);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleScrollToAnchor);
    };
  }, [isLoading]);

  return (
    <>
      {/* Loading Screen Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main App Layout */}
      {!isLoading && (
        <div className="relative min-h-screen bg-white">
          {/* Global UI Widgets */}
          <CustomCursor />
          <ChatWidget />
          
          {/* Header */}
          <Navbar />

          {/* Sections */}
          <main>
            <Hero />
            <About />
            <Services />
            <Transformation />
            <Gallery />
            <Testimonials />
            <Instagram />
            <FAQ />
            <BookingCTA />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
