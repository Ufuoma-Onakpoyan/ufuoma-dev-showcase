import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import ufuomaProfile from "@/assets/ufuoma-profile.png";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Modern React, TypeScript, and cutting-edge web technologies"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with native performance"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Applications",
      description: "Full-stack web solutions with scalable architecture"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast applications with optimal user experience"
    }
  ];

  return (
    <div className="min-h-screen">
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
            <div className="mb-8">
              <img
                src={ufuomaProfile}
                alt="Ufuoma O."
                className="w-32 h-32 rounded-full mx-auto mb-6 shadow-glow border-4 border-primary/20"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Ufuoma O.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Software Engineer & Web Developer
            </p>
            <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences through innovative web development 
              and cutting-edge software engineering solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/portfolio">
                  View My Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Do Best</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized in creating modern, scalable, and user-friendly digital solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border hover:shadow-glow transition-all duration-300 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's collaborate and turn your ideas into reality with cutting-edge technology
          </p>
          <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;