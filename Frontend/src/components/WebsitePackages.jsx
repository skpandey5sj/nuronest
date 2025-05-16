    // WebsitePackages.jsx
import React from "react";
import { useModal } from './ModalContext';

const packages = [
  {
    name: "WP-Entry",
    tagline: "Entry to Online Presence",
    pages: "Up to 05 Pages Design",
    timeframe: "1 week Timeframe",
    features: [
      "Blog Section Development",
      "Custom Layout Design",
      "Unique Homepage Design",
      "1 Unique Home Page Design Concepts",
      "Mobile-Friendly (Responsive)",
      "2 Page Revisions",
      "Live Chat / WhatsApp Chat",
      "Blog Setup",
      "SEO Readiness",
      "Google Analytics Integration",
      "30 min. CMS Training",
    ],
    badge: "Basic",
    color: "blue",
  },
  
  {
    name: "WP-Business",
    tagline: "Enhanced Web Presence",
    pages: "Up to 10 Pages Design",
    timeframe: "2 weeks Timeframe",
    features: [
      "Blog Section Development",
      "Custom Layout Design",
      "Unique Homepage Design",
      "1 Unique Home Page Design Concepts",
      "Mobile-Friendly (Responsive)",
      "2 Page Revisions",
      "Live Chat / WhatsApp Chat",
      "Blog Setup",
      "SEO Readiness",
      "Google Analytics Integration",
      "1 hour CMS Training",
    ],
    badge: "Most Popular",
    color: "blue",
  },
  {
    name: "WP-Empire",
    tagline: "Expand Online Presence",
    pages: "Up to 15 Pages Design",
    timeframe: "2 weeks Timeframe",
    features: [
      "Blog Section Development",
      "Custom Layout Design",
      "Unique Homepage Design",
      "2 Unique Home Page Design Concepts",
      "Mobile-Friendly (Responsive)",
      "3 Page Revisions",
      "Live Chat / WhatsApp Chat",
      "Blog Setup",
      "SEO Readiness",
      "Google Analytics Integration",
      "1 hour CMS Training",
    ],
    badge: "Advance",
    color: "blue",
  },
  {
    name: "WP-Dominator",
    tagline: "Dominate Online Market",
    pages: "Up to 20 Pages Design",
    timeframe: "3 weeks Timeframe",
    features: [
      "Blog Section Development",
      "Custom Layout Design",
      "Unique Homepage Design",
      "2 Unique Home Page Design Concepts",
      "Mobile-Friendly (Responsive)",
      "3 Page Revisions",
      "Live Chat / WhatsApp Chat",
      "Blog Setup",
      "SEO Readiness",
      "Google Analytics Integration",
      "1 hour CMS Training",
    ],
    badge: "Premium",
    color: "blue",
  },
];

const WebsitePackages = () => {
    const { openModal } = useModal();
    
  return (
    <div className="p-8 bg-gray-50 ">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8 mt-5">Web Servicec Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-white shadow-xl rounded-2xl p-6 border hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-blue-600">{pkg.name}</h3>
            <p className="text-sm text-gray-500">{pkg.tagline}</p>
            {pkg.badge && (
              <span className="inline-block mt-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                ⭐ {pkg.badge}
              </span>
            )}
            <div className="my-4 text-sm">
              <p>📄 {pkg.pages}</p>
              <p>⏳ {pkg.timeframe}</p>
              <p>💰 50% advance, 50% before delivery</p>
            </div>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              {pkg.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
            <button
                onClick={() => openModal('scheduleModal')}
              className={`mt-4 w-full py-2 rounded-xl text-white font-semibold hover:cursor-pointer ${
                pkg.color === "blue" ? "bg-blue-600" : "bg-red-600"
              } hover:opacity-90`}
            >
              Get Quote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsitePackages;
