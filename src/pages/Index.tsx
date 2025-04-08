
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RoomCard, { Room } from "@/components/RoomCard";
import { ArrowRight, MapPin, Utensils, Shield, WifiIcon } from "lucide-react";

// Sample featured rooms for the homepage
const featuredRooms: Room[] = [
  {
    id: "1",
    name: "Deluxe Single Room",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800&h=600",
    price: 45,
    location: "Downtown",
    description: "Cozy single room with a comfortable bed, desk, and private bathroom. Perfect for solo travelers.",
    amenities: ["Private Bathroom", "Free WiFi", "Desk", "AC"],
    mapUrl: "https://maps.google.com/?q=Downtown+Hostel"
  },
  {
    id: "3",
    name: "Premium Queen Room",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800&h=600",
    price: 65,
    location: "Riverside",
    description: "Upgraded room featuring a queen-sized bed, private bathroom, and beautiful views of the river.",
    amenities: ["Private Bathroom", "Free WiFi", "Queen Bed", "AC", "River View"],
    mapUrl: "https://maps.google.com/?q=Riverside+Hostel"
  },
  {
    id: "6",
    name: "Luxury Private Room",
    image: "https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&q=80&w=800&h=600",
    price: 70,
    location: "Historic District",
    description: "Premium private room with a double bed, ensuite bathroom, and high-end amenities.",
    amenities: ["Private Bathroom", "Free WiFi", "Double Bed", "AC", "Smart TV", "Coffee Machine"],
    mapUrl: "https://maps.google.com/?q=Historic+District+Hostel"
  }
];

// Features list
const features = [
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Prime Locations",
    description: "All our hostels are centrally located near public transport, tourist attractions, and local hotspots."
  },
  {
    icon: <WifiIcon className="h-8 w-8" />,
    title: "Modern Amenities",
    description: "Enjoy high-speed WiFi, comfortable beds, air conditioning, and well-maintained common areas."
  },
  {
    icon: <Utensils className="h-8 w-8" />,
    title: "Quality Dining",
    description: "Our mess provides nutritious, delicious meals with flexible plans to suit all dietary preferences."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Environment",
    description: "24/7 security, secure access, personal lockers, and trained staff ensure your safety."
  }
];

// Testimonials
const testimonials = [
  {
    id: "1",
    name: "Sarah J.",
    text: "The rooms are clean and comfortable, and the staff is incredibly helpful. I enjoyed my stay!",
    location: "United States"
  },
  {
    id: "2",
    name: "Marcus T.",
    text: "Great location, amazing amenities, and the mess food is exceptional. Highly recommend!",
    location: "Germany"
  },
  {
    id: "3",
    name: "Priya M.",
    text: "I felt right at home here. The community atmosphere is wonderful and I made so many friends.",
    location: "India"
  }
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-screen bg-gradient-to-r from-primary/90 to-secondary/90 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596276020587-8044fe049813?auto=format&fit=crop&q=80" 
            alt="Hostel background" 
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Hostel Experience
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comfortable accommodations, community spaces, and all the amenities you need for a memorable stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/hostels">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Browse Rooms
                </Button>
              </Link>
              <Link to="/mess-info">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Mess Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured Rooms Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Rooms</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our most popular accommodations with premium amenities and excellent locations.
            </p>
          </div>
          <Link to="/hostels" className="mt-4 md:mt-0 group flex items-center">
            <span className="text-primary font-medium">View all rooms</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 text-primary" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRooms.map((room, index) => (
            <div 
              key={room.id} 
              className={`animate-fade-in [animation-delay:${index * 150}ms]`}
            >
              <RoomCard room={room} />
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose Our Hostels</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide more than just a place to sleep. Experience the perfect blend of comfort, community, and convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 shadow-sm animate-fade-in [animation-delay:100ms] hover:shadow-md transition-shadow"
              >
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">What Our Guests Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from travelers who have experienced our hospitality firsthand.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col justify-center items-center text-center p-6 transition-all duration-500 ease-in-out transform ${
                  index === currentTestimonial 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-card p-8 rounded-xl shadow-md w-full">
                  <p className="text-lg italic mb-4">{testimonial.text}</p>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-all ${
                  index === currentTestimonial ? "bg-primary w-4" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our rooms and find your perfect accommodation today.
          </p>
          <Link to="/hostels">
            <Button size="lg" variant="secondary" className="text-primary">
              Browse Available Rooms
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-primary">VistaStay</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your home away from home
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link to="/" className="text-sm hover:text-primary">Home</Link>
              <Link to="/hostels" className="text-sm hover:text-primary">Hostels</Link>
              <Link to="/mess-info" className="text-sm hover:text-primary">Mess Info</Link>
              <Link to="/login" className="text-sm hover:text-primary">Login</Link>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} VistaStay Hostels. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
