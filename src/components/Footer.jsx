import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-cream pt-20 pb-10 border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand Info */}
          <div>
            <span className="font-serif text-xl tracking-widest text-primary font-medium block mb-3">
              HONEY DOES HAIR
            </span>
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent font-semibold block mb-6">
              by melissa fierro
            </span>
            <p className="font-sans text-xs md:text-sm text-dark-brown/70 font-light leading-relaxed mb-6">
              Bespoke luxury blonding, dimensional color shifts, and high-end salon treatments designed to bring out your natural, radiant confidence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/honeydoeshair?igsh=MWU3a3plaXUyNDBuZQ%3D%3D&igsi=MWU3a3plaXUyNDBuZQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors"
                aria-label="Instagram Profile"
              >
                <AiOutlineInstagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@honeydoeshair.com"
                className="w-9 h-9 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors"
                aria-label="Email Contact"
              >
                <AiOutlineMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h4 className="font-serif text-base text-primary font-medium tracking-wide mb-6">
              Atelier Hours
            </h4>
            <ul className="space-y-3 font-sans text-xs md:text-sm text-dark-brown/75 font-light">
              <li className="flex justify-between">
                <span>Wednesday - Friday</span>
                <span className="text-secondary font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-secondary font-medium">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday - Tuesday</span>
                <span className="text-dark-brown/40">Closed</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-serif text-base text-primary font-medium tracking-wide mb-6">
              Quick Navigation
            </h4>
            <ul className="space-y-3 font-sans text-xs md:text-sm">
              {[
                { name: "About Melissa", href: "#about" },
                { name: "Curated Menu", href: "#services" },
                { name: "Transformations", href: "#transformation" },
                { name: "Lookbook Gallery", href: "#gallery" },
                { name: "Client Reviews", href: "#testimonials" },
                { name: "FAQs", href: "#faq" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-dark-brown/70 hover:text-accent font-light transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location */}
          <div>
            <h4 className="font-serif text-base text-primary font-medium tracking-wide mb-6">
              Salon Location
            </h4>
            <p className="font-sans text-xs md:text-sm text-dark-brown/75 font-light leading-relaxed mb-4">
              <strong>Blonde Voyage Salon</strong>
              <br />
              San Diego, California
            </p>
            <p className="font-sans text-[11px] text-dark-brown/50 tracking-wider leading-relaxed">
              Sessions are strictly by appointment only. Free guest parking is available behind the salon.
            </p>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-dark-brown/40 tracking-wider">
            &copy; {currentYear} Honey Does Hair. All Rights Reserved.
          </p>
          <p className="font-sans text-[11px] text-dark-brown/40 tracking-wider">
            Designed by Melissa Fierro | Developed with Care
          </p>
        </div>

      </div>
    </footer>
  );
}
