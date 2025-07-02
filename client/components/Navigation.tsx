import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Store Info", href: "/store-info" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+16072387307";
  };

  return (
    <nav
      className={cn(
        "fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out w-[95%] sm:w-auto max-w-6xl",
        isScrolled
          ? "backdrop-blur-md bg-white/80 shadow-xl"
          : "bg-white/70 backdrop-blur-sm shadow-lg",
      )}
      style={{
        borderRadius: "1.5rem",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="px-3 sm:px-6 py-2 sm:py-3">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Fc93154d951494f618adbb017db30f7ce?format=webp&width=800"
              alt="Banyan Grocers Logo"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="hidden xl:block bg-gradient-to-r from-fresh-600 to-fresh-700 bg-clip-text text-transparent">
              Banyan Grocers
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4 xl:space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:text-primary relative whitespace-nowrap",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 xl:space-x-3">
            <Button
              onClick={handleCall}
              variant="outline"
              size="sm"
              className="bg-white/50 hover:bg-secondary/20 border-secondary/30 text-secondary hover:text-secondary-foreground transition-all duration-200 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 mr-1 xl:mr-2" />
              <span className="hidden xl:inline">Call Now</span>
              <span className="xl:hidden">Call</span>
            </Button>
            <Link to="/shopping">
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-fresh-600 hover:from-fresh-600 hover:to-primary text-white shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">Shop</span>
                <span className="xl:hidden">Shop</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile and Tablet Navigation */}
        <div className="flex lg:hidden items-center justify-between w-full min-w-0">
          {/* Mobile Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-base sm:text-lg font-bold text-primary min-w-0 flex-shrink"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Fc93154d951494f618adbb017db30f7ce?format=webp&width=800"
              alt="Banyan Grocers Logo"
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover flex-shrink-0"
            />
            <span className="bg-gradient-to-r from-fresh-600 to-fresh-700 bg-clip-text text-transparent truncate">
              Banyan
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 sm:p-2 flex-shrink-0 ml-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 p-4">
          <div className="flex flex-col space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-medium py-2 px-3 rounded-lg transition-all duration-200",
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-3 border-t border-border/50">
              <Button
                onClick={() => {
                  handleCall();
                  setIsMobileMenuOpen(false);
                }}
                variant="outline"
                size="sm"
                className="bg-white/50 hover:bg-secondary/20 border-secondary/30 text-secondary justify-start"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call +1 607-238-7307
              </Button>
              <Link to="/shopping">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-fresh-600 hover:from-fresh-600 hover:to-primary text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
