

import logo from "@/assets/bakaus-logo.png";

const features = [
  {
    title: "Coastal Protection",
    description:
      "See how mangrove trees protect Bakaus Island from rising sea level and storm surges",
    media: { type: "video" as const, src: "/videos/Rising_Sea_Levels.mp4" },
  },
  {
    title: "Species & Zones",
    description:
      "Discover how different mangrove species work together across coastal zones to stabilise the shoreline and form a barrier against storm surges",
    media: { type: "image" as const, src: "/images/Intro_Bruguiera.png" },
  },
  {
    title: "Carbon Absorption",
    description:
      "Watch how the mangrove trees absorb carbon dioxide from the atmosphere",
    media: { type: "video" as const, src: "/videos/High_Level_of_CO2.mp4" },
  },
  {
    title: "Coastal Wildlife",
    description:
      "Find out what wildlife dwells in this special zone between the land and sea",
    media: { type: "image" as const, src: "/images/coastal-wildlife.jpg" },
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-start justify-start overflow-hidden">
        <video
          src="/videos/Leaderboard_Scene.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/70 to-transparent z-[5]" />
        <div className="relative z-10 flex flex-col items-center text-center w-full pb-16 md:pb-24 mt-auto animate-fade-up">
          <img
            src={logo}
            alt="Bakaus logo"
            className="w-64 md:w-80 lg:w-96 mb-6 drop-shadow-2xl"
          />
          <p className="font-body text-lg md:text-xl tracking-wide text-white max-w-md">
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
            community resilience in one living system.
          </p>
        </div>
      </section>

      {/* Welcome */}
      <section className="relative py-0 overflow-hidden">
        <video
          src="/videos/Bakaus_Intro_1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Welcome to Bakaus Island
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
            <p className="text-lg leading-relaxed text-white/80 font-body">
              Bakaus Island and its village are under threat. Rising seas and
              stronger storm surges are putting its future at risk. But there is
              still time. By restoring a thriving mangrove forest, we can help
              protect the island — and the people who call it home.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16">
            Explore the Game
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col rounded-lg bg-background border border-border overflow-hidden"
              >
                {f.media.type === "video" ? (
                  <video
                    src={f.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <img
                    src={f.media.src}
                    alt={f.title}
                    loading="lazy"
                    className="w-full aspect-video object-cover"
                  />
                )}
                <div className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-muted-foreground text-sm font-body border-t border-border space-y-1">
        <p>Created by Muhammad Hadi Ikhsan.</p>
        <p>© {new Date().getFullYear()} Bakaus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
