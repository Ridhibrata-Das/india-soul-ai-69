import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Users, Brain, Heart } from "lucide-react";
import heroImage from "@/assets/third-eye-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Third Eye Spiritual Vision"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-primary/20 divine-float">
        <Sparkles className="h-12 w-12" />
      </div>
      <div className="absolute top-40 right-20 text-accent/20 divine-float" style={{ animationDelay: "2s" }}>
        <Brain className="h-16 w-16" />
      </div>
      <div className="absolute bottom-40 left-20 text-secondary/20 divine-float" style={{ animationDelay: "4s" }}>
        <Heart className="h-10 w-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-spiritual">3rd Eye:</span>
            <br />
            <span className="text-foreground">The Future of</span>
            <br />
            <span className="text-gradient-spiritual">Social Media</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Rooted in India's Soul. Powered by <span className="text-primary font-semibold">Agentic AI</span> that guides your journey through 
            <span className="text-accent font-semibold"> dharma</span>, <span className="text-secondary font-semibold">seva</span>, and authentic connection.
          </p>

          {/* Key Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/20 mystical-pulse">
              <Users className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Your Second Self</h3>
              <p className="text-sm text-muted-foreground">AI avatar trained on Sanskrit epics and local wisdom</p>
            </Card>
            
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-accent/20 mystical-pulse" style={{ animationDelay: "1s" }}>
              <Brain className="h-8 w-8 text-accent mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Decision Intelligence</h3>
              <p className="text-sm text-muted-foreground">Ancient wisdom meets modern AI for life guidance</p>
            </Card>
            
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-secondary/20 mystical-pulse" style={{ animationDelay: "2s" }}>
              <Heart className="h-8 w-8 text-secondary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Karma Economy</h3>
              <p className="text-sm text-muted-foreground">Earn tokens for meaningful content and seva</p>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="divine" size="lg" className="text-lg px-8 py-6">
              <Sparkles className="mr-2 h-5 w-5" />
              Connect with Your Second Self
            </Button>
            <Button variant="mystical" size="lg" className="text-lg px-8 py-6">
              Explore the Vision
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient-spiritual">5000+</div>
              <div className="text-sm text-muted-foreground">Years of Wisdom</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-spiritual">22</div>
              <div className="text-sm text-muted-foreground">Indian Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-spiritual">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-spiritual">1</div>
              <div className="text-sm text-muted-foreground">True Self</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;