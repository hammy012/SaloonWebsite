import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const duration = 1600; // 1.6 seconds loading
    const intervalTime = 16;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentPercent = Math.min(Math.floor((currentStep / steps) * 100), 100);
      setPercent(currentPercent);
      if (currentPercent >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 400); // short delay after hitting 100% to let transition feel natural
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cream"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="text-center px-6">
        {/* Animated Initials Logo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="text-7xl md:text-9xl font-serif text-primary tracking-widest font-light block">
            HDH
          </span>
          <span className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-accent mt-3 block">
            Honey Does Hair
          </span>
        </motion.div>

        {/* Loading Indicator */}
        <div className="w-56 h-[1px] bg-primary/10 mx-auto relative overflow-hidden mb-4">
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent"
            style={{ width: `${percent}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Counter */}
        <div className="text-primary font-serif font-light text-2xl tracking-wider">
          {percent}%
        </div>
      </div>
    </motion.div>
  );
}
