
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, CalendarDays, MapPin, Zap } from "lucide-react";

interface Stat {
  id: number;
  label: string;
  value: number;
  icon: React.ElementType;
  suffix?: string;
}

const stats: Stat[] = [
  {
    id: 1,
    label: "Happy Guests",
    value: 5000,
    icon: Users,
    suffix: "+"
  },
  {
    id: 2,
    label: "Years of Service",
    value: 7,
    icon: CalendarDays
  },
  {
    id: 3,
    label: "Locations",
    value: 3,
    icon: MapPin
  },
  {
    id: 4,
    label: "Instant Bookings",
    value: 98,
    icon: Zap,
    suffix: "%"
  }
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-16 px-4 md:px-8 bg-primary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over the years, we've built a reputation for providing exceptional hostel experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-border/50"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              
              <CountUp 
                target={stat.value} 
                suffix={stat.suffix || ""} 
                isInView={isInView} 
              />
              
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter animation component
const CountUp = ({ target, suffix = "", isInView }: { target: number; suffix?: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000; // ms
    const step = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += step;
      setCount(Math.min(Math.floor(start), target));
      
      if (start >= target) {
        clearInterval(timer);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target, isInView]);
  
  return <h3 className="text-4xl font-bold mb-2">{count}{suffix}</h3>;
};

export default StatsSection;
