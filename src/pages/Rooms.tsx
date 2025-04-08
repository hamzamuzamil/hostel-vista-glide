
import { useState } from "react";
import Navbar from "@/components/Navbar";
import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, Users, Filter } from "lucide-react";

const roomsData = [
  {
    id: 1,
    name: "Deluxe Twin Room",
    description: "A spacious room with two comfortable single beds and a private bathroom.",
    price: 35,
    rating: 4.8,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: ["Wi-Fi", "Private Bathroom", "Air Conditioning", "Breakfast"]
  },
  {
    id: 2,
    name: "Budget Single Room",
    description: "Cozy single room perfect for solo travelers on a budget.",
    price: 25,
    rating: 4.5,
    capacity: 1,
    image: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: ["Wi-Fi", "Shared Bathroom", "Locker"]
  },
  {
    id: 3,
    name: "Premium Quad Room",
    description: "Large room with four beds, perfect for groups or families.",
    price: 65,
    rating: 4.9,
    capacity: 4,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: ["Wi-Fi", "Private Bathroom", "Air Conditioning", "TV", "Mini Fridge"]
  },
  {
    id: 4,
    name: "Social Dormitory",
    description: "8-bed mixed dormitory with a vibrant social atmosphere.",
    price: 18,
    rating: 4.6,
    capacity: 8,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: ["Wi-Fi", "Shared Bathroom", "Locker", "Common Area"]
  },
  {
    id: 5,
    name: "Female Dormitory",
    description: "6-bed female-only dormitory with enhanced privacy.",
    price: 22,
    rating: 4.7,
    capacity: 6,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: ["Wi-Fi", "Shared Bathroom", "Locker", "Reading Light"]
  },
  {
    id: 6,
    name: "Private Double Room",
    description: "Comfortable double room with a queen-sized bed and city view.",
    price: 45,
    rating: 4.9,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: ["Wi-Fi", "Private Bathroom", "Air Conditioning", "TV", "City View"]
  },
  {
    id: 7,
    name: "Economy Triple Room",
    description: "Budget-friendly room with three single beds.",
    price: 50,
    rating: 4.4,
    capacity: 3,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: ["Wi-Fi", "Shared Bathroom", "Desk"]
  },
  {
    id: 8,
    name: "Luxury Suite",
    description: "Our most luxurious offering with a separate living area and premium amenities.",
    price: 85,
    rating: 5.0,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    amenities: ["Wi-Fi", "Private Bathroom", "Air Conditioning", "TV", "Mini Fridge", "Workspace", "Balcony"]
  }
];

interface FilterOptions {
  search: string;
  priceRange: [number, number];
  capacity: number | null;
  amenities: {
    wifi: boolean;
    privateBathroom: boolean;
    airConditioning: boolean;
    breakfast: boolean;
  };
}

