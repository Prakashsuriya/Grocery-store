import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleCall = () => {
    window.location.href = "tel:+16072387307";
  };

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
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Get in touch with any questions,
            feedback, or special requests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-fresh-700 mb-6">
              Get in Touch
            </h2>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-fresh-100 rounded-lg">
                    <Phone className="w-6 h-6 text-fresh-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-3">
                      +1 607-238-7307
                    </p>
                    <Button
                      onClick={handleCall}
                      size="sm"
                      className="bg-gradient-to-r from-fresh-500 to-fresh-600 hover:from-fresh-600 hover:to-fresh-700 text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-warm-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-warm-600" />
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
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-fresh-100 rounded-lg">
                    <Clock className="w-6 h-6 text-fresh-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Store Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Wednesday - Tuesday: 10:30 AM - 9:00 PM</p>
                      <p className="text-sm italic">
                        Hours may vary on holidays
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-warm-100 rounded-lg">
                    <Mail className="w-6 h-6 text-warm-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@banyangrocers.com
                      <br />
                      <span className="text-sm">
                        We typically respond within 24 hours
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-fresh-700">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone (Optional)
                    </label>
                    <Input type="tel" placeholder="+1 (607) 000-0000" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input placeholder="What is this regarding?" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-fresh-500 to-fresh-600 hover:from-fresh-600 hover:to-fresh-700 text-white shadow-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-2xl p-12 border border-fresh-100 text-center">
          <MapPin className="w-16 h-16 text-fresh-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-fresh-700 mb-4">
            Find Us on the Map
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Interactive map integration coming soon! For now, you can find us at
            223 Main Street, Rear building, Orton Ave, Binghamton, NY 13905.
          </p>
          <Button
            variant="outline"
            onClick={() =>
              window.open(
                "https://maps.google.com/?q=223+Main+Street,+Binghamton,+NY+13905",
                "_blank",
              )
            }
            className="bg-white/70 backdrop-blur-sm border-fresh-200 text-fresh-700 hover:bg-fresh-50"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Open in Google Maps
          </Button>
        </div>
      </div>
    </div>
  );
}
