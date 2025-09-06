import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Brain, Users, Zap, BookOpen, Sparkles } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-gradient-spiritual">Our Sacred Mission</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            Empower the next generation to connect with their <span className="text-primary font-semibold">"inner self,"</span> community, 
            and India's civilizational ethos while fostering <span className="text-accent font-semibold">authenticity over attention.</span>
          </p>
          
          <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-8 mystical-pulse">
            <blockquote className="text-lg italic text-accent">
              "Unlike passive platforms, 3rd Eye's AI acts as a proactive co-creator, mentor, and guide, 
              trained on Sanskrit epics and India's 5,000-year-old decision-making frameworks."
            </blockquote>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="p-8 text-center bg-gradient-spiritual/10 border-primary/20">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4 divine-float" />
            <h3 className="text-2xl font-bold text-gradient-spiritual mb-4">Dharma</h3>
            <p className="text-muted-foreground">Purpose-driven interactions that align with your life's calling and spiritual growth.</p>
          </Card>
          
          <Card className="p-8 text-center bg-gradient-divine/10 border-accent/20">
            <Users className="h-12 w-12 text-accent mx-auto mb-4 divine-float" style={{ animationDelay: "2s" }} />
            <h3 className="text-2xl font-bold text-gradient-spiritual mb-4">Seva</h3>
            <p className="text-muted-foreground">Service to community through knowledge sharing and cultural preservation.</p>
          </Card>
          
          <Card className="p-8 text-center bg-gradient-chakra/10 border-secondary/20">
            <Brain className="h-12 w-12 text-secondary mx-auto mb-4 divine-float" style={{ animationDelay: "4s" }} />
            <h3 className="text-2xl font-bold text-gradient-spiritual mb-4">Prakriti</h3>
            <p className="text-muted-foreground">Individual temperament-based personalization using Ayurvedic wisdom.</p>
          </Card>
        </div>

        {/* What Makes Us Different */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient-spiritual">
            What Makes 3rd Eye Different?
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6 p-6 bg-card/20 rounded-lg border border-primary/10">
              <div className="bg-gradient-spiritual w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary">Agentic AI First</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Your digital companion doesn't just respond—it proactively guides you through life decisions using frameworks 
                  from the Bhagavad Gita, incorporating concepts like Vidya, Raga, and Krodha into modern contexts.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 bg-card/20 rounded-lg border border-accent/10">
              <div className="bg-gradient-divine w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-accent">Values-Driven Design</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Built for users seeking meaning beyond vanity metrics. Every feature is designed around dharma (purpose), 
                  seva (service), and authentic connection rather than addiction and attention.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 bg-card/20 rounded-lg border border-secondary/10">
              <div className="bg-gradient-chakra w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-secondary">Cultural Native Experience</h4>
                <p className="text-muted-foreground leading-relaxed">
                  From voice-first interactions in regional languages to AI-generated rangoli art, every feature celebrates 
                  and preserves India's rich cultural heritage while embracing technological innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold mb-6 text-gradient-spiritual">
            2031 Vision: India's Digital Soul Thriving
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            "3rd Eye's AI Avatars Bridge Tradition and Tomorrow: From Mumbai's Slums to Varanasi's Ghats, 
            India's Digital Soul Is Thriving Without Selling Its Data."
          </p>
          <Button variant="divine" size="lg" className="text-lg px-8">
            Join the Movement
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Vision;