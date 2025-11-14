import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Calendar, User } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const productName = searchParams.get("product");
    if (productName) {
      setFormData((prev) => ({
        ...prev,
        subject: prev.subject || `Product inquiry: ${productName}`,
        message:
          prev.message || `Hi, I would like to know more about ${productName}. Please share details and pricing.`,
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#f7faf7] pb-12">
      <div className="bg-gradient-to-b from-primary/5 to-[#f7faf7] py-16 sm:py-20 border-b">
        <div className="container px-4 sm:px-6 text-center">
          <Badge variant="outline" className="mb-4 bg-background/80 backdrop-blur-sm">
            <MessageCircle className="h-4 w-4 mr-2" /> We're here to help
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-3xl mx-auto">
            Let's Connect
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products, orders, or just want to say hello? Our team is here to help you with anything you need.
          </p>
        </div>
      </div>

      <div className="container px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-16">
          <Card className="h-full hover:shadow-md transition-all duration-200">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri 9am-6pm EST</p>
                  <Button variant="link" size="sm" className="pl-0 mt-2 h-auto p-0">
                    Schedule a callback →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full hover:shadow-md transition-all duration-200">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground">hello@earthy-eats.com</p>
                  <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
                  <Button variant="link" size="sm" className="pl-0 mt-2 h-auto p-0">
                    Send us an email →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full hover:shadow-md transition-all duration-200">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Live Chat</h3>
                  <p className="text-muted-foreground">Chat with our team</p>
                  <p className="text-sm text-muted-foreground mt-1">Available 24/7</p>
                  <Button variant="link" size="sm" className="pl-0 mt-2 h-auto p-0">
                    Start chatting →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Send us a message</h2>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Your Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share the details of your request..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3">
                    <p className="text-sm text-muted-foreground">
                      <span className="text-destructive">*</span> Required fields
                    </p>
                    <Button type="submit" size="lg" className="gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Visit Us</h3>
              <Card className="h-full">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Our Office</h4>
                      <p className="text-muted-foreground mt-1">
                        123 Organic Way<br />
                        Green Valley, CA 90210<br />
                        United States
                      </p>
                      <Button variant="link" size="sm" className="pl-0 mt-2 h-auto p-0">
                        Get directions →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Business Hours</h3>
              <Card className="h-full">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Need help right away?</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Chat with us
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule a call
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Mail className="h-4 w-4" />
                  support@earthy-eats.com
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Can't find what you're looking for? Check out our help center.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "What are your delivery hours?",
                answer: "We deliver Monday through Saturday from 8:00 AM to 8:00 PM. You can select your preferred delivery time at checkout."
              },
              {
                question: "Do you offer international shipping?",
                answer: "Currently, we only ship within the United States. We're working on expanding our delivery areas soon."
              },
              {
                question: "How can I track my order?",
                answer: "Once your order ships, you'll receive a tracking number via email that you can use to track your package in real-time."
              },
              {
                question: "What is your return policy?",
                answer: "We offer a 30-day return policy for unopened and unused products. Please contact our support team to initiate a return."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-medium text-foreground">{faq.question}</h4>
                  <p className="text-muted-foreground mt-2">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="link" className="text-primary">
              View all FAQs →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
