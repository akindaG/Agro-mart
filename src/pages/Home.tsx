import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Leaf, Award, Truck, Heart, ShieldCheck, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background pb-12">
      <Hero />

      {/* Trust Badges */}
      <div className="bg-primary/5 py-4 border-b">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <Badge variant="outline" className="gap-2">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              Secure Checkout
            </Badge>
            <Badge variant="outline" className="gap-2">
              <Truck className="h-4 w-4 text-blue-600" />
              Free Shipping Over $50
            </Badge>
            <Badge variant="outline" className="gap-2">
              <Clock className="h-4 w-4 text-amber-600" />
              Same Day Dispatch
            </Badge>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-secondary">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Earthy Eats Mart?</h2>
            <p className="text-muted-foreground">
              We're committed to bringing you the freshest, most nutritious organic produce while supporting sustainable farming practices and local communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="h-full text-center p-5 sm:p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Certified Organic</h3>
              <p className="text-sm text-muted-foreground">All products are USDA certified organic, free from harmful pesticides and GMOs</p>
            </div>
            <div className="h-full text-center p-5 sm:p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Rigorously tested to meet our high standards for freshness and nutrition</p>
            </div>
            <div className="h-full text-center p-5 sm:p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fast & Fresh</h3>
              <p className="text-sm text-muted-foreground">Harvested fresh and delivered to your door within 24-48 hours</p>
            </div>
            <div className="h-full text-center p-5 sm:p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sustainably Sourced</h3>
              <p className="text-sm text-muted-foreground">Supporting ethical farming and fair trade practices</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="container px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              From Our Partner Farms
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Farm-fresh fruits picked at peak ripeness
            </h2>
            <p className="text-muted-foreground text-lg">
              Enjoy sweet Alphonso mangoes and seasonal fruit baskets delivered directly from sustainable orchards.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline">Alphonso Mango Box</Badge>
              <Badge variant="outline">Seasonal Fruit Basket</Badge>
              <Badge variant="outline">100% Residue Free</Badge>
            </div>
            <Link to="/products">
              <Button size="lg" className="mt-6">
                Explore Fruits
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {products
              .filter((p) => p.category === "Fruits")
              .slice(0, 2)
              .map((fruit) => (
                <div
                  key={fruit.id}
                  className="relative overflow-hidden rounded-xl shadow-md group bg-background"
                >
                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-black/0 p-3">
                    <p className="text-sm font-semibold text-white">{fruit.name}</p>
                    <p className="text-xs text-white/80">
                      ${fruit.price} · {fruit.unit}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 px-4">
            <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
              Fresh Picks
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              This Week's Featured Harvest
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our season's finest selection of organic produce, handpicked for their exceptional quality and flavor
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} mode="home" />
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Organic Revolution
            </h2>
            <p className="text-lg mb-8 opacity-95 max-w-3xl mx-auto">
              Be the first to know about new arrivals, seasonal specials, and exclusive member-only offers. 
              Plus, get 15% off your first order when you subscribe to our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white/30"
              />
              <Button size="lg" variant="secondary" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
