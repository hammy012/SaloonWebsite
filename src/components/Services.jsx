import { motion } from "framer-motion";
import { FiSparkles, FiSun, FiScissors, FiDroplet, FiTrendingUp, FiActivity, FiLayers } from "react-icons/fi";
import Magnetic from "./Magnetic";

export default function Services() {
  const servicesList = [
    {
      title: "Custom Blonding",
      price: "$350+",
      duration: "4 - 5 hrs",
      description: "Bespoke multi-dimensional blonding tailored perfectly to your natural tones, features, and hair density. Includes root melts and customized toners.",
      icon: FiSparkles,
    },
    {
      title: "Custom Balayage",
      price: "$300+",
      duration: "3.5 - 4.5 hrs",
      description: "Hand-painted, soft sun-kissed sweeps that grow out seamlessly. Ideal for low-maintenance, high-impact elegance and soft dimension.",
      icon: FiSun,
    },
    {
      title: "Precision Highlights",
      price: "$280+",
      duration: "3 - 4 hrs",
      description: "Detailed foil placement offering maximum brightness and clean lifting from roots to ends. Perfect for traditional, clean-cut blonde looks.",
      icon: FiLayers,
    },
    {
      title: "Color Correction",
      price: "By Quote",
      duration: "Variable",
      description: "Intensive, restorative color restructuring. In-depth hair chemistry diagnosis, protective bond reconstruction, and strategic pigment correction.",
      icon: FiActivity,
    },
    {
      title: "Gloss & Toning",
      price: "$120+",
      duration: "1.5 hrs",
      description: "Revitalize your color, neutralize unwanted brassy undertones, and seal the hair cuticle with a high-shine glaze overlay.",
      icon: FiTrendingUp,
    },
    {
      title: "Luxury Hair Treatment",
      price: "$95+",
      duration: "1 hr",
      description: "Deep molecular reconstruction (K18/Olaplex) and deep moisture infusion. Rebuilds broken hair bonds and restores luxurious cuticle shine.",
      icon: FiDroplet,
    },
    {
      title: "Luxury Styling",
      price: "$85+",
      duration: "1 hr",
      description: "Signature blowouts, elegant wave work, or custom formal styling for red carpets and luxury events. Completed with weightless designer oils.",
      icon: FiScissors,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
    <section id="services" className="py-24 md:py-32 bg-cream/50 relative overflow-hidden">
      {/* Decorative backdrop strands */}
      <div className="absolute top-[10%] right-[-5%] w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
            Curated Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary font-light mb-6">
            Luxury Hair Services
          </h2>
          <div className="w-16 h-[1.5px] bg-accent mx-auto mb-6" />
          <p className="font-sans text-sm md:text-base text-dark-brown/75 font-light leading-relaxed">
            Every appointment includes a detailed hair chemistry diagnosis, complimentary artisanal beverage service, and a personalized home-care guidance regimen.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-primary/5 hover:border-accent/30 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shine-effect"
                whileHover={{ y: -6 }}
              >
                {/* Accent Background Circle on Hover */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                <div>
                  {/* Service Icon and Price Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="font-sans text-xs tracking-wider text-accent uppercase font-bold block">
                        Invest
                      </span>
                      <span className="font-serif text-lg text-primary font-medium">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl md:text-2xl text-primary font-light mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs md:text-sm text-dark-brown/70 font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Footer Info */}
                <div className="border-t border-cream pt-4 flex items-center justify-between">
                  <span className="font-sans text-[10px] tracking-widest text-dark-brown/40 uppercase">
                    Duration
                  </span>
                  <span className="font-sans text-xs text-secondary font-medium">
                    {service.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA note */}
        <div className="text-center mt-16 md:mt-24">
          <p className="font-sans text-xs md:text-sm text-dark-brown/60 mb-6 italic">
            Looking for something specific or require a detailed consultation?
          </p>
          <Magnetic strength={0.15}>
            <a
              href="https://www.instagram.com/blondevoyagesalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 border border-primary/20 hover:border-accent bg-white text-primary hover:text-accent font-sans text-xs font-semibold tracking-widest uppercase rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              Request Consultation
            </a>
          </Magnetic>
        </div>

      </div>
    </section>
  );
}
