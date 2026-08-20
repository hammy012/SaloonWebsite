import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMessage, AiOutlineClose, AiOutlineSend } from "react-icons/ai";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      text: "Hi beautiful ✨ Welcome to Honey Does Hair. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const quickOptions = [
    { label: "Book Appointment", reply: "I'd love to help you reserve a session! Melissa manages all luxury booking reservations directly through her Honey Does Hair Instagram portal. Click 'Book Now' in the navigation bar or send a DM to get started! 🤍" },
    { label: "Pricing Details", reply: "Our curated services start at $85 for Styling, $120 for Gloss & Toning, and $280-$350+ for Custom Blonding and Balayage. All sessions include a complimentary bond-protecting treatment. View our full Services menu on the page! ✨" },
    { label: "Hair Consultation", reply: "For new clients, we recommend a digital consultation. You can send us 2-3 clear photos of your current hair in natural light, alongside 2-3 inspiration goals, directly via Instagram DM @honeydoeshair! 💇‍♀️" },
    { label: "Instagram Feed", reply: "We post daily color transformations, formulas, and client reels! Join our community on Instagram: @honeydoeshair. See you there!" },
    { label: "Salon Location", reply: "Melissa styles from the Blonde Voyage Salon, located in San Diego, California. We operate strictly by appointment to ensure client privacy and comfort. Custom directions and parking info will be sent upon booking! 📍" },
  ];

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    // 1. Add user click message
    const userMsg = {
      sender: "user",
      text: option.label,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);

    // 2. Trigger simulated typing indicator
    setIsTyping(true);

    // 3. Add assistant response after short delay
    setTimeout(() => {
      setIsTyping(false);
      const assistantMsg = {
        sender: "assistant",
        text: option.reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    }, 850);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary hover:bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl relative cursor-pointer group active:scale-95 transition-transform duration-150 z-20"
        whileHover={{ scale: 1.08 }}
      >
        {/* Pulsating Ring decoration */}
        <div className="absolute inset-0 rounded-full border-2 border-accent/70 pulse-ring-slow pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AiOutlineClose className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AiOutlineMessage className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 w-[350px] sm:w-[380px] h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-accent/25 glassmorphism flex flex-col justify-between z-10"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
          >
            {/* Chat Header */}
            <div className="bg-primary text-white p-5 flex items-center justify-between border-b border-accent/10">
              <div className="flex items-center gap-3">
                {/* Gold Avatar Icon */}
                <div className="w-10 h-10 rounded-full bg-accent border border-white/20 flex items-center justify-center font-serif text-sm font-semibold tracking-wider text-dark-brown">
                  HDH
                </div>
                <div>
                  <h4 className="font-serif text-sm font-medium tracking-wide">
                    Atelier Assistant
                  </h4>
                  <span className="font-sans text-[10px] text-accent font-semibold uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Chat Dialogue Pane */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-white/50">
              {messages.map((msg, index) => {
                const isAssistant = msg.sender === "assistant";
                return (
                  <div
                    key={index}
                    className={`flex flex-col ${isAssistant ? "items-start" : "items-end"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 shadow-sm text-xs leading-relaxed font-light ${
                        isAssistant
                          ? "bg-white text-dark-brown border border-primary/5 rounded-tl-none"
                          : "bg-primary text-white rounded-tr-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-dark-brown/40 mt-1 px-1">
                      {msg.time}
                    </span>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex flex-col items-start">
                  <div className="bg-white text-dark-brown border border-primary/5 rounded-2xl rounded-tl-none p-3 shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              <div ref={scrollRef} />
            </div>

            {/* Quick Option Menu & Footer Input */}
            <div className="p-4 bg-cream/70 border-t border-primary/5 flex flex-col gap-2">
              <span className="font-sans text-[9px] text-dark-brown/40 uppercase tracking-widest block mb-1">
                Choose an inquiry option
              </span>
              
              <div className="flex flex-wrap gap-2 max-h-[110px] overflow-y-auto pr-1">
                {quickOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleOptionClick(opt)}
                    className="px-3 py-1.5 bg-white hover:bg-primary border border-primary/10 hover:border-primary text-primary hover:text-white rounded-full font-sans text-[11px] tracking-wide cursor-pointer transition-colors duration-200"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
