import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSearch, 
  FiClock, 
  FiDollarSign, 
  FiCheck, 
  FiScissors, 
  FiStar, 
  FiRefreshCw, 
  FiTrash2, 
  FiInfo
} from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import Magnetic from "./Magnetic";

export default function Services() {
  const [activeTab, setActiveTab] = useState("color");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  // Data structure matching the iPhone screenshots and adding rich descriptions
  const servicesData = useMemo(() => [
    // 1. Established Clientele Color Services
    {
      id: "hairline-babylights",
      category: "color",
      title: "Hairline Babylights",
      price: 180,
      duration: 90,
      description: "Bright accent foils concentrated along the hairline and face frame for an instant luminous refresh.",
      icon: FiStar
    },
    {
      id: "partial-babylights",
      category: "color",
      title: "Partial Babylights",
      price: 270,
      duration: 180,
      description: "Delicate micro-foils covering crown and hairline sections to restore brightness with soft dimension.",
      icon: FiStar
    },
    {
      id: "half-head-babylights",
      category: "color",
      title: "Half Head Babylights",
      price: 300,
      duration: 180,
      description: "High-density micro-foiling through the top half and front sides, providing a bright and balanced blend.",
      icon: FiStar
    },
    {
      id: "full-babylights",
      category: "color",
      title: "Full Babylights",
      price: 320,
      duration: 180,
      description: "Maximum blonde saturation with dense, micro-fine foils throughout the entire head.",
      icon: FiStar
    },
    {
      id: "partial-balayage",
      category: "color",
      title: "Partial Balayage",
      price: 270,
      duration: 180,
      description: "Soft, hand-painted sweeps covering face frame and crown area, offering a low-maintenance look.",
      icon: FiStar
    },
    {
      id: "half-head-balayage",
      category: "color",
      title: "Half Head Balayage",
      price: 300,
      duration: 180,
      description: "Natural-looking, hand-painted sweeps covering crown and top layers for seamless dimensional gradients.",
      icon: FiStar
    },
    {
      id: "full-balayage",
      category: "color",
      title: "Full Balayage",
      price: 320,
      duration: 180,
      description: "Complete hand-painted canvas. Broad strokes of soft dimension throughout the entire head.",
      icon: FiStar
    },
    {
      id: "partial-foilayage",
      category: "color",
      title: "Partial Foilayage",
      price: 270,
      duration: 180,
      description: "Combines high-impact foil lifting with soft balayage blending, focused on top sections.",
      icon: FiStar
    },
    {
      id: "half-head-foilayage",
      category: "color",
      title: "Half Head Foilayage",
      price: 300,
      duration: 180,
      description: "Mid-level high-contrast brightness with a soft root blend covering the upper sections.",
      icon: FiStar
    },
    {
      id: "full-foilayage",
      category: "color",
      title: "Full Foilayage",
      price: 320,
      duration: 180,
      description: "Ultimate high-impact brightness with natural root shading, extending through the entire head.",
      icon: FiStar
    },

    // 2. Extensions
    {
      id: "extension-consultation",
      category: "extensions",
      title: "Extension Consultation",
      price: 50,
      duration: 15,
      description: "Personalized hair analysis, custom shade matching, and custom volume planning.",
      icon: FiInfo
    },
    {
      id: "1-row-install",
      category: "extensions",
      title: "1 Row Install",
      price: 1200,
      duration: 120,
      description: "Premium weft placement to add natural volume and subtle thickness.",
      icon: FiStar
    },
    {
      id: "2-rows-install",
      category: "extensions",
      title: "2 Rows Install",
      price: 1800,
      duration: 120,
      description: "Our signature weft placement. Adds rich density, luxurious volume, and medium length.",
      icon: FiStar
    },
    {
      id: "3-rows-install",
      category: "extensions",
      title: "3 Rows Install",
      price: 2400,
      duration: 120,
      description: "Maximum transformation. Provides full volume, premium thickness, and dramatic length.",
      icon: FiStar
    },
    {
      id: "basic-1-row-removal-reapp",
      category: "extensions",
      title: "Basic 1 Row Removal+ReApp",
      price: 180,
      duration: 60,
      description: "Safe removal and standard reapplication of one extension row.",
      icon: FiRefreshCw
    },
    {
      id: "basic-2-rows-removal-reapp",
      category: "extensions",
      title: "Basic 2 Rows Removal+ReApp",
      price: 280,
      duration: 120,
      description: "Safe removal and standard reapplication of two extension rows.",
      icon: FiRefreshCw
    },
    {
      id: "basic-3-rows-removal-reapp",
      category: "extensions",
      title: "Basic 3 Rows Removal+ReApp",
      price: 360,
      duration: 120,
      description: "Safe removal and standard reapplication of three extension rows.",
      icon: FiRefreshCw
    },
    {
      id: "premium-1-row-removal-reapp",
      category: "extensions",
      title: "Premium 1 Row Removal+ReApp",
      price: 270,
      duration: 60,
      description: "Extension row reapplication with detailed detangling and hair conditioning.",
      icon: FiRefreshCw
    },
    {
      id: "premium-2-rows-removal-reapp",
      category: "extensions",
      title: "Premium 2 Rows Removal+ReApp",
      price: 370,
      duration: 120,
      description: "Extension row reapplication with detailed detangling and hair conditioning.",
      icon: FiRefreshCw
    },
    {
      id: "premium-3-rows-removal-reapp",
      category: "extensions",
      title: "Premium 3 Rows Removal+ReApp",
      price: 450,
      duration: 120,
      description: "Extension row reapplication with detailed detangling and hair conditioning.",
      icon: FiRefreshCw
    },
    {
      id: "platinum-1-row-removal-reapp",
      category: "extensions",
      title: "Platinum 1 Row Removal+ReApp",
      price: 355,
      duration: 120,
      description: "Elite service including deep scalp clarifying, bond reconstruction, and style blowdry.",
      icon: FiRefreshCw
    },
    {
      id: "platinum-2-rows-removal-reapp",
      category: "extensions",
      title: "Platinum 2 Rows Removal+ReApp",
      price: 455,
      duration: 180,
      description: "Elite service including deep scalp clarifying, bond reconstruction, and style blowdry.",
      icon: FiRefreshCw
    },
    {
      id: "platinum-3-rows-removal-reapp",
      category: "extensions",
      title: "Platinum 3 Rows Removal+ReApp",
      price: 555,
      duration: 180,
      description: "Elite service including deep scalp clarifying, bond reconstruction, and style blowdry.",
      icon: FiRefreshCw
    },
    {
      id: "1-row-removal",
      category: "extensions",
      title: "1 Row Removal",
      price: 90,
      duration: 15,
      description: "Safe, expert removal of one row of extensions to preserve natural hair health.",
      icon: FiTrash2
    },
    {
      id: "2-rows-removal",
      category: "extensions",
      title: "2 Rows Removal",
      price: 140,
      duration: 30,
      description: "Safe, expert removal of two rows of extensions to preserve natural hair health.",
      icon: FiTrash2
    },
    {
      id: "3-row-removal",
      category: "extensions",
      title: "3 Row Removal",
      price: 180,
      duration: 45,
      description: "Safe, expert removal of three rows of extensions to preserve natural hair health.",
      icon: FiTrash2
    },

    // 3. Cut and Color Add-On
    {
      id: "haircut-add-on",
      category: "addons",
      title: "Haircut Add-On",
      price: 95,
      duration: 30,
      description: "Tailored haircut and detailing to complete your color service.",
      icon: FiScissors
    },
    {
      id: "detangling",
      category: "addons",
      title: "Detangling",
      price: 50,
      duration: 15,
      description: "Gentle detangling service for matted or knotty hair using professional styling tools.",
      icon: FiScissors
    },
    {
      id: "luxury-treatment",
      category: "addons",
      title: "Luxury Treatment",
      price: 55,
      duration: 10,
      description: "Intense structural bond-building or hydrating mask for optimal shine and softness.",
      icon: FiStar
    },
    {
      id: "base-coverage-add-on",
      category: "addons",
      title: "Base Coverage Add-On",
      price: 50,
      duration: 15,
      description: "Targeted grey root coverage or root shading to blend perfectly with highlights.",
      icon: FiStar
    },
    {
      id: "dry-cut",
      category: "addons",
      title: "Dry Cut",
      price: 70,
      duration: 30,
      description: "Finishing dry cut, texturizing, and trimming to shape and perfect your style.",
      icon: FiScissors
    }
  ], []);

  const categories = [
    { id: "color", label: "Color Services", desc: "For Established Clientele" },
    { id: "extensions", label: "Premium Extensions", desc: "Consultation & Install" },
    { id: "addons", label: "Cut & Color Add-Ons", desc: "Experience Upgrades" }
  ];

  // Toggle service selection
  const handleToggleService = (service) => {
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.id === service.id);
      if (exists) {
        return prev.filter((s) => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleClearEstimate = () => {
    setSelectedServices([]);
  };

  // Filter logic based on active tab and search query
  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesTab = service.category === activeTab;
      const matchesSearch = 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // If searching, ignore tab filter to show all matching results across categories
      if (searchQuery.trim() !== "") {
        return matchesSearch;
      }
      return matchesTab;
    });
  }, [servicesData, activeTab, searchQuery]);

  // Calculate totals
  const totalCost = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.duration, 0);

  // Format time output helper
  const formatTime = (mins) => {
    if (mins < 60) return `${mins} min`;
    const hrs = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return remainingMins > 0 ? `${hrs}h ${remainingMins}m` : `${hrs} hrs`;
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-cream/45 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-[10%] right-[-5%] w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
            Curated Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary font-light mb-6">
            Luxury Hair Services
          </h2>
          <div className="w-16 h-[1.5px] bg-accent mx-auto mb-6" />
          <p className="font-sans text-sm md:text-base text-dark-brown/75 font-light leading-relaxed">
            Browse our signature menu. Check the services you need to build a custom duration & cost estimate for your next appointment.
          </p>
        </div>

        {/* Search Bar & Tab Bar */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setSearchQuery(""); // Clear search when switching tabs
                }}
                className={`px-6 py-3 rounded-full text-left transition-all duration-300 cursor-pointer ${
                  activeTab === cat.id && searchQuery === ""
                    ? "bg-primary text-white shadow-md border-primary"
                    : "bg-white text-dark-brown border border-primary/10 hover:border-accent"
                }`}
              >
                <span className="block font-serif text-sm font-light tracking-wide">{cat.label}</span>
                <span className={`block font-sans text-[9px] uppercase tracking-wider ${
                  activeTab === cat.id && searchQuery === "" ? "text-accent/80" : "text-dark-brown/40"
                }`}>
                  {cat.desc}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search luxury services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-primary/10 hover:border-accent focus:border-accent rounded-full text-sm font-sans font-light outline-none transition-all duration-300 shadow-sm"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-accent w-4 h-4" />
          </div>
        </div>

        {/* Main Service Area (Layout Grid: List + Estimator Panel) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Services List */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="wait">
              {filteredServices.length > 0 ? (
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  {filteredServices.map((service) => {
                    const isSelected = selectedServices.some((s) => s.id === service.id);
                    return (
                      <div
                        key={service.id}
                        onClick={() => handleToggleService(service)}
                        className={`group bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 cursor-pointer relative overflow-hidden select-none hover:shadow-md ${
                          isSelected 
                            ? "border-accent bg-accent/[0.02]" 
                            : "border-primary/5 hover:border-accent/30"
                        }`}
                      >
                        {/* Selected Indicator Glow */}
                        {isSelected && (
                          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                        )}

                        <div className="flex gap-4 items-start flex-1">
                          {/* Selection Checkbox */}
                          <div className={`mt-1 w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all ${
                            isSelected 
                              ? "bg-accent border-accent text-white" 
                              : "border-primary/20 group-hover:border-accent"
                          }`}>
                            {isSelected && <FiCheck className="w-3.5 h-3.5" />}
                          </div>

                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <h3 className="font-serif text-lg text-primary font-medium group-hover:text-accent transition-colors duration-300">
                                {service.title}
                              </h3>
                              {/* Pill for search results context */}
                              {searchQuery !== "" && (
                                <span className="font-sans text-[8px] bg-cream text-accent px-2 py-0.5 rounded-full uppercase tracking-wider">
                                  {categories.find(c => c.id === service.category)?.label}
                                </span>
                              )}
                            </div>
                            <p className="font-sans text-xs md:text-sm text-dark-brown/70 font-light leading-relaxed max-w-xl">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        {/* Price and Duration */}
                        <div className="flex md:flex-col justify-between md:justify-center items-center md:items-end w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-cream flex-shrink-0">
                          <span className="font-serif text-lg text-primary font-medium">
                            ${service.price.toFixed(2)}
                          </span>
                          <span className="font-sans text-xs text-dark-brown/50 flex items-center gap-1.5 mt-0.5">
                            <FiClock className="w-3 h-3 text-accent" />
                            {formatTime(service.duration)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-16 bg-white rounded-3xl border border-primary/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FiInfo className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="font-sans text-sm text-dark-brown/60">
                    No services found matching "{searchQuery}".
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Sticky Estimator Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-primary/5 shadow-lg relative overflow-hidden">
              {/* Luxury Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-accent" />

              <h3 className="font-serif text-xl text-primary font-light mb-6 flex justify-between items-center">
                <span>Estimate Builder</span>
                {selectedServices.length > 0 && (
                  <button 
                    onClick={handleClearEstimate}
                    className="font-sans text-[10px] tracking-wider uppercase text-red-500 hover:text-red-700 transition-colors font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    Clear All
                  </button>
                )}
              </h3>

              <AnimatePresence mode="wait">
                {selectedServices.length > 0 ? (
                  <motion.div
                    key="has-services"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Selected List */}
                    <div className="space-y-3 max-h-56 overflow-y-auto pr-2 custom-scrollbar">
                      {selectedServices.map((service) => (
                        <div key={service.id} className="flex justify-between items-start text-xs border-b border-cream pb-2">
                          <div className="pr-4">
                            <span className="font-sans text-dark-brown/80 font-medium block">{service.title}</span>
                            <span className="font-sans text-[9px] text-accent/70 block mt-0.5">
                              {formatTime(service.duration)}
                            </span>
                          </div>
                          <span className="font-serif text-dark-brown/90 font-medium whitespace-nowrap">
                            ${service.price.toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Cost & Duration Summary */}
                    <div className="bg-cream/40 rounded-2xl p-5 space-y-3 border border-primary/5">
                      <div className="flex justify-between items-center">
                        <span className="font-sans text-xs text-dark-brown/60 uppercase tracking-wider">Total Duration</span>
                        <span className="font-sans text-sm text-primary font-semibold flex items-center gap-1.5">
                          <FiClock className="w-3.5 h-3.5 text-accent" />
                          {formatTime(totalDuration)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-cream">
                        <span className="font-sans text-xs text-dark-brown/60 uppercase tracking-wider">Total Estimate</span>
                        <span className="font-serif text-xl text-primary font-bold">
                          ${totalCost.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Booking Note */}
                    <p className="font-sans text-[10px] text-dark-brown/50 leading-relaxed italic text-center">
                      * Prices and durations shown are estimates. Actual time and pricing may vary slightly during physical appointment based on hair density and specific requirements.
                    </p>

                    {/* Confirmation Button */}
                    <Magnetic strength={0.1} className="w-full block">
                      <a
                        href="https://www.instagram.com/honeydoeshair?igsh=MWU3a3plaXUyNDBuZQ%3D%3D&igsi=MWU3a3plaXUyNDBuZQ%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-4 bg-primary hover:bg-secondary text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                      >
                        <AiOutlineInstagram className="w-4 h-4" />
                        <span>Inquire Consultation</span>
                      </a>
                    </Magnetic>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-cream mx-auto flex items-center justify-center text-accent animate-pulse">
                      <FiScissors className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-sans text-sm text-dark-brown/70 font-light">
                        Estimate is currently empty.
                      </p>
                      <p className="font-sans text-xs text-dark-brown/50 mt-1 max-w-[200px] mx-auto leading-relaxed">
                        Select one or more services from the list to build your custom appointment package estimate.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Bottom Callout */}
        <div className="text-center mt-20">
          <p className="font-sans text-xs md:text-sm text-dark-brown/60 mb-6 italic">
            Looking for something specific or require a detailed consultation?
          </p>
          <Magnetic strength={0.15}>
            <a
              href="https://www.instagram.com/honeydoeshair?igsh=MWU3a3plaXUyNDBuZQ%3D%3D&igsi=MWU3a3plaXUyNDBuZQ%3D%3D"
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
