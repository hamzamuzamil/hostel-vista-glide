
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Star, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in the ${room.name} at Vista Hostel.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
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
    >
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
        <div className="relative pb-[56.25%]">
          <img 
            src={room.image} 
            alt={room.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="font-semibold">
              ${room.price}/night
            </Badge>
          </div>
          <div className="absolute top-2 right-2 flex items-center bg-black/50 text-white px-2 py-1 rounded-md text-xs">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            {room.rating}
          </div>
        </div>
        
        <CardContent className="pt-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg">{room.name}</h3>
            <div className="flex items-center text-muted-foreground">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-sm">{room.capacity}</span>
            </div>
          </div>
          
          {isLoggedIn ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-muted-foreground text-sm mb-3">{room.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {room.amenities.slice(0, 3).map((amenity, index) => (
                  <Badge key={index} variant="outline" className="font-normal">
                    {amenity}
                  </Badge>
                ))}
                {room.amenities.length > 3 && (
                  <Badge variant="outline" className="font-normal">
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
        
        <CardFooter className="pt-0 pb-4 flex justify-between">
          <Button 
            variant="default" 
            size="sm"
            asChild
            className="w-full"
          >
            <Link to={`/rooms/${room.id}`}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default RoomCard;
