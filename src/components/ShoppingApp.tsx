import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Plus, Minus, Search } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 2.99,
    category: "Fresh Produce",
    image: "🍅",
    inStock: true,
  },
  {
    id: 2,
    name: "Organic Spinach",
    price: 1.99,
    category: "Fresh Produce",
    image: "🥬",
    inStock: true,
  },
  {
    id: 3,
    name: "Basmati Rice",
    price: 4.99,
    category: "Pantry Staples",
    image: "🍚",
    inStock: true,
  },
  {
    id: 4,
    name: "Fresh Milk",
    price: 3.49,
    category: "Dairy",
    image: "🥛",
    inStock: true,
  },
  {
    id: 5,
    name: "Whole Wheat Bread",
    price: 2.79,
    category: "Bakery",
    image: "🍞",
    inStock: true,
  },
  {
    id: 6,
    name: "Greek Yogurt",
    price: 4.29,
    category: "Dairy",
    image: "🥄",
    inStock: true,
  },
];

export default function ShoppingApp() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing && existing.quantity > 1) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
      return prev.filter((item) => item.id !== productId);
    });
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {/* Products Section */}
      <div className="lg:col-span-3">
        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{product.image}</div>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <p className="text-2xl font-bold text-fresh-600">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  {cart.find((item) => item.id === product.id) ? (
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="font-semibold min-w-[2rem] text-center">
                        {cart.find((item) => item.id === product.id)?.quantity}
                      </span>
                      <Button size="sm" onClick={() => addToCart(product)}>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="lg:col-span-1">
        <Card className="bg-white/70 backdrop-blur-sm sticky top-24">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Cart ({getTotalItems()})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {cart.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">
                Your cart is empty
              </p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeFromCart(item.id)}
                        className="h-6 w-6 p-0"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="text-sm font-medium min-w-[1.5rem] text-center">
                        {item.quantity}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => addToCart(item)}
                        className="h-6 w-6 p-0"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold text-lg text-fresh-600">
                      ${getTotalPrice()}
                    </span>
                  </div>

                  <Button className="w-full" size="lg">
                    Checkout
                  </Button>

                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Call +1 607-238-7307 to place your order
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
