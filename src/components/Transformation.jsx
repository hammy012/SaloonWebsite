import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlayCircle } from "react-icons/ai";

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
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section id="transformation" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-[10%] left-[-5%] w-96 h-96 rounded-full bg-cream/70 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
            The Reveal
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary font-light mb-6">
            Cinematic Transformations
          </h2>
          <div className="w-16 h-[1.5px] bg-accent mx-auto" />
        </div>

        {/* 1. Two-Column Portrait Video Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-28">
          
          {/* Left Column: Vertically styled video container */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-accent/20 bg-dark-brown select-none">
              {/* Gold light ring glow */}
              <div className="absolute inset-0 border border-accent/30 rounded-[2.3rem] pointer-events-none z-20" />
              
              {/* Muted Auto-play Video Loop */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-100"
              >
                <source src="/assets/honey hair more/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Minimal vertical overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 via-transparent to-dark-brown/35 z-10 pointer-events-none" />
              
              {/* Interactive Pulsing Watermark icon */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-25 text-white/90">
                <AiOutlinePlayCircle className="w-8 h-8 text-accent animate-pulse mb-2" />
                <span className="font-sans text-[8px] tracking-[0.3em] uppercase font-bold text-cream">
                  Live Process Video
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Descriptions */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-accent font-semibold mb-4 block">
              Signature Technique
            </span>
            <h3 className="font-serif text-3xl md:text-5xl text-primary font-light mb-8 leading-tight">
              Crafting Confidence Through Precision Color
            </h3>
            
            <p className="font-sans text-sm md:text-base text-dark-brown/85 font-light leading-relaxed mb-8">
              Watch the journey behind Melissa Fierro's custom color techniques. Every custom blonding, balayage sweep, and shadow formulation is mathematically drafted to harmonise with your skin’s undertone, facial framing, and growth speed.
            </p>

            {/* Signature highlights key points */}
            <div className="space-y-6">
              {[
                { title: "Bespoke Painting", detail: "Hand-painted blends designed around your natural parting." },
                { title: "Hair Chemistry First", detail: "Every session includes molecular bond support to shield structure." },
                { title: "Seamless Low Maintenance", detail: "Grow out lines disappear, giving you 4-6 months of beauty." }
              ].map((point, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-base text-primary font-medium mb-1">{point.title}</h4>
                    <p className="font-sans text-xs md:text-sm text-dark-brown/70 font-light">{point.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 2. Before/After Portrait Interactive Comparison Slider */}
        <div className="max-w-xl mx-auto border-t border-accent/20 pt-16">
          <div className="text-center mb-10">
            <h4 className="font-serif text-2xl text-primary font-light mb-3">
              Interactive Color Comparison
            </h4>
            <p className="font-sans text-xs md:text-sm text-dark-brown/60 font-light max-w-sm mx-auto">
              Drag the golden handle to reveal the transition from raw, unblended hair to our signature high-end dimensional blonding.
            </p>
          </div>

          <motion.div
            ref={containerRef}
            className="relative w-full max-w-[380px] mx-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-accent/20 select-none cursor-ew-resize bg-cream"
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
            {/* Before Portrait Image (Background - Right Side Reveal) */}
            <div className="absolute inset-0 w-full h-full z-0 bg-cream">
              <img
                src="/assets/images/salon_4.jpg"
                alt="Before Hair Color Transformation"
                className="w-full h-full object-cover pointer-events-none"
                onDragStart={preventDragHandler}
              />
              <div className="absolute bottom-6 right-6 bg-dark-brown/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-xl font-sans text-[10px] font-semibold tracking-widest uppercase z-10 border border-white/10">
                Before
              </div>
            </div>

            {/* After Portrait Image (Overlay - Left Side Reveal width adjusted by slider) */}
            <div
              className="absolute inset-y-0 left-0 h-full z-10 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Fix width of after image to match container width */}
              <div className="absolute inset-0 h-full" style={{ width: containerRef.current?.offsetWidth || 380 }}>
                <img
                  src="/assets/images/salon_2.jpg"
                  alt="After Hair Color Transformation"
                  className="w-full h-full object-cover pointer-events-none"
                  style={{ width: containerRef.current?.offsetWidth || 380, height: containerRef.current?.offsetHeight || 506 }}
                  onDragStart={preventDragHandler}
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-primary text-white px-4 py-1.5 rounded-xl font-sans text-[10px] font-semibold tracking-widest uppercase shadow-md whitespace-nowrap z-20 border border-accent/20">
                After
              </div>
            </div>

            {/* Gold Vertical Slider Handle line */}
            <div
              className="absolute top-0 bottom-0 z-30 w-[2.5px] bg-accent"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Gold Circular Drag Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border border-accent flex items-center justify-center shadow-xl cursor-ew-resize hover:scale-110 active:scale-95 transition-transform duration-200">
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
