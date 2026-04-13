import Navbar from "@/components/Navbar";
import ComingSoonBanner from "@/components/ComingSoonBanner";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SaladBuilder from "@/components/SaladBuilder";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <SaladBuilder />
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <Footer />
      <ComingSoonBanner />
    </main>
  );
}
