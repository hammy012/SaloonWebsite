import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-[20%] left-[-5%] w-96 h-96 rounded-full bg-cream/80 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Portrait Image with Luxury Accent Frame */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group max-w-[380px] lg:max-w-none w-full">
              {/* Back Accent Golden Frame */}
              <div className="absolute inset-0 border border-accent rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 z-0" />
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[3/4] z-10 bg-cream">
                <motion.img
                  src="/assets/images/about.jpg"
                  alt="Melissa Fierro - Salon Owner & Stylist"
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Gold Overlay Label */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-md border border-accent/20">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-accent uppercase font-bold block">
                    Owner & Specialist
                  </span>
                  <span className="font-serif text-sm text-primary font-medium">
                    Melissa Fierro
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Copy */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Small Gold Tagline */}
            <motion.span
              variants={itemVariants}
              className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-4"
            >
              The Artist Behind The Color
            </motion.span>

            {/* Main Header */}
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl tracking-tight text-primary leading-tight font-light mb-8"
            >
              Meet Melissa Fierro
            </motion.h2>

            {/* Lead Bold Paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-serif text-lg md:text-xl text-secondary italic font-light leading-relaxed mb-6 border-l-2 border-accent pl-6"
            >
              "Building confidence goes far beyond building beautiful hair. Every appointment is about creating a luxury experience where you feel heard, cared for, and truly confident."
            </motion.p>

            {/* Bio Detail Text */}
            <div className="space-y-4 font-sans text-sm md:text-base text-dark-brown/85 font-light leading-relaxed mb-8">
              <motion.p variants={itemVariants}>
                Finding my place in this industry wasn't easy. After working in multiple salon environments, I chose to build something meaningful, authentic, and tailored with <strong>Blonde Voyage</strong>.
              </motion.p>
              <motion.p variants={itemVariants}>
                The love, trust, and support from my clients allowed me to grow into the stylist I always dreamed of becoming. Today, my mission is simple: help every woman discover the radiant confidence she already possesses inside.
              </motion.p>
            </div>

            {/* Tagline Pillars */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 border-t border-accent/20 pt-8 mt-2"
            >
              {[
                { label: "Luxury", detail: "Bespoke high-end pampering" },
                { label: "Comfort", detail: "A warm, exclusive sanctuary" },
                { label: "Healthy Hair", detail: "No compromise on hair integrity" },
              ].map((pillar, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <span className="font-serif text-base md:text-xl text-primary font-medium block mb-1">
                    {pillar.label}
                  </span>
                  <span className="font-sans text-[10px] md:text-xs text-accent uppercase tracking-wider block leading-tight">
                    {pillar.detail}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
