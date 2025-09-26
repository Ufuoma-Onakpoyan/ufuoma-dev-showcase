import PortfolioCard from "@/components/PortfolioCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mrdgnGroup from "@/assets/mrdgn-group.jpg";
import mansaLuxury from "@/assets/mansa-luxury.jpg";
import constructionSite from "@/assets/construction-site.jpg";
import entertainment from "@/assets/entertainment.jpg";
import tradingPlatform from "@/assets/trading-platform.jpg";
import scholarsGite from "@/assets/scholars-site.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Portfolio = () => {
  useScrollReveal();
  const projects = [
    {
      title: "MRDGN Group",
      description: "A comprehensive business platform showcasing multiple service offerings including real estate, construction, and entertainment divisions. Built with modern web technologies featuring responsive design and dynamic content management.",
      url: "https://mrdgngroup.com",
      image: mrdgnGroup,
      category: "Business Platform"
    },
    {
      title: "Mansa Luxury Realty",
      description: "Elegant real estate platform specializing in luxury properties. Features advanced property search, virtual tours, and agent connectivity with sophisticated UI/UX design tailored for high-end market clients.",
      url: "https://mansaluxerealty.mrdgngroup.com",
      image: mansaLuxury,
      category: "Real Estate"
    },
    {
      title: "MRDGN Construction",
      description: "Professional construction company website showcasing project portfolios, services, and expertise. Includes project galleries, service breakdowns, and client testimonials with industrial-grade design aesthetics.",
      url: "https://construction.mrdgngroup.com",
      image: constructionSite,
      category: "Construction"
    },
    {
      title: "MRDGN Entertainment",
      description: "Dynamic entertainment industry platform featuring event management, artist showcases, and booking systems. Built with vibrant design elements and interactive features for enhanced user engagement.",
      url: "https://entertainment.mrdgngroup.com",
      image: entertainment,
      category: "Entertainment"
    },
    {
      title: "Trade With MRK",
      description: "Advanced trading platform offering comprehensive financial tools, market analysis, and portfolio management. Features real-time data integration, charting capabilities, and secure transaction processing.",
      url: "https://tradewithmrk.com",
      image: tradingPlatform,
      category: "FinTech"
    },
    {
      title: "TMM Scholars",
      description: "Educational scholarship platform connecting students with funding opportunities. Includes application management systems, scholarship databases, and educational resource libraries with intuitive navigation.",
      url: "https://www.tmmscholars.com",
      image: scholarsGite,
      category: "Education"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              My Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of innovative web applications and digital solutions I've crafted 
              for clients across various industries. Each project represents a unique 
              challenge solved with modern technology and creative thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <PortfolioCard
                  title={project.title}
                  description={project.description}
                  url={project.url}
                  image={project.image}
                  category={project.category}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;