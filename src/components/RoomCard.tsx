
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Star, Lock, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  capacity: number;
  image: string;
  amenities: string[];
}

interface RoomCardProps {
  room: Room;
  isLoggedIn: boolean;
}

const RoomCard = ({ room, isLoggedIn }: RoomCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const message = `Hi, I'm interested in the ${room.name} at Vista Hostel.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Opening WhatsApp",
      description: "Connecting you with our team for inquiries.",
    });
  };

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border border-border/50">
        <div className="relative pb-[56.25%] overflow-hidden group">
          <motion.img 
            src={room.image} 
            alt={room.name} 
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="font-semibold">
              ${room.price}/night
            </Badge>
          </div>
          <div className="absolute top-2 right-2 flex items-center bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            {room.rating}
          </div>
          
          <motion.div 
            className="absolute bottom-2 right-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8
            }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              size="sm" 
              variant="secondary"
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
          </motion.div>
        </div>
        
        <CardContent className="pt-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{room.name}</h3>
            <div className="flex items-center text-muted-foreground">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-sm">{room.capacity}</span>
            </div>
          </div>
          
          {isLoggedIn ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0.6,
                height: "auto"
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{room.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {room.amenities.slice(0, 3).map((amenity, index) => (
                  <Badge key={index} variant="outline" className="font-normal text-xs">
                    {amenity}
                  </Badge>
                ))}
                {room.amenities.length > 3 && (
                  <Badge variant="outline" className="font-normal text-xs">
                    +{room.amenities.length - 3} more
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Map available</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center py-4 text-muted-foreground"
            >
              <Lock className="w-4 h-4 mr-2" />
              <span>Login to view details</span>
            </motion.div>
          )}
        </CardContent>
        
        <CardFooter className="pt-0 pb-4">
          <Button 
            variant="default" 
            size="sm"
            asChild
            className="w-full group"
          >
            <Link to={`/rooms/${room.id}`}>
              View Details
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default RoomCard;
