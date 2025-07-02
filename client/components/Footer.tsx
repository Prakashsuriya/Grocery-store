import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur-sm border-t border-border/50 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2025 Banyan Grocers. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Created with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
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
    </footer>
  );
}
