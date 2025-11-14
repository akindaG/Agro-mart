import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-agro.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh organic products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>
      
      <div className="relative container px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              100% Organic & Fresh
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Fresh from Our Farm
            <span className="block text-primary">Tropical Fruits &amp; Organic Oils</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            From mango orchards to sesame fields, we bring you the finest selection of tropical fruits, organic oils, and fresh produce.
            Pure, natural, and delicious.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button size="lg" className="w-full sm:w-auto group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
