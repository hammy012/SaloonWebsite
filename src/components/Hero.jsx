import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax translation for the background image
  const bgY = useTransform(scrollY, [0, 800], ["0%", "30%"]);
  const textY = useTransform(scrollY, [0, 800], ["0%", "40%"]);
  const opacityFade = useTransform(scrollY, [0, 600], [1, 0]);

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cream"
    >
      {/* Background Image with GSAP-like Parallax and Zoom */}
      <motion.div
        className="absolute inset-0 z-0 select-none pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/40 via-dark-brown/30 to-white z-10" />
        <motion.img
          src="/assets/images/salon_1.jpg"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover scale-110"
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
        />
      </motion.div>

      {/* Floating Organic Soft Shapes */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {/* Blob 1 */}
        <motion.div
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-3xl animate-float"
          style={{ y: useTransform(scrollY, [0, 800], [0, -50]) }}
        />
        {/* Blob 2 */}
        <motion.div
          className="absolute top-[40%] -right-[15%] w-[45%] h-[45%] rounded-full bg-primary/5 blur-3xl animate-float-reverse"
          style={{ y: useTransform(scrollY, [0, 800], [0, 50]) }}
        />
      </div>

      {/* Hair Strand Decorative Elements (Elegant Vector Paths) */}
      <div className="absolute inset-0 z-1 pointer-events-none flex justify-between px-10 items-center">
        {/* Left Strand Vector */}
        <svg
          className="w-24 h-96 text-accent/15 hidden md:block opacity-60 self-center"
          viewBox="0 0 100 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0 C 40 100, -20 200, 30 300 C 60 360, 90 380, 50 400"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M30 20 C 60 110, 0 190, 50 280 C 80 340, 70 380, 40 400"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Right Strand Vector */}
        <svg
          className="w-24 h-96 text-accent/15 hidden md:block opacity-60 self-center"
          viewBox="0 0 100 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M90 0 C 60 100, 120 200, 70 300 C 40 360, 10 380, 50 400"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center"
        style={{ y: textY, opacity: opacityFade }}
      >
        {/* Pre-title */}
        <motion.span
          className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-accent font-semibold mb-6 block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Melissa Fierro | Blonde Voyage Salon
        </motion.span>

        {/* Heading */}
        <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-[1.05] mb-8 font-light text-cream max-w-4xl drop-shadow-md">
          {["Luxury Hair Color", "Designed Around You"].map((line, lineIdx) => (
            <span key={lineIdx} className="block overflow-hidden h-fit">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.4,
                  delay: lineIdx * 0.15 + 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          className="font-sans text-sm md:text-lg text-cream/90 max-w-2xl font-light leading-relaxed tracking-wide mb-12 drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Helping women feel confident through custom blonding, dimensional color, and luxury salon experiences in San Diego, California.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-5 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <Magnetic strength={0.15}>
            <a
              href="https://www.instagram.com/blondevoyagesalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent hover:bg-white text-dark-brown hover:text-primary font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </a>
          </Magnetic>

          <Magnetic strength={0.15}>
            <a
              href="#transformation"
              onClick={(e) => handleScrollToSection(e, "#transformation")}
              className="px-8 py-4 border border-white hover:border-accent hover:bg-accent/10 text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
            >
              View Transformations
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer select-none"
        onClick={(e) => handleScrollToSection(e, "#about")}
        style={{ opacity: opacityFade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="font-sans text-[9px] tracking-[0.35em] text-cream uppercase font-semibold mb-3 block">
          Scroll
        </span>
        <div className="w-[18px] h-8 border border-cream/50 rounded-full relative">
          <div className="w-1 h-1.5 bg-accent rounded-full absolute top-2 left-1/2 -translate-x-1/2 scroll-indicator-dot" />
        </div>
      </motion.div>
    </section>
  );
}
