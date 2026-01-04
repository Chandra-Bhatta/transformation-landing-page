import { X } from "lucide-react";

const OfferSection = () => {
  const noRequirements = [
    "Strenuous Exercise",
    "Following a Diet",
    "Sacrificing Her Favorite Foods",
  ];

  return (
    <section className="bg-accent py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="font-oswald text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            <span className="text-highlight uppercase">HARVARD RESEARCH</span>{" "}
            SHOWS A SIMPLE{" "}
            <span className="text-highlight">MORNING ROUTINE</span> THAT HELPS
            THE BODY BURN FAT MORE EFFICIENTLY{" "}
            <span className="text-highlight">IN JUST DAYS…</span>
          </h2>
        </div>

        {/* Secondary Description */}
        <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border border-border">
          <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
            This New Harvard Research Helped College Student{" "}
            <strong>Megan</strong> Dissolve Slabs of Wobbly Fat From Her{" "}
            <strong>Belly, Butt, Hips, Thighs & Face</strong> without:
          </p>

          {/* No Requirements List */}
          <ul className="space-y-3 mb-8">
            {noRequirements.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-lg md:text-xl"
              >
                <X className="w-6 h-6 text-highlight flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          {/* Teaser Text */}
          <p className="text-lg md:text-xl italic text-muted-foreground mb-8">
            And That's Not Even the Full Story...
          </p>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-primary hover:bg-teal-dark text-primary-foreground font-oswald text-xl md:text-2xl font-bold py-4 px-8 md:px-12 rounded-lg shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-slow uppercase tracking-wide">
              See How She Did It
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
