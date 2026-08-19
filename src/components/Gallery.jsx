import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null);

  const images = [
    { src: "/assets/honey hair more/1.jpeg", alt: "Luxury Blonde Reveal", title: "Signature Blonde Waves" },
    { src: "/assets/honey hair more/2.jpeg", alt: "Dimensional Balayage Melt", title: "Creamy Caramel Blend" },
    { src: "/assets/honey hair more/3.jpeg", alt: "Root Shaded Blonde Highlights", title: "High-Contrast Platinum" },
    { src: "/assets/honey hair more/4.jpeg", alt: "Premium Hair Care Finish", title: "Luxe Style Reveal" },
    { src: "/assets/images/salon_1.jpg", alt: "Premium Salon Styling Stations", title: "The Salon Experience" },
    { src: "/assets/images/salon_2.jpg", alt: "Dimensional Honey Blonde Color styling", title: "Signature Dimensional Blonde" },
    { src: "/assets/images/salon_3.jpg", alt: "Seamless Creamy Soft Highlights styling", title: "Creamy Balayage Blend" },
    { src: "/assets/images/salon_4.jpg", alt: "Textured Sandy Blonde Waves styling", title: "Sandy Blonde Dimension" },
    { src: "/assets/images/salon_5.jpg", alt: "Beachy High Contrast Blonde Styling", title: "High-Contrast Blonding" },
    { src: "/assets/images/salon_6.jpg", alt: "Crisp Cool-Toned Blonde bob styling", title: "Cool Platinum Tone" },
    { src: "/assets/images/salon_7.jpg", alt: "Golden Caramel Dimensional Wave styling", title: "Caramel Dimension" },
  ];

  const openLightbox = (idx) => {
    setActiveIdx(idx);
  };

  const closeLightbox = () => {
    setActiveIdx(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-cream/35 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
            Visual Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary font-light mb-6">
            The Blonde Voyage Gallery
          </h2>
          <div className="w-16 h-[1.5px] bg-accent mx-auto mb-6" />
          <p className="font-sans text-sm md:text-base text-dark-brown/75 font-light leading-relaxed">
            Browse through real transformations, dimensional highlights, and luxury color services crafted at Blonde Voyage Salon.
          </p>
        </div>

        {/* Masonry Layout Grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] box-border">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              className="break-inside-avoid mb-6 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-primary/5 bg-white cursor-pointer group relative shine-effect select-none"
              onClick={() => openLightbox(idx)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image element with zoom */}
              <div className="overflow-hidden aspect-auto w-full relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Hover text label */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/70 via-dark-brown/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 text-white">
                <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-accent font-bold mb-1">
                  Click to Expand
                </span>
                <h4 className="font-serif text-lg font-light text-cream">
                  {image.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Lightbox Modal */}
        <AnimatePresence>
          {activeIdx !== null && (
            <motion.div
              className="fixed inset-0 z-[99999] bg-dark-brown/95 backdrop-blur-md flex items-center justify-center select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white/80 hover:text-accent transition-colors z-50"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <HiX className="w-8 h-8" />
              </button>

              {/* Slider Left Arrow */}
              <button
                className="absolute left-6 text-white/80 hover:text-accent transition-colors z-50 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <HiChevronLeft className="w-6 h-6" />
              </button>

              {/* Active Image Box */}
              <motion.div
                className="relative max-w-5xl max-h-[80vh] px-4 flex flex-col items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[activeIdx].src}
                  alt={images[activeIdx].alt}
                  className="max-w-full max-h-[75vh] rounded-2xl object-contain shadow-2xl border border-white/10"
                />
                
                {/* Lightbox Caption */}
                <div className="text-center mt-6">
                  <h3 className="font-serif text-xl text-cream font-light mb-1">
                    {images[activeIdx].title}
                  </h3>
                  <p className="font-sans text-xs text-white/60 font-light">
                    {images[activeIdx].alt}
                  </p>
                </div>
              </motion.div>

              {/* Slider Right Arrow */}
              <button
                className="absolute right-6 text-white/80 hover:text-accent transition-colors z-50 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10"
                onClick={nextImage}
                aria-label="Next image"
              >
                <HiChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
