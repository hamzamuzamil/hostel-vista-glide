
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Solo Traveler",
    content: "Vista Hostel made my solo trip incredible! The social atmosphere was perfect for meeting fellow travelers, and the staff went above and beyond to make me feel welcome.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Digital Nomad",
    content: "As someone who works remotely, I needed a place with reliable Wi-Fi and comfortable workspace. Vista Hostel exceeded my expectations with their cozy common areas and fast internet.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Budget Traveler",
    content: "Great value for money! Clean facilities, friendly staff, and perfect location. I'll definitely be staying at Vista Hostel again on my next visit.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read what travelers from around the world have to say about their stay with us.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative"
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/80">
                <CardContent className="p-8 md:p-12">
                  <div className="absolute -top-6 left-8 bg-primary rounded-full p-3 text-primary-foreground">
                    <Quote className="h-6 w-6" />
                  </div>
                  
                  <div className="pt-6">
                    <p className="text-lg md:text-xl italic mb-8">{testimonials[currentIndex].content}</p>
                    
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14 border-2 border-primary">
                        <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                        <AvatarFallback>{testimonials[currentIndex].name[0]}</AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                        <div className="flex items-center mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg 
                              key={i} 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"} 
                              stroke="currentColor"
                              strokeWidth="2"
                              className={i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-muted"}
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev}
              className="rounded-full hover:scale-110 transition-transform"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "w-8 bg-primary" 
                      : "w-2 bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next}
              className="rounded-full hover:scale-110 transition-transform"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
