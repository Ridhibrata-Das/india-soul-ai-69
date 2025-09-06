import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Mic, 
  Globe, 
  Coins, 
  Eye, 
  Smartphone,
  Zap,
  Heart,
  Users
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "The Second Self AI Avatar",
      description: "A digital doppelgänger trained on decision intelligence with 'What would the Bhagavad Gita say?' prompts.",
      details: "Voice-first interactions in 22+ regional languages, blending spiritual guidance with practical advice.",
      gradient: "bg-gradient-spiritual"
    },
    {
      icon: Mic,
      title: "Voice-First Cultural Creation",
      description: "Turn life updates into Ramayan-style narratives or AI-generated rangoli art with your photo.",
      details: "Local-first feed curated from nearby mandirs, festivals, and community sevas.",
      gradient: "bg-gradient-divine"
    },
    {
      icon: Eye,
      title: "AR/VR Temple Experiences",
      description: "Explore 3D reconstructions of ancient temples via AR, with AI priests explaining rituals.",
      details: "Host VR diya-lit gatherings for milestones and join digital Bihu celebrations.",
      gradient: "bg-gradient-chakra"
    },
    {
      icon: Coins,
      title: "Karma Points Economy",
      description: "Earn tokens for creating meaningful content like sharing Ayurveda tips or teaching lokgeet.",
      details: "Trade virtual offerings as NFTs, supporting real-world temples and communities.",
      gradient: "bg-gradient-karma"
    },
    {
      icon: Globe,
      title: "Digital Bharat Map",
      description: "See how your contributions help preserve heritage across India's cultural landscape.",
      details: "Patriotism through participation - every seva story matters.",
      gradient: "bg-gradient-spiritual"
    },
    {
      icon: Heart,
      title: "Anti-Addiction Design",
      description: "'3rd Eye Pause' mode forces offline breaks during pradosh kaal for natural rhythms.",
      details: "Truth over traffic with misinformation checked by itihasa texts and local scholars.",
      gradient: "bg-gradient-divine"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-spiritual">Revolutionary Features</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Where ancient wisdom meets cutting-edge technology to create authentic connections
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-sacred group hover:shadow-mystical"
            >
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-lg ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-sacred`}>
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                {feature.description}
              </p>
              <p className="text-sm text-accent/80 italic">
                {feature.details}
              </p>
            </Card>
          ))}
        </div>

        {/* Growth Mechanics Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-gradient-spiritual">
            Viral Growth Through Dharma
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-4">
              <Zap className="h-8 w-8 text-primary mx-auto mb-3 mystical-pulse" />
              <h4 className="font-semibold text-lg mb-2">Dharma Challenges</h4>
              <p className="text-sm text-muted-foreground">Gamified seva stories during festivals</p>
            </div>
            
            <div className="text-center p-4">
              <Smartphone className="h-8 w-8 text-accent mx-auto mb-3 mystical-pulse" style={{ animationDelay: "1s" }} />
              <h4 className="font-semibold text-lg mb-2">Cultural FOMO</h4>
              <p className="text-sm text-muted-foreground">Limited seats for AI-guided Yatra experiences</p>
            </div>
            
            <div className="text-center p-4">
              <Users className="h-8 w-8 text-secondary mx-auto mb-3 mystical-pulse" style={{ animationDelay: "2s" }} />
              <h4 className="font-semibold text-lg mb-2">Invite System</h4>
              <p className="text-sm text-muted-foreground">Unlock folklore avatars by bringing friends</p>
            </div>
            
            <div className="text-center p-4">
              <Globe className="h-8 w-8 text-primary mx-auto mb-3 mystical-pulse" style={{ animationDelay: "3s" }} />
              <h4 className="font-semibold text-lg mb-2">Digital Bharat</h4>
              <p className="text-sm text-muted-foreground">Map your cultural preservation impact</p>
            </div>
          </div>

          <Button variant="karma" size="lg" className="text-lg px-8">
            Experience the Future of Social
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;