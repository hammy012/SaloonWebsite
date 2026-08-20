import { motion } from "framer-motion";
import { AiOutlineInstagram, AiOutlineCalendar } from "react-icons/ai";
import Magnetic from "./Magnetic";

export default function BookingCTA() {
  return (
    <section id="book" className="py-24 md:py-32 bg-cream/30 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-[10%] left-[-5%] w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-16 text-center border border-accent/20 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle inside frame */}
          <div className="absolute inset-4 border border-accent/10 rounded-2xl pointer-events-none" />

          {/* Accent Label */}
          <span className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-accent font-semibold mb-6 block">
            Exclusive Reserve
          </span>

          {/* Main Title */}
          <h2 className="font-serif text-3xl md:text-6xl tracking-tight text-primary font-light mb-8 max-w-2xl mx-auto leading-tight">
            Book Your Luxury Hair Experience
          </h2>

          {/* Short paragraph explaining grow out/booking details */}
          <p className="font-sans text-sm md:text-base text-dark-brown/70 font-light leading-relaxed max-w-xl mx-auto mb-12">
            Every session with Melissa is fully customized and private. Ensure your preferred time is reserved. Currently booking custom blonding, dimensional color, and restorative treatments.
          </p>

          {/* Booking CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mb-10">
            <Magnetic strength={0.15}>
              <a
                href="https://www.instagram.com/honeydoeshair?igsh=MWU3a3plaXUyNDBuZQ%3D%3D&igsi=MWU3a3plaXUyNDBuZQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-4 bg-primary hover:bg-secondary text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <AiOutlineCalendar className="w-4 h-4" />
                Book Appointment
              </a>
            </Magnetic>

            <Magnetic strength={0.15}>
              <a
                href="https://www.instagram.com/honeydoeshair?igsh=MWU3a3plaXUyNDBuZQ%3D%3D&igsi=MWU3a3plaXUyNDBuZQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-4 border border-primary/20 hover:border-accent bg-white text-primary hover:text-accent font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AiOutlineInstagram className="w-4 h-4" />
                DM on Instagram
              </a>
            </Magnetic>
          </div>

          {/* Short credentials footer inside card */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-dark-brown/50 font-sans text-[11px] tracking-widest uppercase">
            <span>Melissa Fierro</span>
            <span className="hidden sm:inline">•</span>
            <span>San Diego, CA</span>
            <span className="hidden sm:inline">•</span>
            <span>@honeydoeshair</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
