import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Transformation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging && e.buttons !== 1) return; // Drag on click/hold
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  // Prevent image dragging behavior
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section id="transformation" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
            The Reveal
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary font-light mb-6">
            Cinematic Transformations
          </h2>
          <div className="w-16 h-[1.5px] bg-accent mx-auto" />
        </div>

        {/* 1. Full-Width Cinematic Video Banner */}
        <motion.div
          className="relative w-full h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden shadow-2xl mb-20 bg-dark-brown select-none border border-primary/5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Muted Auto-play Video Loop */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="/assets/videos/transformation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/80 via-dark-brown/30 to-dark-brown/70 flex flex-col justify-between p-8 md:p-16 z-10 text-white">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent font-bold">
              Blonde Voyage Signature Experience
            </span>
            
            <div className="max-w-2xl">
              <h3 className="font-serif text-3xl md:text-5xl font-light mb-4 text-cream leading-tight">
                Crafting Confidence Through Precision Color
              </h3>
              <p className="font-sans text-xs md:text-sm text-cream/80 font-light tracking-wide leading-relaxed">
                Watch the process behind Melissa Fierro's signature custom blonding and dimensional blending techniques. Beautiful, healthy, head-turning result, tailored entirely to you.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2. Before/After Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h4 className="font-serif text-2xl text-primary font-light mb-3">
              Interactive Color Comparison
            </h4>
            <p className="font-sans text-xs md:text-sm text-dark-brown/60 font-light">
              Drag the golden slider to reveal the difference custom dimensional highlighting makes.
            </p>
          </div>

          <motion.div
            ref={containerRef}
            className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-primary/10 select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Before Image (Background - Right Side Reveal) */}
            <div className="absolute inset-0 w-full h-full z-0 bg-cream">
              <img
                src="/assets/images/salon_4.jpg"
                alt="Before Hair Color Transformation"
                className="w-full h-full object-cover pointer-events-none"
                onDragStart={preventDragHandler}
              />
              <div className="absolute bottom-6 right-6 bg-dark-brown/70 backdrop-blur-sm text-white px-4 py-1.5 rounded-full font-sans text-xs font-semibold tracking-widest uppercase">
                Before
              </div>
            </div>

            {/* After Image (Overlay - Left Side Reveal width adjusted by slider) */}
            <div
              className="absolute inset-0 h-full z-10 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Fix size of after image to match container width */}
              <div className="absolute inset-0 w-[100vw] h-full" style={{ width: containerRef.current?.offsetWidth }}>
                <img
                  src="/assets/images/salon_2.jpg"
                  alt="After Hair Color Transformation"
                  className="w-full h-full object-cover pointer-events-none"
                  style={{ width: containerRef.current?.offsetWidth, height: containerRef.current?.offsetHeight }}
                  onDragStart={preventDragHandler}
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-accent text-white px-4 py-1.5 rounded-full font-sans text-xs font-semibold tracking-widest uppercase shadow-md whitespace-nowrap z-20">
                After Blonding
              </div>
            </div>

            {/* Gold Vertical Slider Handle line */}
            <div
              className="absolute top-0 bottom-0 z-30 w-[2px] bg-accent"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Gold Circular Drag Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-accent flex items-center justify-center shadow-lg cursor-ew-resize hover:scale-110 active:scale-95 transition-transform duration-200">
                <span className="font-sans text-xs text-accent font-bold flex gap-1 items-center select-none">
                  <span>‹</span>
                  <span>›</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
