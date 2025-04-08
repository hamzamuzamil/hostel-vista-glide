
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Star, Users, Wifi, Coffee, Check, ArrowRight, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RoomCard from "@/components/RoomCard";

const roomsData = [
  {
    id: 1,
    name: "Deluxe Twin Room",
    description: "A spacious room with two comfortable single beds and a private bathroom.",
    price: 35,
    rating: 4.8,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: ["Wi-Fi", "Private Bathroom", "Air Conditioning", "Breakfast"]
  },
  {
    id: 2,
    name: "Budget Single Room",
    description: "Cozy single room perfect for solo travelers on a budget.",
    price: 25,
    rating: 4.5,
    capacity: 1,
    image: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: ["Wi-Fi", "Shared Bathroom", "Locker"]
  },
  {
    id: 3,
    name: "Premium Quad Room",
    description: "Large room with four beds, perfect for groups or families.",
    price: 65,
    rating: 4.9,
    capacity: 4,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: ["Wi-Fi", "Private Bathroom", "Air Conditioning", "TV", "Mini Fridge"]
  },
  {
    id: 4,
    name: "Social Dormitory",
    description: "8-bed mixed dormitory with a vibrant social atmosphere.",
    price: 18,
    rating: 4.6,
    capacity: 8,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: ["Wi-Fi", "Shared Bathroom", "Locker", "Common Area"]
  }
];

const featuresData = [
  {
    title: "Prime Location",
    description: "Located in the heart of the city, close to popular attractions",
    icon: MapPin
  },
  {
    title: "Free Wi-Fi",
    description: "High-speed internet access throughout the property",
    icon: Wifi
  },
  {
    title: "Breakfast Included",
    description: "Complimentary breakfast with your stay",
    icon: Coffee
  }
];

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <HeroSection />
      
      {/* Rooms Section */}
      <section id="rooms" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-2">Our Accommodations</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Rooms</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from a variety of room options designed to provide comfort and convenience for every traveler.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} isLoggedIn={isLoggedIn} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="group">
            <Link to="/rooms">
              View All Rooms
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-2">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hostel Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a range of amenities and services to make your stay comfortable and memorable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Ready to Book?</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey With Us Today</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of comfort, convenience, and community. Book your stay now or contact us for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/rooms">Book Now</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="mr-2 h-4 w-4" /> Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-muted py-8 px-4 md:px-8 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Vista Hostel</h3>
            <p className="text-muted-foreground">
              Providing comfortable and affordable accommodation for travelers from around the world.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/rooms" className="text-muted-foreground hover:text-primary transition-colors">Rooms</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="text-muted-foreground not-italic">
              <p>123 Hostel Street</p>
              <p>City Center, 10001</p>
              <p className="mt-2">info@vistahostel.com</p>
              <p>+1 234 567 8901</p>
            </address>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© 2025 Vista Hostel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
