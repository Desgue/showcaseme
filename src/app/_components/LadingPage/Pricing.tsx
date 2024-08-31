import { Check } from "lucide-react";

// Pricing Section
const PricingTier = ({ name, price, features, isRecommended }: any) => (
  <div
    className={`rounded-lg bg-white p-6 shadow-lg ${isRecommended ? "border-2 border-blue-600" : ""}`}
  >
    <h3 className="mb-4 text-2xl font-bold">{name}</h3>
    <p className="mb-6 text-4xl font-bold">
      ${price}
      <span className="text-xl font-normal">/mo</span>
    </p>
    <ul className="mb-6">
      {features.map((feature: any, index: any) => (
        <li key={index} className="mb-2 flex items-center">
          <Check className="mr-2 h-5 w-5 text-green-500" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`w-full rounded px-4 py-2 ${isRecommended ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"} font-semibold`}
    >
      {isRecommended ? "Get Started" : "Choose Plan"}
    </button>
  </div>
);

const PricingSection = () => {
  const pricingTiers = [
    {
      name: "Free",
      price: 0,
      features: ["1 showcase page", "Basic analytics", "Limited customization"],
      isRecommended: false,
    },
    {
      name: "Pro",
      price: 9,
      features: [
        "5 showcase pages",
        "Advanced analytics",
        "Full customization",
        "Priority support",
      ],
      isRecommended: true,
    },
    {
      name: "Business",
      price: 29,
      features: [
        "Unlimited showcase pages",
        "Team collaboration",
        "Custom domain",
        "API access",
      ],
      isRecommended: false,
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Choose Your Plan
        </h2>
        <p className="mb-12 text-center text-xl">
          Select the perfect plan for your needs
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
