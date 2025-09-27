import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useGSAP, useMagneticEffect } from "@/hooks/useGSAP";

const Contact = () => {
  useGSAP();
  useMagneticEffect();

  const handleEmailClick = () => {
    window.location.href = "mailto:ufuomaonakpoyan@gmail.com";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348144933788", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 glass-card">
              <h1 className="text-5xl font-bold mb-6 gradient-text">
                Let's Work Together
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? I'm here to help you create 
                exceptional digital experiences with modern technologies. Let's discuss your project.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email Contact */}
                <Card className="glass-card-intense glass-hover magnetic glow-primary group stagger-item">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <Mail className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform float-element" />
                      <h3 className="text-2xl font-semibold mb-3">Email Me</h3>
                      <p className="text-muted-foreground mb-6">
                        Drop me a line and I'll get back to you within 24 hours.
                      </p>
                      <p className="text-sm text-muted-foreground mb-6">
                        ufuomaonakpoyan@gmail.com
                      </p>
                    </div>
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full magnetic glow-primary"
                      onClick={handleEmailClick}
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Send Email
                    </Button>
                  </CardContent>
                </Card>

                {/* WhatsApp Contact */}
                <Card className="glass-card-intense glass-hover magnetic glow-primary group stagger-item">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <FaWhatsapp className="h-16 w-16 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform float-element" />
                      <h3 className="text-2xl font-semibold mb-3">WhatsApp Me</h3>
                      <p className="text-muted-foreground mb-6">
                        Chat with me directly for quick questions or project discussions.
                      </p>
                      <p className="text-sm text-muted-foreground mb-6">
                        +234 814 493 3788
                      </p>
                    </div>
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full magnetic bg-green-600 hover:bg-green-700 text-white"
                      onClick={handleWhatsAppClick}
                    >
                      <FaWhatsapp className="h-5 w-5 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <div className="mt-16 text-center glass-card">
                <Card className="glass-card-intense glass-hover magnetic">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">Let's Discuss Your Project</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      Whether you need a complete business website, modern e-commerce platform, cutting-edge web application, 
                      or want to improve your existing online presence with modern technologies - I'm here to help. I offer free consultations 
                      for new projects and respond to all inquiries within 24 hours. Let's discuss how we can transform 
                      your business with professional web solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;