
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      
      toast({
        title: "Successfully subscribed!",
        description: "You'll now receive our latest promotions and updates.",
        variant: "default",
      });
      
      // Reset success state after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 z-0"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden border">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Special Offers</h2>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter and be the first to know about exclusive deals and promotions.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-4 pr-12 py-6 rounded-lg bg-background"
                      required
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full transition-all"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Subscribed!
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Subscribe
                      </span>
                    )}
                  </Button>
                </form>
                
                <p className="text-xs text-muted-foreground mt-4">
                  By subscribing, you agree to receive marketing emails from Vista Hostel. 
                  You can unsubscribe at any time.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 bg-gradient-to-br from-primary/90 to-primary/70 p-8 md:p-12 text-primary-foreground hidden md:block"
            >
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4">Benefits of Subscribing</h3>
                <ul className="space-y-3">
                  {[
                    "Exclusive deals not available anywhere else",
                    "Early access to seasonal promotions",
                    "Travel tips and local insights",
                    "Updates on new facilities and services"
                  ].map((benefit, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
