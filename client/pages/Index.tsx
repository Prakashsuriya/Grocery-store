import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/components/ui/Logo";
import {
  Clock,
  MapPin,
  Phone,
  Star,
  ShoppingBag,
  Leaf,
  Award,
  Heart,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: Leaf,
      title: "Fresh & Organic",
      description: "Locally sourced produce and organic groceries",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Premium quality products at competitive prices",
    },
    {
      icon: Heart,
      title: "Community Focused",
      description: "Serving Binghamton with pride since day one",
    },
  ];

  const categories = [
    "Fresh Produce",
    "Organic Groceries",
    "Local Produce",
    "Pantry Staples",
    "Dairy",
    "Bakery",
    "Meats",
    "International Foods",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-fresh-50 via-background to-warm-50 animate-gradient-shift bg-[length:200%_200%]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.1),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(249,115,22,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Store Description */}
            <div className="space-y-8 animate-slide-in">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-fresh-600 via-fresh-700 to-fresh-800 bg-clip-text text-transparent">
                    Fresh, Local,
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-warm-500 to-warm-600 bg-clip-text text-transparent">
                    Quality Groceries
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Welcome to Banyan Grocers, your neighborhood grocery store in
                  the heart of Binghamton. We're committed to providing fresh,
                  quality produce and groceries that bring families together
                  around the dinner table.
                </p>
              </div>

              {/* Store Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="bg-white/60 backdrop-blur-sm border-fresh-200/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="p-2 bg-fresh-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-fresh-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Location</p>
                      <p className="text-xs text-muted-foreground">
                        223 Main Street, Binghamton, NY
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/60 backdrop-blur-sm border-warm-200/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="p-2 bg-warm-100 rounded-lg">
                      <Clock className="w-5 h-5 text-warm-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Hours</p>
                      <p className="text-xs text-muted-foreground">
                        Wed-Tue: 10:30 AM - 9 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shopping" className="flex-1">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-fresh-500 to-fresh-600 hover:from-fresh-600 hover:to-fresh-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Start Shopping
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 bg-white/70 hover:bg-white border-fresh-200 text-fresh-700 hover:text-fresh-800 transition-all duration-300"
                  onClick={() => (window.location.href = "tel:+16072387307")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Right Side - Large Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-fresh-200 to-warm-200 rounded-full blur-3xl opacity-30 scale-110" />
                <Logo size="xl" className="relative z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-fresh-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-fresh-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-fresh-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-fresh-600 to-fresh-700 bg-clip-text text-transparent mb-4">
              Why Choose Banyan Grocers?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're more than just a grocery store - we're your partners in
              healthy, delicious living.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-fresh-100 to-fresh-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-fresh-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-fresh-600 to-warm-600 bg-clip-text text-transparent mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From fresh produce to international foods, we have everything you
              need for your family.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-gradient-to-br from-fresh-50 to-warm-50 border border-fresh-100 hover:border-fresh-200 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <p className="text-center font-medium text-fresh-700 group-hover:text-fresh-800 transition-colors">
                  {category}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/shopping">
              <Button
                size="lg"
                className="bg-gradient-to-r from-warm-500 to-warm-600 hover:from-warm-600 hover:to-warm-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Explore All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Store Info Section */}
      <section className="py-20 bg-gradient-to-br from-fresh-50 to-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-fresh-600 to-fresh-700 bg-clip-text text-transparent mb-6">
                Visit Our Store
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-fresh-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-fresh-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      223 Main Street, Rear building
                      <br />
                      Orton Ave, Binghamton, NY 13905
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-warm-100 rounded-lg">
                    <Clock className="w-6 h-6 text-warm-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Store Hours</h3>
                    <p className="text-muted-foreground">
                      Wednesday - Tuesday: 10:30 AM - 9:00 PM
                      <br />
                      <span className="text-sm italic">
                        Hours may vary on holidays
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-fresh-100 rounded-lg">
                    <Phone className="w-6 h-6 text-fresh-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contact</h3>
                    <p className="text-muted-foreground">+1 607-238-7307</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="bg-gradient-to-br from-fresh-100 to-warm-100 rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg italic text-foreground mb-4">
                  "The freshest produce in Binghamton! Banyan Grocers has been
                  our family's go-to store for years. Their local selection is
                  unmatched."
                </blockquote>
                <cite className="text-muted-foreground font-medium">
                  - Sarah M., Local Customer
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
