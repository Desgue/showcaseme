import { ArrowRight } from "lucide-react";

// Hero Section
export default function HeroSection() {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-row items-center">
          <div className="w-1/2 pl-8">
            <h1 className="mb-2 text-4xl font-bold text-blue-600 sm:text-5xl lg:text-6xl">
              Create Your Professional Online Presence
            </h1>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 sm:text-3xl lg:text-4xl">
              Stand Out in the Digital World
            </h2>
            <p className="mb-8 text-xl text-gray-700">
              Showcase your work, skills, and services with a beautiful,
              customizable page in minutes.
            </p>
            <button className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="h-1/2 w-1/2 pr-8">
            <img
              src="/iphone15-left(2).png"
              alt="Showcase Example"
              className="ml-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
