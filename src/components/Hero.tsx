import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { useRef, useEffect } from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder-video-poster.jpg"
        >
          <source src="/src/assets/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>
      
      <div className="relative container px-6 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-28 md:py-36 lg:py-44">
        <div className="max-w-2xl mx-4 sm:mx-6 md:mx-0">
          <div className="flex items-center space-x-3 mb-6 sm:mb-8">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              100% Organic & Fresh
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
            Fresh from Our Farm
            <span className="block text-primary">Tropical Fruits &amp; Organic Oils</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-xl">
            From mango orchards to sesame fields, we bring you the finest selection of tropical fruits, organic oils, and fresh produce.
            Pure, natural, and delicious.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 sm:mt-12">
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
