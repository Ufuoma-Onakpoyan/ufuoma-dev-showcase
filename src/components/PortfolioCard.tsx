import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  description: string;
  url: string;
  image: string;
  category: string;
}

const PortfolioCard = ({ title, description, url, image, category }: PortfolioCardProps) => {
  return (
    <Card className="group glass-card-intense glass-hover magnetic glow-primary overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-primary glass-card px-2 py-1 rounded-full">
            {category}
          </span>
          <Globe className="h-4 w-4 text-muted-foreground float-element" />
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Button variant="hero" size="sm" className="w-full magnetic glow-primary" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Visit Website
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;