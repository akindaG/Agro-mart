import { Leaf, Users, Heart, Award, Clock, Shield, Sprout, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-20 border-b">
        <div className="container px-4 text-center">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
            Nourishing Lives Through Organic Excellence
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Earthy Eats Mart, we're on a mission to transform the way people experience food. Founded in 2020, we've grown from a small family farm to a trusted source for premium organic produce, connecting health-conscious consumers with the finest organic farmers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button size="lg">Shop Our Products</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-4 py-16">

        {/* Our Approach */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Sustainable Approach</h2>
          <p className="text-muted-foreground text-lg mb-12">
            We believe in a future where organic farming is the standard, not the exception. Our approach combines traditional farming wisdom with modern sustainable practices to deliver exceptional quality while protecting our planet.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-secondary/50 rounded-lg">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Sprout className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Regenerative Farming</h3>
              <p className="text-muted-foreground text-sm">
                We partner with farms that practice regenerative agriculture, improving soil health and biodiversity with every harvest.
              </p>
            </div>
            <div className="p-6 bg-secondary/50 rounded-lg">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Reduced Food Miles</h3>
              <p className="text-muted-foreground text-sm">
                Our network of local farmers ensures your food travels shorter distances, reducing carbon emissions and ensuring peak freshness.
              </p>
            </div>
            <div className="p-6 bg-secondary/50 rounded-lg">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Rigorous Standards</h3>
              <p className="text-muted-foreground text-sm">
                Every product meets our strict quality and safety standards, with regular testing and certification to ensure purity and nutritional value.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Leaf className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">100% Organic Integrity</h3>
                    <p className="text-muted-foreground">
                      We never compromise on our organic standards. Every product is certified organic, grown without synthetic pesticides, GMOs, or harmful chemicals. Our farmers use sustainable methods that enrich the soil and protect ecosystems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Farmers First</h3>
                  <p className="text-muted-foreground">
                    We believe in fair compensation and long-term partnerships with farmers. By supporting small-scale organic farmers, we help preserve traditional farming knowledge and strengthen local economies while ensuring you get the freshest produce.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Passion for Health</h3>
                  <p className="text-muted-foreground">
                    We're passionate about nourishing families with clean, nutrient-dense foods. Every product is hand-selected for its quality, taste, and nutritional benefits, because we believe that good food is the foundation of a healthy life.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Excellence in Quality</h3>
                  <p className="text-muted-foreground">
                    From seed to shelf, we maintain rigorous quality control. Our products undergo multiple quality checks to ensure they meet our high standards for freshness, taste, and nutritional value. We're committed to delivering nothing but the best to your table.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>

        {/* Impact & Community */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Since our founding, we've been proud to support organic farming and make a positive difference in our communities and the environment.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">250+</div>
                <div className="text-sm text-muted-foreground">Organic Farms Supported</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Pounds of CO2 Offset</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Guaranteed</div>
              </div>
            </div>
            
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Join Our Mission</Link>
            </Button>
          </div>
        </div>

        {/* Greenhouse Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Our Greenhouse & Farm Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-10">
            Alongside open fields, our modern greenhouses and farm facilities help us grow a diverse range of crops and
            create value-added products for home and kitchen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 h-32 w-full rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground uppercase tracking-wide">
                  Image coming soon
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sprout className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Sweet Corn</h3>
                    <p className="text-sm text-muted-foreground">
                      Crisp and sweet corn grown with sustainable practices. Perfect for grilling, boiling, or adding to
                      salads and soups.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 h-32 w-full rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground uppercase tracking-wide">
                  Image coming soon
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Organic Fertilizer</h3>
                    <p className="text-sm text-muted-foreground">
                      Nutrient-rich compost and fertilizer made from our own farm byproducts, ideal for healthy home
                      gardens and kitchen herbs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 h-32 w-full rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground uppercase tracking-wide">
                  Image coming soon
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Greenhouse Produce Box</h3>
                    <p className="text-sm text-muted-foreground">
                      A weekly selection of pesticide-free vegetables from our greenhouses, including tomatoes, cucumbers,
                      peppers, and leafy greens.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team CTA */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Our team of food enthusiasts, agricultural experts, and customer service professionals is dedicated to providing you with the best organic shopping experience. We're passionate about organic living and are here to support your journey to better health.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/careers">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
