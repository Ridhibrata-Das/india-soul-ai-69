import { Button } from "@/components/ui/button";
import { Eye, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Eye className="h-8 w-8 text-primary mystical-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full chakra-spin" />
            </div>
            <span className="text-2xl font-bold text-gradient-spiritual">3rd Eye</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#vision" className="text-muted-foreground hover:text-primary transition-colors">
              Vision
            </a>
            <a href="#dharma" className="text-muted-foreground hover:text-primary transition-colors">
              Dharma
            </a>
            <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">
              Community
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <a href="https://forms.gle/KN7UKqZBebHJ8gYN7" target="_blank" rel="noopener noreferrer">
                Join Beta
              </a>
            </Button>
            <Button variant="divine" asChild>
              <a href="https://forms.gle/KN7UKqZBebHJ8gYN7" target="_blank" rel="noopener noreferrer">
                Awaken Your 3rd Eye
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#vision" className="text-muted-foreground hover:text-primary transition-colors">
                Vision
              </a>
              <a href="#dharma" className="text-muted-foreground hover:text-primary transition-colors">
                Dharma
              </a>
              <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">
                Community
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://forms.gle/KN7UKqZBebHJ8gYN7" target="_blank" rel="noopener noreferrer">
                    Join Beta
                  </a>
                </Button>
                <Button variant="divine" className="w-full" asChild>
                  <a href="https://forms.gle/KN7UKqZBebHJ8gYN7" target="_blank" rel="noopener noreferrer">
                    Awaken Your 3rd Eye
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;