
import { useState, useMemo } from 'react';
import RoomCard, { Room } from '@/components/RoomCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

// Sample hostel room data
const allRooms: Room[] = [
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
    id: "2",
    name: "Twin Bunk Room",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800&h=600",
    price: 30,
    location: "City Center",
    description: "Shared room with two bunk beds, perfect for travelers looking to meet new people while maintaining some privacy.",
    amenities: ["Shared Bathroom", "Free WiFi", "Personal Locker", "AC"],
    mapUrl: "https://maps.google.com/?q=City+Center+Hostel"
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
    id: "4",
    name: "Economy Shared Dorm",
    image: "https://images.unsplash.com/photo-1596276020587-8044fe049813?auto=format&fit=crop&q=80&w=800&h=600",
    price: 20,
    location: "University District",
    description: "Budget-friendly shared dorm with 6 beds, perfect for students and backpackers.",
    amenities: ["Shared Bathroom", "Free WiFi", "Personal Locker"],
    mapUrl: "https://maps.google.com/?q=University+District+Hostel"
  },
  {
    id: "5",
    name: "Family Suite",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800&h=600",
    price: 85,
    location: "Seaside",
    description: "Spacious family room with a queen bed and two single beds, perfect for families or small groups.",
    amenities: ["Private Bathroom", "Free WiFi", "TV", "AC", "Sea View", "Mini Fridge"],
    mapUrl: "https://maps.google.com/?q=Seaside+Hostel"
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
  },
];

const Hostels = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredRooms = useMemo(() => {
    if (!searchQuery) return allRooms;
    
    const query = searchQuery.toLowerCase();
    return allRooms.filter(
      room => 
        room.name.toLowerCase().includes(query) || 
        room.location.toLowerCase().includes(query) ||
        room.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="container py-20 max-w-7xl mx-auto">
      <div className="pt-10">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Our Hostel Rooms
        </h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Browse our selection of comfortable and affordable rooms. We have options for every budget and preference.
        </p>
        
        {/* Search Input */}
        <div className="relative mb-8 max-w-md">
          <Input
            type="text"
            placeholder="Search rooms by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchQuery("")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            >
              &times;
            </Button>
          )}
        </div>
        
        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room, index) => (
            <div 
              key={room.id} 
              className={`animate-fade-in [animation-delay:${index * 100}ms]`}
            >
              <RoomCard room={room} />
            </div>
          ))}
        </div>
        
        {filteredRooms.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No rooms found</h3>
            <p className="text-muted-foreground mb-4">
              We couldn't find any rooms matching your search criteria.
            </p>
            <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hostels;
