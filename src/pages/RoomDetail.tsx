
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Wifi, 
  ShieldCheck, 
  CheckCircle, 
  X, 
  ArrowLeft, 
  MessageSquare
} from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";
import { Alert, AlertDescription } from "@/components/ui/alert";

const roomsData = [
  {
    id: 1,
    name: "Deluxe Twin Room",
    description: "A spacious room with two comfortable single beds and a private bathroom. Ideal for friends traveling together or solo travelers who prefer extra space. Enjoy the convenience of your own private bathroom, air conditioning, and complimentary breakfast.",
    price: 35,
    rating: 4.8,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Wi-Fi", "Private Bathroom", "Air Conditioning", "Breakfast", "Towels", "Linens"],
    features: ["Daily Housekeeping", "Workspace", "Reading Light", "24/7 Reception"],
    details: {
      size: "18 sqm",
      bedType: "Two Single Beds",
      maxOccupancy: 2,
      checkIn: "2:00 PM",
      checkOut: "11:00 AM"
    },
    location: {
      address: "123 Hostel Street, City Center",
      lat: 40.7128,
      lng: -74.006
    },
    reviews: [
      { user: "Alex M.", rating: 5, text: "Exceptional room with great service. The beds were very comfortable and the location is perfect." },
      { user: "Sarah K.", rating: 4, text: "Clean and spacious room. The air conditioning worked perfectly during the hot summer days." }
    ]
  },
  {
    id: 2,
    name: "Budget Single Room",
    description: "Cozy single room perfect for solo travelers on a budget. This compact room offers everything you need for a comfortable stay without unnecessary extras. Includes access to shared bathroom facilities.",
    price: 25,
    rating: 4.5,
    capacity: 1,
    image: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517512006864-7edc3b933137?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    amenities: ["Wi-Fi", "Shared Bathroom", "Locker", "Towels", "Linens"],
    features: ["Reading Light", "24/7 Reception", "Luggage Storage"],
    details: {
      size: "8 sqm",
      bedType: "Single Bed",
      maxOccupancy: 1,
      checkIn: "2:00 PM",
      checkOut: "11:00 AM"
    },
    location: {
      address: "123 Hostel Street, City Center",
      lat: 40.7128,
      lng: -74.006
    },
    reviews: [
      { user: "Mike R.", rating: 4, text: "Great value for the price. The room was small but had everything I needed." },
      { user: "Lena T.", rating: 5, text: "Perfect for solo travelers! Clean room and friendly staff." }
    ]
  },
  // Add similar detailed information for other rooms
];

const RoomDetail = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const room = roomsData.find(r => r.id === parseInt(id || "0"));
  
  useEffect(() => {
    if (!room) {
      navigate('/rooms', { replace: true });
    }
  }, [room, navigate]);
  
  if (!room) return null;
  
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in booking the ${room.name} at Vista Hostel.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/rooms">Rooms</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{room.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        {/* Back button for mobile */}
        <div className="md:hidden mb-4">
          <Button variant="outline" size="sm" onClick={() => navigate(-1)} className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Room Images and Info Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Room Images Gallery */}
            <div className="space-y-2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img 
                  src={room.images[selectedImage]} 
                  alt={`${room.name} - View ${selectedImage + 1}`} 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2">
                {room.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`cursor-pointer rounded-md overflow-hidden flex-shrink-0 transition-all ${
                      selectedImage === index ? "ring-2 ring-primary" : "opacity-70"
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${room.name} thumbnail ${index + 1}`} 
                      className="w-20 h-14 object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Room Details Tabs */}
            <Tabs defaultValue="details">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Room Description</h3>
                  <p className="text-muted-foreground">{room.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-2">Room Size</h4>
                    <p>{room.details.size}</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-2">Bed Type</h4>
                    <p>{room.details.bedType}</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-2">Max Occupancy</h4>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{room.details.maxOccupancy} Guests</span>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-2">Check-in/out</h4>
                    <p>In: {room.details.checkIn} / Out: {room.details.checkOut}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-muted-foreground">{room.location.address}</p>
                  </div>
                  
                  {/* Map placeholder - in a real app, integrate with Google Maps */}
                  <div className="mt-4 bg-muted rounded-lg aspect-video flex items-center justify-center border">
                    <p className="text-muted-foreground">Map view would be displayed here</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="amenities" className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Amenities & Features</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                    <div>
                      <h4 className="font-medium mb-3">Room Amenities</h4>
                      <ul className="space-y-2">
                        {room.amenities.map((amenity, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Room Features</h4>
                      <ul className="space-y-2">
                        {room.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Hostel Facilities</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <Wifi className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-medium">Free Wi-Fi</h4>
                      <p className="text-sm text-center text-muted-foreground">High-speed internet in all areas</p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-medium">24/7 Security</h4>
                      <p className="text-sm text-center text-muted-foreground">Secure key card access</p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-medium">Daily Cleaning</h4>
                      <p className="text-sm text-center text-muted-foreground">Fresh and clean environment</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-4">
                {isLoggedIn ? (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Guest Reviews</h3>
                        <p className="text-sm text-muted-foreground">Read what others have to say</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {room.reviews.map((review, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{review.user}</span>
                            <div className="flex items-center">
                              {Array(5).fill(0).map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10">
                    <div className="bg-muted p-4 rounded-full mb-4">
                      <Lock className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Reviews are only visible to logged-in users</h3>
                    <p className="text-muted-foreground mb-4 text-center max-w-md">
                      Please log in to view guest reviews and ratings for this room.
                    </p>
                    <Button onClick={() => setIsLoggedIn(true)}>Log In to View Reviews</Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Booking Info Column */}
          <div className="space-y-6">
            <div className="sticky top-20">
              {/* Booking Card */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-primary/5 p-4 border-b">
                  <h2 className="text-xl font-semibold">{room.name}</h2>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      {Array(5).fill(0).map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < Math.floor(room.rating) ? "currentColor" : "none"} stroke="currentColor" className={i < Math.floor(room.rating) ? "text-yellow-400" : "text-gray-300"}>
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm">{room.rating} / 5</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold">${room.price}</span>
                    <span className="text-muted-foreground">per night</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="border rounded p-3">
                        <div className="text-xs text-muted-foreground">Check-in</div>
                        <div className="font-medium">Select Date</div>
                      </div>
                      <div className="border rounded p-3">
                        <div className="text-xs text-muted-foreground">Check-out</div>
                        <div className="font-medium">Select Date</div>
                      </div>
                    </div>
                    
                    <div className="border rounded p-3">
                      <div className="text-xs text-muted-foreground">Guests</div>
                      <div className="font-medium flex items-center justify-between">
                        <span>1 Guest</span>
                        <Users className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <Button className="w-full">Book Now</Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleWhatsAppClick}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-green-500">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      Contact via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Policies */}
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Hostel Policies</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Free cancellation up to 24 hours before check-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Valid ID required at check-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-0.5" />
                    <span className="text-sm">No smoking allowed in rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-500 mt-0.5" />
                    <span className="text-sm">No pets allowed</span>
                  </li>
                </ul>
              </div>
              
              {/* Need Help Section */}
              <Alert className="mt-6 bg-muted">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                  <AlertDescription className="font-medium">Need help with your booking?</AlertDescription>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground mb-3">
                    Our team is available 24/7 to assist you with any questions or concerns.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Email Us
                    </Button>
                    <Button variant="outline" size="sm">
                      Call Us
                    </Button>
                  </div>
                </div>
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;

// Helper components
const Lock = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);
