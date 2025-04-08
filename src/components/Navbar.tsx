
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, User } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose 
} from "@/components/ui/sheet";
import LoginModal from "./LoginModal";

interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Navbar = ({ isLoggedIn, setIsLoggedIn }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle theme toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const navbarClass = scrolled
    ? "bg-background/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Vista Hostel</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/rooms"
                className="text-foreground hover:text-primary transition-colors"
              >
                Rooms
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>My Account</span>
                  </Button>
                  <Button variant="outline" onClick={handleLogout}>
                    Log Out
                  </Button>
                </div>
              ) : (
                <Button onClick={() => setLoginModalOpen(true)}>Login / Signup</Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center border-b py-4">
                    <span className="font-bold text-xl">Vista Hostel</span>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col space-y-4 mt-6">
                    <SheetClose asChild>
                      <Link
                        to="/"
                        className="text-foreground hover:text-primary transition-colors py-2"
                      >
                        Home
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/rooms"
                        className="text-foreground hover:text-primary transition-colors py-2"
                      >
                        Rooms
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/about"
                        className="text-foreground hover:text-primary transition-colors py-2"
                      >
                        About
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        to="/contact"
                        className="text-foreground hover:text-primary transition-colors py-2"
                      >
                        Contact
                      </Link>
                    </SheetClose>
                  </nav>
                  <div className="mt-auto border-t py-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Theme</span>
                      <Button variant="ghost" size="icon" onClick={toggleTheme}>
                        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                      </Button>
                    </div>
                    {isLoggedIn ? (
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <User className="mr-2 h-5 w-5" />
                          My Account
                        </Button>
                        <Button variant="default" className="w-full" onClick={handleLogout}>
                          Log Out
                        </Button>
                      </div>
                    ) : (
                      <SheetClose asChild>
                        <Button 
                          className="w-full" 
                          onClick={() => setLoginModalOpen(true)}
                        >
                          Login / Signup
                        </Button>
                      </SheetClose>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <div className="h-16" />  {/* Spacer for fixed header */}
      
      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Navbar;
