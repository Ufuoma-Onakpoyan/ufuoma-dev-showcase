import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Zap, Crown, Smartphone, Globe2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const Services = () => {
  useScrollReveal();

  const packages = [
    {
      name: "Basic Package",
      price: "$200",
      icon: <Star className="h-8 w-8" />,
      gradient: "bg-gradient-basic",
      popular: false,
      description: "Perfect for small businesses getting started online",
      features: [
        "Custom responsive website (up to 5 pages)",
        "Mobile-optimized design",
        "Contact forms integration",
        "Basic SEO setup",
        "Social media integration",
        "30 days support"
      ]
    },
    {
      name: "Intermediate Package",
      price: "$500",
      icon: <Zap className="h-8 w-8" />,
      gradient: "bg-gradient-intermediate",
      popular: false,
      description: "Enhanced websites with mobile-responsive features",
      features: [
        "Everything in Basic package",
        "Advanced responsive design (up to 10 pages)",
        "Content Management System (CMS)",
        "E-commerce functionality (up to 50 products)",
        "Advanced SEO optimization",
        "Blog setup and management",
        "60 days support + maintenance",
        "Performance optimization"
      ]
    },
    {
      name: "Expert Package",
      price: "$1,000",
      icon: <Crown className="h-8 w-8" />,
      gradient: "bg-gradient-expert",
      popular: false,
      description: "Advanced websites with web app capabilities",
      features: [
        "Everything in Intermediate package",
        "Unlimited pages and custom features",
        "Advanced e-commerce (unlimited products)",
        "Custom web applications",
        "Custom branding and identity",
        "3 months support + maintenance",
        "Priority support and updates"
      ]
    },
    {
      name: "Mobile App Package",
      price: "$1,500",
      icon: <Smartphone className="h-8 w-8" />,
      gradient: "bg-gradient-primary",
      popular: false,
      description: "Native mobile app development for iOS and Android",
      features: [
        "Custom native mobile application",
        "iOS and Android development",
        "App store deployment & optimization",
        "Push notifications",
        "Offline functionality",
        "Custom UI/UX design",
        "90 days support + maintenance",
        "Performance optimization"
      ]
    },
    {
      name: "Complete Digital Package",
      price: "$2,000",
      icon: <Globe2 className="h-8 w-8" />,
      gradient: "bg-gradient-hero",
      popular: true,
      description: "Ultimate package: Website + Native Mobile App",
      features: [
        "Everything in Expert Package",
        "Native mobile app (iOS & Android)",
        "Cross-platform data synchronization",
        "Unified branding across platforms",
        "App store submission & approval",
        "Advanced analytics & reporting",
        "6 months support + maintenance",
        "Priority support across all platforms"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your business goals, target audience, and technical requirements for web and mobile platforms."
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Create wireframes and visual designs for web and mobile interfaces that align with your brand and provide excellent user experience."
    },
    {
      step: "03",
      title: "Development",
      description: "Build your website and/or mobile app using modern technologies, ensuring performance, security, and scalability across all platforms."
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing across devices, browsers, and app stores before launching your digital solutions to the world."
    },
    {
      step: "05",
      title: "Support & Growth",
      description: "Ongoing maintenance, updates, and optimization for web and mobile platforms to help your business grow digitally."
    }
  ];

  const whyChooseUs = [
    {
      title: "Cross-Platform Expertise",
      description: "We deliver seamless experiences across web and mobile platforms, ensuring consistent branding and functionality."
    },
    {
      title: "Modern Technology Stack",
      description: "Built with the latest technologies for web and native mobile development, ensuring speed, security, and scalability."
    },
    {
      title: "App Store Success",
      description: "Successfully launched apps on iOS App Store and Google Play Store with optimized listings and approval processes."
    },
    {
      title: "Complete Digital Solutions",
      description: "From websites to mobile apps, we provide comprehensive digital solutions that grow your business across all platforms."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Web & Mobile App Development Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your business with custom web and mobile solutions designed to drive growth, 
              increase revenue, and provide exceptional user experiences across all platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Choose Your Perfect Package</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with everything you need to succeed online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-8xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name}
                className={`relative overflow-hidden backdrop-blur-sm border-2 transition-all duration-300 hover:shadow-glow hover:scale-105 ${
                  pkg.popular 
                    ? 'border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-glass scale-105' 
                    : 'border-border hover:border-primary/50 bg-gradient-glass'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={`text-center pb-8 ${pkg.popular ? 'pt-12' : 'pt-8'}`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${pkg.gradient} text-white mb-4 mx-auto`}>
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mt-2">{pkg.price}</div>
                  <p className="text-muted-foreground mt-2">{pkg.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  <div className="pt-6">
                    <Button 
                      variant="hero" 
                      className="w-full" 
                      size="lg"
                      asChild
                    >
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver more than just websites - we provide business solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={item.title} className="bg-card border-border" data-aos="fade-up" data-aos-delay={index * 200}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven 5-step approach to deliver exceptional results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex items-start space-x-6 mb-12 last:mb-0" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {["Real Estate", "Construction", "Entertainment", "Trading & Finance", "Education", "Healthcare", "E-commerce", "Mobile Apps", "SaaS Platforms", "FinTech", "Professional Services", "Technology", "Hospitality"].map((industry, index) => (
              <Badge 
                key={industry} 
                variant="outline" 
                className="p-3 text-center border-primary/30 hover:border-primary transition-colors"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Get a free consultation and discover how we can help you achieve your online goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;