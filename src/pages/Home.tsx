import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import ufuomaProfile from "@/assets/ufuoma-profile.png";
import heroBg from "@/assets/hero-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  useScrollReveal();
  const businessSolutions = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Business Websites",
      description: "Professional websites that convert visitors into customers and drive business growth"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing, inventory management, and analytics"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Web Applications",
      description: "Custom web apps that streamline operations and improve business efficiency"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "Modernize your business processes with cutting-edge technology solutions"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8" data-aos="fade-up">
              <img
                src={ufuomaProfile}
                alt="Ufuoma O."
                className="w-32 h-32 rounded-full mx-auto mb-6 shadow-glow border-4 border-primary/20"
              />
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight" data-aos="fade-up" data-aos-delay="200">
              Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">Ufuoma</span>
            </h1>
            <h2 className="text-3xl font-semibold mb-6 text-muted-foreground" data-aos="fade-up" data-aos-delay="300">
              Professional Web Developer & Business Solutions Expert
            </h2>
            <p className="text-xl mb-8 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              I help businesses succeed online with custom web solutions that drive growth, 
              increase revenue, and provide exceptional user experiences. From startups to established 
              enterprises, I deliver modern web applications that transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="500">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/portfolio">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Centralized CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center" data-aos="fade-up">
            <div className="bg-gradient-glass backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center shadow-glass max-w-2xl">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Choose from our affordable packages designed to help your business succeed online. 
                Professional web solutions starting at just $200.
              </p>
              <Button variant="hero" size="lg" className="transform hover:scale-105 transition-all duration-300" asChild>
                <Link to="/services">
                  View Services & Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Business Solutions That Drive Results</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized services designed to increase your revenue, improve efficiency, and accelerate growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessSolutions.map((solution, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border hover:shadow-glow transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join successful businesses that have increased their revenue and growth with our web solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/services">View Pricing & Packages</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;