import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const placeholderImages = [
    {
      id: 1,
      category: "Fresh Produce",
      emoji: "🥬",
      title: "Fresh Vegetables",
    },
    { id: 2, category: "Fruits", emoji: "🍎", title: "Local Fruits" },
    { id: 3, category: "Store", emoji: "🏪", title: "Our Store Front" },
    { id: 4, category: "Bakery", emoji: "🍞", title: "Fresh Baked Goods" },
    { id: 5, category: "Dairy", emoji: "🥛", title: "Dairy Products" },
    { id: 6, category: "Meats", emoji: "🥩", title: "Quality Meats" },
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
            Photo Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of our fresh products and welcoming store
            environment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderImages.map((image) => (
            <Card
              key={image.id}
              className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-fresh-100 to-warm-100 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                  {image.emoji}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-fresh-600 bg-fresh-100 px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    High-quality {image.category.toLowerCase()} sourced with
                    care for our customers.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center bg-white/50 backdrop-blur-sm rounded-2xl p-12 border border-fresh-100">
          <Camera className="w-16 h-16 text-fresh-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-fresh-700 mb-4">
            More Photos Coming Soon!
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're currently updating our gallery with fresh photos of our
            products and store. Check back soon for more visual content!
          </p>
        </div>
      </div>
    </div>
  );
}
