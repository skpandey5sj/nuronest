import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold mb-4 text-blue-600 text-center">Cookie Policy</h1>
    <p className="mb-2 italic">Effective Date: [Insert Date]</p>
    <p className="mb-4">
      Welcome to Nuronest! This Cookie Policy explains how Nuronest ("we," "our," or "us") uses cookies and similar technologies on our website <span className="font-semibold">nuronest.com</span> (“Site”) to improve your experience.
    </p>
    <p className="mb-6">
      By using our Site, you agree to the use of cookies as described in this policy.
    </p>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-blue-600">1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device (computer, smartphone, tablet) when you visit a website. They help us remember your preferences, improve site performance, and provide a better user experience.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-blue-600">2. How We Use Cookies</h2>
      <ul className="list-disc pl-6">
        <li>Ensure website functionality: Enable essential features like page navigation and security.</li>
        <li>Improve performance: Understand how visitors use the website to improve functionality and content.</li>
        <li>Remember preferences: Save your settings, such as language or region.</li>
        <li>Marketing and analytics: Deliver relevant ads and measure campaign effectiveness using third-party tools (like Google Analytics).</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-blue-600">3. Types of Cookies We Use</h2>
      <ul className="list-disc pl-6">
        <li><span className="font-semibold">Essential Cookies:</span> Necessary for the website to function properly.</li>
        <li><span className="font-semibold">Performance Cookies:</span> Help us understand how visitors interact with the site.</li>
        <li><span className="font-semibold">Functional Cookies:</span> Allow the site to remember choices you make.</li>
        <li><span className="font-semibold">Targeting/Advertising Cookies:</span> Used to deliver ads relevant to you and track ad performance.</li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-blue-600">4. Third-Party Cookies</h2>
      <p>
        We may allow trusted third-party services (like Google, Facebook, or LinkedIn) to place cookies on our Site for analytics, advertising, or social media features.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-blue-600">5. Managing Cookies</h2>
      <p>
        You can control and manage cookies in your browser settings. Most browsers allow you to:
      </p>
      <ul className="list-disc pl-6">
        <li>View and delete cookies.</li>
        <li>Block third-party cookies.</li>
        <li>Block all cookies.</li>
        <li>Clear all cookies when you close the browser.</li>
      </ul>
      <p className="mt-2">
        <span className="font-semibold">Note:</span> Blocking cookies may affect your experience on our Site.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-blue-600">6. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date. We recommend checking this page regularly.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2 text-blue-600">7. Contact Us</h2>
      <p>
        Email: <a href="mailto:info@nuronest.com" className="text-blue-500 underline">info@nuronest.com</a><br />
        Phone: +91 78706 64628<br />
        Website: <a href="https://nuronest.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">nuronest.com</a>
      </p>
    </section>
  </div>
  );
};

export default CookiePolicy;
