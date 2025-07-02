import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Phone,
  CreditCard,
  Truck,
  Shield,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function StoreInfo() {
  const services = [
    {
      icon: CreditCard,
      title: "Payment Options",
      description: "Cash, Credit Cards, Debit Cards, EBT/SNAP accepted",
    },
    {
      icon: Truck,
      title: "Local Delivery",
      description: "Delivery available within Binghamton area (coming soon)",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all products",
    },
    {
      icon: Leaf,
      title: "Organic Selection",
      description: "Wide variety of certified organic products",
    },
  ];

  const categories = [
    { name: "Fresh Produce", description: "Daily fresh vegetables and fruits" },
    { name: "Organic Groceries", description: "Certified organic products" },
    {
      name: "Local Produce",
      description: "Locally sourced from regional farms",
    },
    { name: "Pantry Staples", description: "Essential everyday items" },
    { name: "Dairy", description: "Fresh milk, cheese, and dairy products" },
    { name: "Bakery", description: "Fresh baked goods and artisan breads" },
    { name: "Meats", description: "Quality meats and poultry" },
    { name: "International Foods", description: "Global cuisine ingredients" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-fresh-50/30 via-background to-warm-50/30 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/">
          <Button
            variant="outline"
            className="mb-6 bg-white/70 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-fresh-600 to-fresh-700 bg-clip-text text-transparent mb-4">
            Store Information
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about shopping at Banyan Grocers.
          </p>
        </div>

        {/* Store Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-fresh-700 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                Location & Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  223 Main Street, Rear building
                  <br />
                  Orton Ave, Binghamton, NY 13905
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Store Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Wednesday - Tuesday</span>
                    <span className="text-fresh-600 font-medium">
                      10:30 AM - 9:00 PM
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    * Hours may vary on holidays
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-fresh-600" />
                  <span>+1 607-238-7307</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-fresh-700 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Services & Policies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-fresh-50/50 rounded-lg"
                  >
                    <div className="p-2 bg-fresh-100 rounded-lg">
                      <service.icon className="w-5 h-5 text-fresh-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-fresh-600 to-warm-600 bg-clip-text text-transparent mb-8 text-center">
            Product Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-fresh-700 mb-2 group-hover:text-fresh-800 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-fresh-100 to-fresh-200 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-fresh-800 flex items-center">
                <Leaf className="w-5 h-5 mr-2" />
                Organic & Local Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-fresh-700 mb-4">
                We prioritize organic and locally sourced products to support
                both your health and our local farming community.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-fresh-200 text-fresh-800 hover:bg-fresh-300">
                  USDA Organic Certified
                </Badge>
                <Badge className="bg-fresh-200 text-fresh-800 hover:bg-fresh-300">
                  Local Partnerships
                </Badge>
                <Badge className="bg-fresh-200 text-fresh-800 hover:bg-fresh-300">
                  Farm Fresh Daily
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-warm-100 to-warm-200 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-warm-800 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Quality Promise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-warm-700 mb-4">
                Every product in our store meets our high standards for quality
                and freshness. Your satisfaction is our guarantee.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-warm-200 text-warm-800 hover:bg-warm-300">
                  100% Satisfaction
                </Badge>
                <Badge className="bg-warm-200 text-warm-800 hover:bg-warm-300">
                  Fresh Guarantee
                </Badge>
                <Badge className="bg-warm-200 text-warm-800 hover:bg-warm-300">
                  Quality Tested
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-12 border border-fresh-100">
          <h2 className="text-2xl font-bold text-fresh-700 mb-4">
            Ready to Shop?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Experience the Banyan Grocers difference. Fresh products, friendly
            service, and unbeatable quality await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shopping">
              <Button
                size="lg"
                className="bg-gradient-to-r from-fresh-500 to-fresh-600 hover:from-fresh-600 hover:to-fresh-700 text-white shadow-lg"
              >
                Start Shopping Online
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "tel:+16072387307")}
              className="bg-white/70 backdrop-blur-sm border-fresh-200 text-fresh-700 hover:bg-fresh-50"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
