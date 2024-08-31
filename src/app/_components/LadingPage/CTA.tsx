import { ArrowRight } from "lucide-react";

// CTA Section
const CTASection = () => (
  <section className="bg-blue-600 py-16 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="mb-4 text-3xl font-bold">
        Ready to Showcase Your Talents?
      </h2>
      <p className="mb-8 text-xl">
        Join thousands of professionals who have already created their perfect
        online presence.
      </p>
      <button className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition duration-300 ease-in-out hover:bg-blue-100">
        Get Started Now
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  </section>
);

export default CTASection;
