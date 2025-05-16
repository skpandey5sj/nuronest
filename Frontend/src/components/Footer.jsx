import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email');
      setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Subscription successful');
        setEmail('');
      } else {
        setMessage(data.message || 'Error occurred');
      }

      setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    } catch (error) {
      setMessage('Server error. Please try again later');
      setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <footer className="bg-[#0F172A] text-gray-300 px-6 md:px-20 py-12 text-sm">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="text-blue-500">Nuro</span>nest
          </h2>
          <p className="mb-4">
            Comprehensive digital services combining design, marketing, and AI technologies to elevate your business.
          </p>
          <div className="flex gap-4 text-xl text-white">
            <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          </div>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/design-branding" className=" hover:underline">
                Design & Branding
              </Link>
            </li>
            <li>
              <Link to="/social-media-marketing" className=" hover:underline">
                Social Media & Marketing
              </Link>
            </li>
            <li>
              <Link to="/ai-solutions" className=" hover:underline">
                AI / Data Science Solutions
              </Link>
            </li>
            <li>
              <Link to="/consulting-custom" className=" hover:underline">
                Consulting & Custom Solutions
              </Link>
            </li>
            <li>
              <Link to="/web-app-development" className=" hover:underline">
                Web & App Development
              </Link>
            </li>
            <li>
              <Link to="/app-development" className=" hover:underline">
                 App Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to='/About'>About Us</Link>
            </li>
            <li>
              <Link to='/Projects'>Projects</Link>
            </li>
            <li>
              <Link to='/Testimonials'>Testimonials</Link>
            </li>
            <li>
              <Link to='/Contact'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <form onSubmit={handleSubmit} className="flex mb-4">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your Email"
              className="p-2 rounded-l-md text-blue-600 text-bold bg-white w-full focus:outline-none"
            />
            <button className="bg-blue-600 px-4 rounded-r-md hover:bg-blue-700 text-white">
              Subscribe
            </button>
          </form>
          {message && <p className="text-red-600 mt-2">{message}</p>}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2025 Nuronest. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
          <Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
