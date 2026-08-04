import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring settings for elegant lag effect
  const springConfig = { damping: 35, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    // Only enable custom cursor on devices with fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;
    
    setIsVisible(true);
    document.body.classList.add("custom-cursor-active");
    
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleMouseOver = (e) => {
      // Expand cursor on buttons, links, slides, and cursor-pointers
      const target = e.target.closest("button, a, [role='button'], .swiper-button-next, .swiper-button-prev, .faq-trigger, .cursor-pointer");
      if (target) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };
    
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);
  
  if (!isVisible) return null;
  
  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[1000000]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? "#895129" : "#C9A66B",
          backgroundColor: isHovered ? "rgba(201, 166, 107, 0.15)" : "rgba(201, 166, 107, 0)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[1000000]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
