import React from 'react';

const PrivacyPolicy = () => {
  return (

    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Privacy Policy</h1>
      <p className="mb-2 italic">Effective Date: [Insert Date]</p>
      <p className="mb-4">
        Nuronest (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit or use our website <span className="font-semibold">nuronest.com</span> and our services.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">1. Information We Collect</h2>
        <ul className="list-disc pl-6">
          <li><span className="font-semibold">Personal Information:</span> Name, email address, phone number, company name, job title, and other contact details you provide.</li>
          <li><span className="font-semibold">Usage Data:</span> IP address, browser type, pages visited, time spent on the site, and other analytics data.</li>
          <li><span className="font-semibold">Cookies and Tracking Technologies:</span> As explained in our Cookie Policy, we use cookies to enhance your browsing experience.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>Provide, operate, and improve our services.</li>
          <li>Respond to your inquiries or customer support requests.</li>
          <li>Send important updates, newsletters, or promotional material (if you opt in).</li>
          <li>Analyze site usage and improve performance.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">3. Sharing of Information</h2>
        <p>We do not sell or rent your personal information. We may share your information with:</p>
        <ul className="list-disc pl-6">
          <li>Service providers who assist in website hosting, analytics, or marketing (bound by confidentiality agreements).</li>
          <li>Legal authorities if required to comply with laws or protect rights and safety.</li>
          <li>Business partners only with your consent.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">4. Data Security</h2>
        <p>
          We implement reasonable technical and organizational measures to protect your data against unauthorized access, loss, or misuse. However, no system can be 100% secure, so we encourage you to use caution when sharing sensitive information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">5. Your Rights</h2>
        <ul className="list-disc pl-6">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Withdraw consent (if we rely on consent).</li>
          <li>Object to or restrict certain data processing activities.</li>
        </ul>
        <p className="mt-2 ">
          To exercise these rights, contact us at the email below.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">6. Data Retention</h2>
        <p>
          We retain personal data only as long as necessary for the purposes stated in this policy or to comply with legal obligations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">7. Third-Party Links</h2>
        <p>
          Our website may contain links to external sites. We are not responsible for the privacy practices of those websites and encourage you to read their privacy policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-600">8. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date. We recommend reviewing this policy periodically.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 text-blue-600">9. Contact Us</h2>
        <p>
          Email: <a href="mailto:info@nuronest.com" className="text-blue-500 underline">info@nuronest.com</a><br />
          Phone: +91 78706 64628<br />
          Website: <a href="https://nuronest.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">nuronest.com</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
