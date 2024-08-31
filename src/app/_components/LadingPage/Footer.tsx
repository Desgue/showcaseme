import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// Footer
const FooterColumn = ({ title, links }: any) => (
  <div className="mb-8 md:mb-0">
    <h3 className="mb-4 text-lg font-semibold">{title}</h3>
    <ul>
      {links.map((link: any, index: any) => (
        <li key={index} className="mb-2">
          <a
            href={link.href}
            className="text-gray-600 transition duration-300 hover:text-blue-600"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { text: "Features", href: "#" },
      { text: "Pricing", href: "#" },
      { text: "Testimonials", href: "#" },
      { text: "FAQ", href: "#" },
    ],
    company: [
      { text: "About Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
    ],
    support: [
      { text: "Help Center", href: "#" },
      { text: "Contact Us", href: "#" },
      { text: "Status", href: "#" },
      { text: "API Documentation", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-100 py-12 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-8 w-full md:mb-0 md:w-1/4">
            <h2 className="mb-4 text-2xl font-bold text-blue-600">
              showcase.me
            </h2>
            <p className="mb-4">
              Create your professional online presence in minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Support" links={footerLinks.support} />
        </div>
        <div className="mt-8 border-t border-gray-300 pt-8 text-center">
          <p>&copy; {currentYear} showcase.me. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
