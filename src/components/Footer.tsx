import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaCode, FaCoffee, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ufuomaLogo from "@/assets/ufuoma-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-background/95 to-background border-t border-border/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1 sm:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <img 
                src={ufuomaLogo}
                alt="Ufuoma Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Building modern web solutions that help businesses grow and succeed in the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Web Development</li>
              <li className="text-muted-foreground text-sm">E-commerce Solutions</li>
              <li className="text-muted-foreground text-sm">CMS Development</li>
              <li className="text-muted-foreground text-sm">SEO Optimization</li>
              <li className="text-muted-foreground text-sm">Maintenance & Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-foreground font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:ufuomaonakpoyan@gmail.com"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <FaEnvelope className="h-4 w-4 mr-2" />
                  Email Us
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/2348144933788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <FaWhatsapp className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4 justify-center sm:justify-start">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section with Fun Detail */}
        <div className="border-t border-border/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © 2024 Ufuoma Web Solutions. All rights reserved.
          </p>
          
          {/* Fun Detail - Animated with love and coffee */}
          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
            <span>Coded with</span>
            <FaHeart className="h-3 w-3 text-red-500 animate-pulse" />
            <span>and lots of</span>
            <FaCoffee className="h-3 w-3 text-yellow-600 animate-bounce" />
            <FaCode className="h-3 w-3 ml-1 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;