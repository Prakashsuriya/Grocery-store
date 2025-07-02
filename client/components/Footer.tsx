import { Heart, MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur-sm border-t border-border/50 py-8 sm:py-12 lg:py-16 mt-8 sm:mt-12 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Store Hours */}
          <Card className="bg-white/70 backdrop-blur-sm border-fresh-200/50">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-fresh-100 rounded-lg flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-fresh-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">
                  Store Hours
                </h3>
              </div>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Wednesday</span>
                  <span className="font-medium text-xs sm:text-sm">
                    10:30 AM - 9:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Thursday</span>
                  <span className="font-medium text-xs sm:text-sm">
                    10:30 AM - 9:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Friday</span>
                  <span className="font-medium text-xs sm:text-sm">
                    10:30 AM - 9:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium text-xs sm:text-sm">
                    10:30 AM - 9:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-xs sm:text-sm">
                    10:30 AM - 9:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday</span>
                  <span className="font-medium text-xs sm:text-sm">
                    10:30 AM - 9:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tuesday</span>
                  <span className="font-medium text-xs sm:text-sm">
                    10:30 AM - 9:00 PM
                  </span>
                </div>
                <p className="text-xs text-muted-foreground italic mt-2 sm:mt-3">
                  * Hours may differ on holidays
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="bg-white/70 backdrop-blur-sm border-fresh-200/50">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-fresh-100 rounded-lg flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-fresh-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">
                  Contact Info
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="font-medium text-xs sm:text-sm mb-1">Phone</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    +1 607-238-7307
                  </p>
                </div>
                <div>
                  <p className="font-medium text-xs sm:text-sm mb-1">Address</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    223 Main Street, Rear building
                    <br />
                    Orton Ave, Binghamton, NY 13905
                  </p>
                </div>
                <div>
                  <p className="font-medium text-xs sm:text-sm mb-1">Email</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    info@banyangrocers.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Map */}
          <Card className="bg-white/70 backdrop-blur-sm border-fresh-200/50 sm:col-span-2 lg:col-span-1">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-fresh-100 rounded-lg flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-fresh-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">Find Us</h3>
              </div>
              <div className="w-full h-40 sm:h-48 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.093243140471!2d-75.9353497!3d42.1054738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89daef2791b73061%3A0xe48c26c934550ec4!2sBanyan%20Grocers!5e0!3m2!1sen!2sin!4v1751454848543!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-border/50 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
              <span>© 2025 Banyan Grocers. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
              <span>Created with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-current" />
              <span>by</span>
              <a
                href="https://www.resumeit.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4"
              >
                resumeit.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
