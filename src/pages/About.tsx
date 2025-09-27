import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import ufuomaProfile from "@/assets/ufuoma-profile.png";
import { useGSAP, useMagneticEffect } from "@/hooks/useGSAP";

const About = () => {
  useGSAP();
  useMagneticEffect();
  const technologies = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL",
    "MongoDB", "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs",
    "Tailwind CSS", "Supabase", "Firebase", "Git", "CI/CD", "Microservices"
  ];

  const achievements = [
    "6+ websites successfully delivered and deployed",
    "Expertise in both frontend and backend development",
    "Specialization in modern web application architecture",
    "Experience with cloud platforms and DevOps practices",
    "Strong focus on performance optimization and user experience",
    "Proven track record in diverse industry verticals"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 glass-card">
            <img
              src={ufuomaProfile}
              alt="Ufuoma O."
              className="w-40 h-40 rounded-full mx-auto mb-8 shadow-glow border-4 border-primary/20 float-element"
            />
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              About Ufuoma O.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Passionate software engineer and web developer with a keen eye for detail 
              and a commitment to delivering exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Story */}
            <Card className="glass-card-intense glass-hover magnetic stagger-item">
              <CardContent className="p-8">
                <h2 className="text-3xl font-semibold mb-6">My Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As a dedicated software engineer and web developer, I bring creativity 
                    and technical expertise to every project I undertake. My journey in 
                    technology has been driven by a passion for solving complex problems 
                    and creating intuitive digital solutions.
                  </p>
                  <p>
                    With extensive experience across multiple industries including real estate, 
                    construction, entertainment, finance, and education, I understand the unique 
                    challenges each sector faces and craft tailored solutions accordingly.
                  </p>
                  <p>
                    My approach combines modern development practices with a deep understanding 
                    of user experience, ensuring that every application I build is not only 
                    technically sound but also delightful to use.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="glass-card-intense glass-hover magnetic stagger-item">
              <CardContent className="p-8">
                <h2 className="text-3xl font-semibold mb-6">Key Achievements</h2>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 stagger-item">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technologies */}
          <Card className="glass-card-intense glass-hover magnetic">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold mb-8 text-center">Technologies & Tools</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm px-4 py-2 glass-card glass-hover magnetic glow-primary stagger-item"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;