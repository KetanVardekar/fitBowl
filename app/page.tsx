import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SaladBuilder from "@/components/SaladBuilder";
import HowItWorks from "@/components/HowItWorks";
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
    </main>
  );
}
