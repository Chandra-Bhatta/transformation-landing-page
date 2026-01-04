import Header from "@/components/Header";
import VideoSection from "@/components/VideoSection";
import OfferSection from "@/components/OfferSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <VideoSection />
        <OfferSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
