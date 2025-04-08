
import { motion } from "framer-motion";
import { 
  Wifi, Coffee, Utensils, UtensilsCrossed, 
  Music, Lock, Shower, BookOpen, Tv
} from "lucide-react";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Facility {
  name: string;
  icon: React.ElementType;
  description: string;
}

const facilities: Facility[] = [
  {
    name: "Free Wi-Fi",
    icon: Wifi,
    description: "High-speed internet throughout the property for work or streaming"
  },
  {
    name: "Coffee Bar",
    icon: Coffee,
    description: "Complimentary coffee and tea available 24/7 in our lounge area"
  },
  {
    name: "Community Kitchen",
    icon: Utensils,
    description: "Fully equipped kitchen for preparing your own meals and socializing"
  },
  {
    name: "Breakfast Service",
    icon: UtensilsCrossed,
    description: "Optional daily breakfast featuring local and international options"
  },
  {
    name: "Entertainment Lounge",
    icon: Music,
    description: "Lounge area with music, games, and regular social events"
  },
  {
    name: "Secure Storage",
    icon: Lock,
    description: "Individual lockers available for all guests to secure belongings"
  },
  {
    name: "Modern Bathrooms",
    icon: Shower,
    description: "Clean, modern bathroom facilities with hot water 24/7"
  },
  {
    name: "Book Exchange",
    icon: BookOpen,
    description: "Leave a book, take a book from our community library"
  },
  {
    name: "Movie Nights",
    icon: Tv,
    description: "Regular movie nights in our entertainment area"
  }
];

const FacilitiesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and enjoyable stay.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {facilities.map((facility, index) => (
            <HoverCard key={facility.name}>
              <HoverCardTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "hsl(var(--primary) / 0.05)" 
                  }}
                  className="flex flex-col items-center justify-center p-4 md:p-6 bg-card rounded-xl border cursor-pointer hover:shadow-md transition-all"
                >
                  <div className="p-3 rounded-full bg-primary/10 mb-3">
                    <facility.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-center text-sm md:text-base">{facility.name}</h3>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="flex justify-between space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-primary/10">
                    <facility.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{facility.name}</h4>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
