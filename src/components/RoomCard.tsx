
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink, MessageSquare } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface Room {
  id: string;
  name: string;
  image: string;
  price: number;
  location: string;
  description: string;
  amenities: string[];
  mapUrl: string;
}

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  const { isAuthenticated } = useAuth();
  const [isHovering, setIsHovering] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setShowLoginDialog(true);
      return;
    }

    const message = `Hi, I'm interested in room ${room.name}. Can I get more information?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, '_blank');
  };

  const handleMapClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setShowLoginDialog(true);
      return;
    }
  };

  return (
    <>
      <div 
        className="hostel-card bg-card group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Room Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={room.image} 
            alt={room.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Basic Info (Always Visible) */}
        <div className="p-4">
          <h3 className="text-lg font-semibold">{room.name}</h3>
          <div className="flex items-center mt-1 text-sm text-muted-foreground">
            <MapPin size={14} className="mr-1" />
            <span>{room.location}</span>
          </div>
          <div className="mt-1 font-medium text-primary">
            ${room.price}/night
          </div>
        </div>
        
        {/* Revealed Content on Hover */}
        <div 
          className={`card-reveal transform transition-all duration-300 ${
            isHovering ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {isAuthenticated ? (
            <div>
              <p className="text-sm mb-3 line-clamp-2">
                {room.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {room.amenities.slice(0, 3).map((amenity) => (
                  <span 
                    key={amenity} 
                    className="text-xs bg-white/20 px-2 py-1 rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
                {room.amenities.length > 3 && (
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    +{room.amenities.length - 3}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <a 
                  href={room.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="w-full"
                    onClick={handleMapClick}
                  >
                    <MapPin size={14} className="mr-1" /> Map
                  </Button>
                </a>
                <Button 
                  onClick={handleWhatsAppClick}
                  size="sm"
                  className="flex-1 bg-[#25D366] hover:bg-[#128C7E]"
                >
                  <MessageSquare size={14} className="mr-1" /> WhatsApp
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm mb-3">
                Login to see full details and contact the hostel
              </p>
              <Link to="/login">
                <Button size="sm" className="w-full">
                  Login to View
                </Button>
              </Link>
            </div>
          )}
        </div>
        
        {/* Blur Overlay for Non-Auth Users when hovering */}
        {isHovering && !isAuthenticated && (
          <div className="blur-overlay">
            <div className="text-center p-6 transform animate-scale-in">
              <h3 className="text-lg font-bold mb-2">Details Locked</h3>
              <p className="text-sm mb-4">Sign in to view room details and contact the hostel</p>
              <Link to="/login">
                <Button>Login Now</Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Authentication Required</DialogTitle>
            <DialogDescription>
              You need to be logged in to access this feature.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setShowLoginDialog(false)}>Cancel</Button>
            <Link to="/login">
              <Button>Login Now</Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RoomCard;
