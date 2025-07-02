import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Users, Award, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description:
        "We're proud to serve the Binghamton community with dedication and care.",
    },
    {
      icon: Leaf,
      title: "Fresh & Sustainable",
      description:
        "Committed to providing the freshest products while supporting sustainable practices.",
    },
    {
      icon: Users,
      title: "Family Owned",
      description:
        "A family business that treats every customer like part of our extended family.",
    },
    {
      icon: Award,
      title: "Quality Promise",
      description:
        "We guarantee the highest quality products at competitive prices.",
    },
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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-fresh-600 to-fresh-700 bg-clip-text text-transparent mb-4">
            About Banyan Grocers
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn more about our story, values, and commitment to serving the
            Binghamton community with fresh, quality groceries.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-fresh-600 to-fresh-700 bg-clip-text text-transparent mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Banyan Grocers has been a cornerstone of the Binghamton
                community, providing fresh, quality groceries to families
                throughout the area. Located at 223 Main Street, we've built our
                reputation on trust, quality, and exceptional customer service.
              </p>
              <p>
                Our commitment goes beyond just selling groceries. We believe in
                supporting local farmers, providing organic options, and
                ensuring that every family has access to fresh, nutritious food
                at affordable prices.
              </p>
              <p>
                From our carefully curated selection of fresh produce to our
                extensive international foods section, every product in our
                store is chosen with our customers' needs and preferences in
                mind.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-fresh-100 to-warm-100 rounded-2xl p-12 text-center">
            <div className="flex justify-center mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2F1663f0e58d6a461a8d196d170a0497c3?format=webp&width=800"
                alt="Banyan Grocers - An Urban Tradition"
                className="h-32 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-fresh-700 mb-4">
              Serving Binghamton Since Day One
            </h3>
            <p className="text-muted-foreground">
              A trusted name in the community, committed to quality and service.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-fresh-600 to-warm-600 bg-clip-text text-transparent mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at Banyan Grocers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-fresh-100 to-fresh-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-fresh-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-12 border border-fresh-100">
          <Users className="w-16 h-16 text-fresh-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-fresh-700 mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Our dedicated team members are here to help you find exactly what
            you need. We pride ourselves on providing friendly, knowledgeable
            service to every customer.
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-fresh-500 to-fresh-600 hover:from-fresh-600 hover:to-fresh-700 text-white">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
