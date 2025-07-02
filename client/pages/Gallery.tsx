import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const storeImages = [
    {
      id: 1,
      category: "Pantry Staples",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Fb6441b1e31d74cdd976eca81420c5f3e?format=webp&width=800",
      title: "International Groceries",
    },
    {
      id: 2,
      category: "Pantry Staples",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Fdc2abaf6255144738d797b8553585e26?format=webp&width=800",
      title: "Rice & Grains",
    },
    {
      id: 3,
      category: "Flour & Grains",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Ffea08b112c1745fe8e1068670b64bf1e?format=webp&width=800",
      title: "Flour & Specialty Grains",
    },
    {
      id: 4,
      category: "Fresh Produce",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Feb6bb78dfd46418482ee13c8030b6e2b?format=webp&width=800",
      title: "Fresh Produce Section",
    },
    {
      id: 5,
      category: "Rice & Lentils",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Fcf62ecce3f3749aa8d69752905d51860?format=webp&width=800",
      title: "Rice & Lentil Varieties",
    },
    {
      id: 6,
      category: "Snacks & Nuts",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2F18815c2ed68b44a0ba29d5c001ec6497?format=webp&width=800",
      title: "Premium Snacks & Nuts",
    },
    {
      id: 7,
      category: "Dairy & Butter",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Fc7a116f74bbb46de8ba183c15ff35c87?format=webp&width=800",
      title: "Dairy & Butter Products",
    },
    {
      id: 8,
      category: "Sweets & Treats",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Fbee6ffd21fb4432bb77f8b5b89b121a8?format=webp&width=800",
      title: "Traditional Sweets",
    },
    {
      id: 9,
      category: "Ready to Cook",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Fbef07944f6194cd98cd24b288d99504f?format=webp&width=800",
      title: "Ready-to-Cook Items",
    },
    {
      id: 10,
      category: "Sauces & Condiments",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2F0f43d17ca88d429e8b90ab441ada89e5?format=webp&width=800",
      title: "Sauces & Condiments",
    },
    {
      id: 11,
      category: "Snacks & Mixes",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2F912b54a338fb488193e375de13a46525?format=webp&width=800",
      title: "Bhel & Hot Mix",
    },
    {
      id: 12,
      category: "Beverages & Tea",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Fc60a4f4d44e54c93800f10a2f047ce3d?format=webp&width=800",
      title: "Tea & Beverages",
    },
    {
      id: 13,
      category: "Frozen Bread",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Fae97c5cd3ff34c3d9a6c688273cf03a1?format=webp&width=800",
      title: "Frozen Bread & Rotis",
    },
    {
      id: 14,
      category: "Dairy Products",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2F2fb2e9c6297e4c0ab79390cc057aa43b?format=webp&width=800",
      title: "Yogurt & Dairy",
    },
    {
      id: 15,
      category: "Frozen Vegetables",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2F327a757509624d61a9209f4a04e89c48?format=webp&width=800",
      title: "Frozen Vegetables",
    },
    {
      id: 16,
      category: "Frozen Ready Meals",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2F9bafde8b9eaf486f8ba03cbf3cca30ad?format=webp&width=800",
      title: "Frozen Ready Meals",
    },
    {
      id: 17,
      category: "Frozen Indian Breads",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2F89396e67cd7a40b3873ed704df551578?format=webp&width=800",
      title: "Frozen Parathas & Breads",
    },
    {
      id: 18,
      category: "Store Exterior",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2F789b4695246d4d06b974ea694e8f19a7?format=webp&width=800",
      title: "Banyan Grocers Store Front",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-fresh-50/30 via-background to-warm-50/30 pt-16 sm:pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/">
          <Button
            variant="outline"
            className="mb-4 sm:mb-6 bg-white/70 backdrop-blur-sm text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-fresh-600 to-fresh-700 bg-clip-text text-transparent mb-4">
            Photo Gallery
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Take a visual tour of our fresh products and welcoming store
            environment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {storeImages.map((image) => (
            <Card
              key={image.id}
              className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <span className="text-xs sm:text-sm font-medium text-fresh-600 bg-fresh-100 px-2 py-1 rounded-full truncate">
                      {image.category}
                    </span>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Authentic {image.category.toLowerCase()} available at our
                    store.
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
