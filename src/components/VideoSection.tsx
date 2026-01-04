import { Play } from "lucide-react";
import transformationImage from "@/assets/weight-loss-transformation.png";

const VideoSection = () => {
  return (
    <section className="bg-coral py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <a 
          href="https://1e38caijrkn96c28kd0i7g2l17.hop.clickbank.net" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-card cursor-pointer group block"
        >
          <img
            src={transformationImage}
            alt="Weight loss transformation journey showing progress over 6 months - Lost 20 lbs in 2 months, Lost 48 lbs in 4 months, Lost 75 lbs in 6 months"
            className="w-full h-auto min-h-[200px] object-cover"
            loading="eager"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-300">
            <div
              className="bg-card/90 group-hover:bg-card rounded-full p-4 md:p-6 shadow-2xl transition-all duration-300 group-hover:scale-110"
              aria-label="Play video - See how she did it"
            >
              <Play className="w-12 h-12 md:w-16 md:h-16 text-primary fill-primary" />
            </div>
          </div>
        </a>
        
        {/* Total weight loss banner */}
        <div className="mt-4 text-center">
          <p className="inline-block bg-foreground/80 text-gold px-6 py-3 rounded-lg text-xl md:text-2xl font-oswald font-bold">
            And a massive 143 lbs in total.
          </p>
        </div>

        {/* "See how she did it" text under video */}
        <p className="text-center text-secondary-foreground font-oswald text-lg mt-3 uppercase tracking-wide">
          See How She Did It
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
