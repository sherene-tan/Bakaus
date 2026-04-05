import { Shield, TreePine, Fish } from "lucide-react";

import logo from "@/assets/bakaus-logo.png";

const features = [
  {
    icon: Shield,
    title: "Coastal Protection",
    description:
      "See how mangrove trees protect coasts from storm surges",
  },
  {
    icon: TreePine,
    title: "Species & Zones",
    description:
      "Learn about how different mangrove species serve a unique function in each coastal zone, complementing each other to anchor the coast",
  },
  {
    icon: Fish,
    title: "Coastal Wildlife",
    description:
      "Find out what wildlife dwells in this special zone between the land and sea",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <video
          src="/videos/Bakaus_Intro_1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 flex flex-col items-center text-center px-6 animate-fade-up">
          <img
            src={logo}
            alt="Bakaus logo"
            className="w-64 md:w-80 lg:w-96 mb-6 drop-shadow-2xl"
          />
          <p className="font-body text-lg md:text-xl tracking-wide text-primary-foreground/80 max-w-md">
            Where nature meets the fight against climate change
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What if nature holds the key to climate change too?
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg leading-relaxed text-muted-foreground font-body">
            The world is heating up rapidly, bringing climate and environmental
            changes that is increasingly impacting both us and nature. Mangroves,
            in particular, stand at the frontline of climate change, absorbing
            and storing carbon, protecting coasts, and supporting rich
            biodiversity. Protecting and restoring them offers a powerful
            nature-based solution, aligning climate mitigation, adaptation, and
            ecosystem resilience in one living system.
          </p>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Welcome to Bakaus Island
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg leading-relaxed text-muted-foreground font-body">
            Bakaus Island and its village are under threat from climate change.
            Rising seas and stronger storms are putting its future at risk. But
            there is still time. By restoring a thriving mangrove forest, we can
            help protect the island — and the people who call it home.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16">
            Explore the Game
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center text-center p-8 rounded-lg bg-background border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-muted-foreground text-sm font-body border-t border-border">
        © {new Date().getFullYear()} Bakaus. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
