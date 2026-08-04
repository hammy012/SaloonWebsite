import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Montgomery",
      location: "San Diego, CA",
      stars: 5,
      quote: "Melissa is an absolute artist! Finding a stylist who truly understands dimensional blonde tones while keeping the hair healthy was impossible until I found her. She is patient, extremely talented, and runs a stunning, premium salon experience.",
      service: "Custom Blonding",
    },
    {
      name: "Isabella Richardson",
      location: "La Jolla, CA",
      stars: 5,
      quote: "The Blonde Voyage experience is worth every penny. Melissa took my damaged, blotchy highlights and gave me the most gorgeous, rich balayage. The salon space feels like a private sanctuary. I walked out feeling so confident and cared for.",
      service: "Color Correction & Treatment",
    },
    {
      name: "Charlotte Delancy",
      location: "Coronado, CA",
      stars: 5,
      quote: "I've been a client of Melissa's for over two years now, and she never fails to make me feel beautiful. The attention to detail is outstanding—from the custom formulation to the molecular treatment. The compliment level on my hair is through the roof!",
      service: "Signature Balayage & Styling",
    },
    {
      name: "Amanda Vance",
      location: "San Diego, CA",
      stars: 5,
      quote: "Every appointment feels like a luxury vacation. Melissa doesn't just color your hair; she designs a look that matches your lifestyle and grow-out preferences. Hands down the best blonding specialist in Southern California.",
      service: "Highlights & Glossing",
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] left-[-5%] w-80 h-80 rounded-full bg-cream/70 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-semibold mb-4 block">
            Reviews
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary font-light mb-6">
            Client Testimonials
          </h2>
          <div className="w-16 h-[1.5px] bg-accent mx-auto" />
        </div>

        {/* Swiper Carousel */}
        <div className="max-w-4xl mx-auto pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active !bg-accent !w-6",
              bulletClass: "swiper-pagination-bullet !bg-accent/40 !w-2 !h-2 rounded-full transition-all duration-300",
            }}
            className="pb-14"
          >
            {testimonials.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-cream rounded-3xl p-8 md:p-14 shadow-sm border border-primary/5 hover:border-accent/20 transition-all duration-500 text-center relative overflow-hidden">
                  
                  {/* Decorative quote mark */}
                  <span className="absolute -top-6 left-8 font-serif text-[180px] text-accent/10 select-none pointer-events-none leading-none">
                    “
                  </span>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6 relative z-10">
                    {[...Array(review.stars)].map((_, starIdx) => (
                      <AiFillStar key={starIdx} className="w-5 h-5 text-accent" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="font-serif text-xl md:text-2xl text-primary font-light italic leading-relaxed mb-8 relative z-10 max-w-2xl mx-auto text-dark-brown/95">
                    "{review.quote}"
                  </p>

                  {/* Client Info */}
                  <div className="relative z-10">
                    <span className="font-sans text-xs md:text-sm tracking-widest text-accent uppercase font-bold block mb-1">
                      {review.service}
                    </span>
                    <h4 className="font-serif text-lg text-primary font-medium">
                      {review.name}
                    </h4>
                    <span className="font-sans text-[11px] text-dark-brown/50 uppercase tracking-wider">
                      {review.location}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
