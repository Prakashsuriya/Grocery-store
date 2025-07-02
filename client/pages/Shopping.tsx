import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Plus,
  Minus,
  Star,
  Leaf,
  Award,
  Filter,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  isOrganic?: boolean;
  isLocal?: boolean;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const categories = [
  "All",
  "Fresh Produce",
  "Organic Groceries",
  "Local Produce",
  "Pantry Staples",
  "Dairy",
  "Bakery",
  "Meats",
  "International Foods",
];

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Organic Bananas",
    price: 2.99,
    category: "Fresh Produce",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop&crop=center",
    rating: 4.8,
    isOrganic: true,
    description: "Fresh organic bananas, perfect for breakfast or snacks",
  },
  {
    id: "2",
    name: "Local Apples",
    price: 4.99,
    category: "Fresh Produce",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop&crop=center",
    rating: 4.9,
    isLocal: true,
    description: "Crispy local apples from nearby orchards",
  },
  {
    id: "3",
    name: "Organic Whole Milk",
    price: 5.49,
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop&crop=center",
    rating: 4.7,
    isOrganic: true,
    description: "Fresh organic whole milk from grass-fed cows",
  },
  {
    id: "4",
    name: "Artisan Sourdough",
    price: 6.99,
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop&crop=center",
    rating: 4.8,
    isLocal: true,
    description: "Handcrafted sourdough bread baked daily",
  },
  {
    id: "5",
    name: "Organic Spinach",
    price: 3.99,
    category: "Organic Groceries",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop&crop=center",
    rating: 4.6,
    isOrganic: true,
    description: "Fresh organic baby spinach leaves",
  },
  {
    id: "6",
    name: "Quinoa",
    price: 8.99,
    category: "Pantry Staples",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop&crop=center",
    rating: 4.5,
    description: "Premium quality quinoa for healthy meals",
  },
  {
    id: "7",
    name: "Free-Range Eggs",
    price: 4.49,
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop&crop=center",
    rating: 4.9,
    isLocal: true,
    description: "Farm-fresh free-range eggs from local farms",
  },
  {
    id: "8",
    name: "Grass-Fed Beef",
    price: 18.99,
    category: "Meats",
    image:
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300&h=300&fit=crop&crop=center",
    rating: 4.8,
    isLocal: true,
    description: "Premium grass-fed beef, locally sourced",
  },
];

export default function Shopping() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
      return prev.filter((item) => item.id !== productId);
    });
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fresh-50/30 via-background to-warm-50/30 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-fresh-600 to-fresh-700 bg-clip-text text-transparent mb-4">
            Shop Fresh Groceries
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our wide selection of fresh produce, organic groceries, and
            local specialties.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/70 backdrop-blur-sm border-fresh-200"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setIsCartOpen(true)}
            className="bg-white/70 backdrop-blur-sm border-fresh-200 hover:bg-fresh-50 relative"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Cart ({getTotalItems()})
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary text-white text-xs rounded-full flex items-center justify-center animate-cart-bounce">
                {getTotalItems()}
              </span>
            )}
          </Button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "transition-all duration-200",
                selectedCategory === category
                  ? "bg-gradient-to-r from-fresh-500 to-fresh-600 text-white shadow-md"
                  : "bg-white/70 backdrop-blur-sm border-fresh-200 hover:bg-fresh-50 text-fresh-700",
              )}
            >
              <Filter className="w-4 h-4 mr-1" />
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-muted-foreground">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {product.isOrganic && (
                      <Badge
                        variant="secondary"
                        className="bg-fresh-100 text-fresh-700 hover:bg-fresh-200"
                      >
                        <Leaf className="w-3 h-3 mr-1" />
                        Organic
                      </Badge>
                    )}
                    {product.isLocal && (
                      <Badge
                        variant="secondary"
                        className="bg-warm-100 text-warm-700 hover:bg-warm-200"
                      >
                        <Award className="w-3 h-3 mr-1" />
                        Local
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-fresh-600">
                    ${product.price}
                  </span>
                  <div className="flex items-center gap-2">
                    {cart.find((item) => item.id === product.id) ? (
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(product.id)}
                          className="w-8 h-8 p-0 border-fresh-200 hover:bg-fresh-50"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="font-medium min-w-[20px] text-center">
                          {
                            cart.find((item) => item.id === product.id)
                              ?.quantity
                          }
                        </span>
                        <Button
                          size="sm"
                          onClick={() => addToCart(product)}
                          className="w-8 h-8 p-0 bg-gradient-to-r from-fresh-500 to-fresh-600 hover:from-fresh-600 hover:to-fresh-700"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => addToCart(product)}
                        className="bg-gradient-to-r from-fresh-500 to-fresh-600 hover:from-fresh-600 hover:to-fresh-700 text-white shadow-md"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="flex-1 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsCartOpen(false)}
            />
            <div className="w-96 bg-white shadow-2xl p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-fresh-700">
                  Your Cart ({getTotalItems()})
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCartOpen(false)}
                >
                  ✕
                </Button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-3 bg-fresh-50 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            ${item.price} each
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromCart(item.id)}
                            className="w-6 h-6 p-0"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="font-medium min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            size="sm"
                            onClick={() => addToCart(item)}
                            className="w-6 h-6 p-0"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-fresh-600">
                        ${getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-fresh-500 to-fresh-600 hover:from-fresh-600 hover:to-fresh-700 text-white shadow-lg"
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