const Rooms = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    search: "",
    priceRange: [0, 100],
    capacity: null,
    amenities: {
      wifi: false,
      privateBathroom: false,
      airConditioning: false,
      breakfast: false
    }
  });
  
  const filteredRooms = roomsData.filter(room => {
    // Filter by search term
    if (
      filterOptions.search &&
      !room.name.toLowerCase().includes(filterOptions.search.toLowerCase()) &&
      !room.description.toLowerCase().includes(filterOptions.search.toLowerCase())
    ) {
      return false;
    }
    
    // Filter by price
    if (room.price < filterOptions.priceRange[0] || room.price > filterOptions.priceRange[1]) {
      return false;
    }
    
    // Filter by capacity
    if (filterOptions.capacity && room.capacity < filterOptions.capacity) {
      return false;
    }
    
    // Filter by amenities
    if (filterOptions.amenities.wifi && !room.amenities.includes("Wi-Fi")) {
      return false;
    }
    if (filterOptions.amenities.privateBathroom && !room.amenities.includes("Private Bathroom")) {
      return false;
    }
    if (filterOptions.amenities.airConditioning && !room.amenities.includes("Air Conditioning")) {
      return false;
    }
    if (filterOptions.amenities.breakfast && !room.amenities.includes("Breakfast")) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      {/* Header */}
      <div className="bg-primary/5 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Rooms & Accommodations</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover our wide variety of comfortable and affordable rooms, designed to cater to all types of travelers.
          </p>
        </div>
      </div>
      
      {/* Search and Filter */}
      <div className="py-8 px-4 md:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search rooms..." 
                className="pl-10"
                value={filterOptions.search}
                onChange={(e) => setFilterOptions({...filterOptions, search: e.target.value})}
              />
            </div>
            <Button 
              variant="outline" 
              className="flex gap-2 md:w-auto"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          {isFilterOpen && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-muted rounded-lg">
              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <div className="px-2">
                  <Slider 
                    defaultValue={[0, 100]} 
                    min={0} 
                    max={100} 
                    step={1}
                    value={filterOptions.priceRange}
                    onValueChange={(value) => setFilterOptions({...filterOptions, priceRange: value as [number, number]})}
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>${filterOptions.priceRange[0]}</span>
                    <span>${filterOptions.priceRange[1]}+</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Capacity</h3>
                <div className="flex flex-wrap gap-2">
                  {[null, 1, 2, 4, 6, 8].map((cap, idx) => (
                    <Button 
                      key={idx}
                      variant={filterOptions.capacity === cap ? "default" : "outline"}
                      size="sm"
                      className="flex gap-1"
                      onClick={() => setFilterOptions({...filterOptions, capacity: cap})}
                    >
                      {cap === null ? (
                        "Any"
                      ) : (
                        <>
                          <Users className="h-3 w-3" />
                          {cap}+
                        </>
                      )}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="wifi" 
                      checked={filterOptions.amenities.wifi}
                      onCheckedChange={(checked) => 
                        setFilterOptions({
                          ...filterOptions, 
                          amenities: {
                            ...filterOptions.amenities,
                            wifi: checked === true
                          }
                        })
                      }
                    />
                    <Label htmlFor="wifi">Wi-Fi</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="private-bathroom" 
                      checked={filterOptions.amenities.privateBathroom}
                      onCheckedChange={(checked) => 
                        setFilterOptions({
                          ...filterOptions, 
                          amenities: {
                            ...filterOptions.amenities,
                            privateBathroom: checked === true
                          }
                        })
                      }
                    />
                    <Label htmlFor="private-bathroom">Private Bathroom</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="air-conditioning" 
                      checked={filterOptions.amenities.airConditioning}
                      onCheckedChange={(checked) => 
                        setFilterOptions({
                          ...filterOptions, 
                          amenities: {
                            ...filterOptions.amenities,
                            airConditioning: checked === true
                          }
                        })
                      }
                    />
                    <Label htmlFor="air-conditioning">Air Conditioning</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="breakfast" 
                      checked={filterOptions.amenities.breakfast}
                      onCheckedChange={(checked) => 
                        setFilterOptions({
                          ...filterOptions, 
                          amenities: {
                            ...filterOptions.amenities,
                            breakfast: checked === true
                          }
                        })
                      }
                    />
                    <Label htmlFor="breakfast">Breakfast</Label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Room Listing */}
      <div className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-muted-foreground">
              {filteredRooms.length} {filteredRooms.length === 1 ? 'room' : 'rooms'} found
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRooms.map(room => (
              <RoomCard key={room.id} room={room} isLoggedIn={isLoggedIn} />
            ))}
          </div>
          
          {filteredRooms.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No rooms match your filters</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => setFilterOptions({
                  search: "",
                  priceRange: [0, 100],
                  capacity: null,
                  amenities: {
                    wifi: false,
                    privateBathroom: false,
                    airConditioning: false,
                    breakfast: false
                  }
                })}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
