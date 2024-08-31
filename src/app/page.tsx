import React from "react";
import HeroSection from "./_components/LadingPage/Hero";
import FeatureSection from "./_components/LadingPage/Features";
import PricingSection from "./_components/LadingPage/Pricing";
import CTASection from "./_components/LadingPage/CTA";
import Footer from "./_components/LadingPage/Footer";

// Main App Component
const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
