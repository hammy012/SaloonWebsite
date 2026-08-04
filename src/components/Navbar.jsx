import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Transformation", href: "#transformation" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Offset for sticky navbar
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-primary/5 py-4"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex flex-col group cursor-pointer"
          >
            <span className="font-serif text-xl md:text-2xl tracking-widest text-primary font-medium transition-colors duration-300 group-hover:text-accent">
              HONEY DOES HAIR
            </span>
            <span className="text-[9px] tracking-[0.3em] font-sans text-accent uppercase leading-none mt-1 transition-colors duration-300 group-hover:text-primary">
              by melissa fierro
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-xs tracking-widest text-dark-brown hover:text-accent transition-colors uppercase font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Action CTA Button */}
          <div className="hidden lg:block">
            <Magnetic strength={0.2}>
              <a
                href="https://www.instagram.com/blondevoyagesalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-primary hover:bg-secondary text-white font-sans text-xs font-semibold tracking-widest uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book Now
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-primary hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              <HiOutlineMenuAlt3 className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-cream/98 flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-primary hover:text-accent transition-colors"
              aria-label="Close menu"
            >
              <HiX className="w-7 h-7" />
            </button>

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-serif text-3xl text-primary hover:text-accent transition-colors block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.5 }}
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Action Button for mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.5 }}
                className="pt-6"
              >
                <a
                  href="https://www.instagram.com/blondevoyagesalon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-3.5 bg-primary hover:bg-secondary text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-lg transition-all duration-300"
                >
                  Book Appointment
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
