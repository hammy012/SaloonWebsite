import { motion } from "framer-motion";
import { AiFillHeart, AiOutlineInstagram } from "react-icons/ai";
import Magnetic from "./Magnetic";

export default function Instagram() {
  const instagramPosts = [
    { src: "/assets/images/salon_2.jpg", likes: 142, comments: 18 },
    { src: "/assets/images/salon_3.jpg", likes: 198, comments: 24 },
    { src: "/assets/images/salon_4.jpg", likes: 165, comments: 12 },
    { src: "/assets/images/salon_5.jpg", likes: 212, comments: 32 },
    { src: "/assets/images/salon_6.jpg", likes: 189, comments: 16 },
    { src: "/assets/images/salon_7.jpg", likes: 254, comments: 41 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="instagram" className="py-24 bg-cream/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
            Social Lookbook
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary font-light mb-6">
            Follow Our Journey
          </h2>
          <div className="w-16 h-[1.5px] bg-accent mx-auto mb-6" />
          <a
            href="https://www.instagram.com/blondevoyagesalon/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs md:text-sm tracking-widest text-accent uppercase font-bold hover:text-primary transition-colors flex items-center justify-center gap-2"
          >
            <AiOutlineInstagram className="w-4 h-4" />
            @blondevoyagesalon
          </a>
        </div>

        {/* 6-Column Grid Layout */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href="https://www.instagram.com/blondevoyagesalon/"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg bg-white border border-primary/5 group block select-none"
            >
              {/* Image */}
              <img
                src={post.src}
                alt={`Instagram lookbook post ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-dark-brown/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white z-10">
                <div className="flex items-center gap-1.5 font-sans text-sm font-semibold">
                  <AiFillHeart className="w-4 h-4 text-accent" />
                  {post.likes}
                </div>
                <div className="font-sans text-xs font-semibold">
                  {post.comments} Comments
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Action Button */}
        <div className="text-center">
          <Magnetic strength={0.15}>
            <a
              href="https://www.instagram.com/blondevoyagesalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-secondary text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <AiOutlineInstagram className="w-4 h-4" />
              Follow on Instagram
            </a>
          </Magnetic>
        </div>

      </div>
    </section>
  );
}
