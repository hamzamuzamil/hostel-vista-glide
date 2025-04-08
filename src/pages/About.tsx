
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, User, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Hostel Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      description: "Alex has been managing hostels for over 10 years and ensures every guest feels welcome."
    },
    {
      name: "Maria Rodriguez",
      role: "Guest Relations",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      description: "Maria is our friendly face at the reception, always ready to help with any questions or concerns."
    },
    {
      name: "David Chen",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      description: "David organizes our social events and activities, creating memorable experiences for our guests."
    }
  ];

  const faqs = [
    {
      question: "What is the check-in and check-out time?",
      answer: "Check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability."
    },
    {
      question: "Do you have storage for luggage?",
      answer: "Yes, we provide complimentary luggage storage for our guests before check-in and after check-out."
    },
    {
      question: "Is breakfast included?",
      answer: "Breakfast is included with all room types except the Budget Single Room and Social Dormitory. It is served from 7:00 AM to 10:00 AM daily."
    },
    {
      question: "Do you have a curfew?",
      answer: "No, we don't have a curfew. Our reception is open 24/7, and guests have access to the hostel at any time using their key card."
    },
    {
      question: "Is Wi-Fi available?",
      answer: "Yes, free high-speed Wi-Fi is available throughout the property in all rooms and common areas."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Badge variant="secondary" className="mb-4">About Us</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Vista Hostel</h1>
              <p className="text-muted-foreground mb-6 max-w-lg">
                Vista Hostel has been providing comfortable and affordable accommodation to travelers from around the world since 2010. 
                Our mission is to create a welcoming environment where travelers can connect, relax, and explore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button>
                  Book Now
                </Button>
                <Button variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Vista Hostel Building"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Story</Badge>
            <h2 className="text-3xl font-bold mb-4">A Decade of Hospitality</h2>
            <p className="text-muted-foreground">
              Vista Hostel began with a simple idea: to create a place where travelers could find comfort, 
              community, and a memorable experience without breaking their budget. Since opening our doors 
              in 2010, we've welcomed thousands of guests from over 100 countries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide affordable, quality accommodation in a friendly environment that fosters 
                cultural exchange and creates lasting memories for travelers.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-muted-foreground">
                We believe in hospitality, authenticity, community, and respect for different cultures. 
                These values guide everything we do at Vista Hostel.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Promise</h3>
              <p className="text-muted-foreground">
                We're committed to providing clean, comfortable accommodations, friendly service, 
                and creating an environment where guests feel at home.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl font-bold mb-4">Meet the People Behind Vista Hostel</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team is dedicated to making your stay comfortable and memorable. With years of 
              experience in hospitality, we're here to help with anything you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden border hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to the most common questions about our hostel and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 text-center">
              <p className="mb-4 text-muted-foreground">
                Still have questions? Feel free to contact us.
              </p>
              <Button>Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Contact Us</Badge>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're always here to help with any questions or concerns you may have about our hostel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-card rounded-lg border text-center">
              <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">123 Hostel Street, City Center, 10001</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border text-center">
              <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 234 567 8901</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border text-center">
              <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@vistahostel.com</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border text-center">
              <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Reception Hours</h3>
              <p className="text-muted-foreground">Open 24/7</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg">
              Book Now
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer - We'll use the same footer as on other pages */}
      <footer className="bg-muted py-8 px-4 md:px-8 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Footer content would go here - same as on homepage */}
        </div>
      </footer>
    </div>
  );
};

export default About;
