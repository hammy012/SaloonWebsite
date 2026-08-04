import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      question: "What is custom blonding and how does it differ from traditional highlights?",
      answer: "Custom blonding is a highly bespoke styling process tailored exactly to your hair texture, skin tone, and daily schedule. Rather than standard foil packets placed in repetitive lines, custom blonding blends freehand balayage, delicate baby-lights, and custom shadow roots. This creates deep, natural-looking dimension and a soft, seamless grow-out that requires far less salon maintenance.",
    },
    {
      question: "How should I prepare my hair before arriving for a blonding appointment?",
      answer: "We recommend arriving with clean, dry hair washed within 24 to 48 hours. Please avoid applying heavy styling waxes, root cover sprays, or excessive dry shampoo prior to your appointment, as these products form a cuticle barrier that interferes with gentle color lifting. Wear something comfortable, as premium custom blonding sessions take several hours.",
    },
    {
      question: "How often will I need to schedule touch-ups and maintenance?",
      answer: "Because our signature balayage and dimensional blonding grows out organically without harsh demarcation lines, full color appointments are only needed every 12 to 24 weeks. However, to keep your tone bright and hair cuticle moisturized, we highly recommend booking a 'Gloss & Tone Refresh' and deep hydration treatment every 6 to 8 weeks.",
    },
    {
      question: "Which home-care products do you recommend to maintain healthy blonde hair?",
      answer: "Blonde hair requires structural protein bonding and deep hydration. We recommend using a professional sulfate-free, color-safe shampoo and conditioner, alternating with a high-end moisture masque. Implementing a bond-builder (like K18 or Olaplex) and using a thermal protectant before blow-drying is essential. We will customize your product routine at the salon.",
    },
    {
      question: "What is the booking and cancellation policy at Blonde Voyage Salon?",
      answer: "As signature blonding sessions require blocks of 3 to 5 hours of dedicated attention, we require a minimum of 48 hours notice for cancellations or rescheduling. Cancellations made within the 48-hour window will incur a charge. We appreciate your respect for our time, which allows us to accommodate waitlist requests.",
    },
  ];

  const toggleAccordion = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative vector */}
      <div className="absolute top-[30%] right-[-5%] w-72 h-72 rounded-full bg-cream/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
            Information
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary font-light mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[1.5px] bg-accent mx-auto" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-b border-primary/10 pb-4 transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between py-4 text-left faq-trigger cursor-pointer select-none group"
                >
                  <span className="font-serif text-lg md:text-xl text-primary font-light group-hover:text-accent transition-colors duration-300 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 text-accent group-hover:text-primary transition-colors">
                    {isOpen ? <HiMinus className="w-5 h-5" /> : <HiPlus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Accordion Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-sm md:text-base text-dark-brown/75 font-light leading-relaxed pb-4 pt-2">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
