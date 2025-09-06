import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Share2, Gift } from "lucide-react";

const Community = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full chakra-spin" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-full chakra-spin" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-gradient-spiritual">3rd Eye Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share your vision, connect with like-minded souls, and help us build the future of conscious social media
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Share Your Vision */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 mystical-pulse">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-6">
                <Share2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Share Your Vision</h3>
              <p className="text-muted-foreground mb-6">
                What does the future of social media look like to you? Share your vision of how 3rd Eye can transform digital connection.
              </p>
              <Button variant="outline" size="lg" className="w-full">
                <Heart className="mr-2 h-5 w-5" />
                Share Your Vision
              </Button>
            </div>
          </Card>

          {/* Sabai Foundation */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 mystical-pulse" style={{ animationDelay: "1s" }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-chakra rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sabai Foundation</h3>
              <p className="text-muted-foreground mb-6">
                3rd Eye is being launched by Sabai Foundation. Become a founding member and support our mission to democratize digital wisdom.
              </p>
              <div className="bg-gradient-spiritual/10 rounded-lg p-4 mb-6">
                <div className="text-3xl font-bold text-gradient-spiritual mb-2">₹365</div>
                <div className="text-sm text-muted-foreground">One-time membership donation</div>
              </div>
              <Button variant="divine" size="lg" className="w-full" asChild>
                <a href="mailto:anant.thirdeye@gmail.com?subject=Founding Member - 3rd Eye&body=Hello, I would like to become a founding member of 3rd Eye by donating ₹365 to Sabai Foundation. Please contact me at your earliest convenience.%0A%0AMy contact details:%0AMobile: 6280604312%0A%0AThank you!" className="flex items-center justify-center">
                  <Users className="mr-2 h-5 w-5" />
                  Become a Founding Member
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Community Stats */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-gradient-spiritual">1,000+</div>
              <div className="text-sm text-muted-foreground">Visionaries Joined</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-spiritual">500+</div>
              <div className="text-sm text-muted-foreground">Visions Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-spiritual">250+</div>
              <div className="text-sm text-muted-foreground">Founding Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient-spiritual">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities Ahead</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;