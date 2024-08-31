import { BarChart, Globe, Layout, Palette } from "lucide-react";

// Feature Section
const FeatureItem = ({ icon: Icon, title, description }: any) => (
  <div className="flex h-full flex-col items-center rounded-lg bg-white p-6 shadow-md">
    <Icon className="mb-4 h-12 w-12 text-blue-600" />
    <h3 className="mb-2 text-center text-xl font-semibold">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      icon: Palette,
      title: "Customizable Design",
      description:
        "Personalize your page with our intuitive drag-and-drop interface and wide range of themes.",
    },
    {
      icon: Layout,
      title: "Professional Templates",
      description:
        "Choose from a variety of professionally designed templates to kickstart your online presence.",
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description:
        "Track your page's performance with our built-in analytics and visitor insights.",
    },
    {
      icon: Globe,
      title: "Custom Domain",
      description:
        "Use your own domain name to create a truly personalized web address for your showcase.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-blue-600">
          Key Features
        </h2>
        <p className="mb-12 text-center text-xl text-gray-700">
          Discover what makes showcase.me the best choice for your online
          presence
        </p>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeatureSection;
