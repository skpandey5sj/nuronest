import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaClock, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    budget: 50000, // initial budget
  });
  

  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.service && form.message) {
      console.log(form);
      
      setSuccessMsg('Message sent successfully!');
      setForm({ name: '', email: '', service: '', message: '' });
    } else {
      setSuccessMsg('Please fill in all required fields.');
    }
  };

  return (
    <section className="bg-white px-6 md:px-20 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Ready to transform your digital presence? Contact us today to discuss your project and how we can help you achieve your goals.
          </p>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-xl text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p>info@nuronest.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-xl text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className='text-center'>+91-8874898418</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-xl text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Business Hours</h4>
                <p>Monday - Friday: 9am - 6pm EST</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8 text-lg text-blue-600">
            <FaLinkedin className="hover:text-blue-800 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaFacebook className="hover:text-blue-700 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white shadow-xl p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Enquiry Now !</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">* Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border rounded-md p-2 focus:ring-2 ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">* Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border rounded-md p-2 focus:ring-2 ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Service Interested In</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border rounded-md p-2 bg-white"
              >
                <option value="">Select a service</option>
                <option value="branding">Design & Branding</option>
                <option value="marketing">Social Media Marketing</option>
                <option value="ai">AI / Data Science</option>
                <option value="web">Web & App Development</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">* Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full border rounded-md p-2 focus:ring-2 ring-blue-400"
              />
            </div>

            <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Estimated Budget (₹)
                </label>
                <input
                  type="range"
                  name="budget"
                  min="5000"
                  max="5000000"
                  step="5000"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full"
                />
                <div className="text-center md:text-left text-sm text-gray-600 mt-1">
                  ₹{form.budget}
                </div>
              </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white py-2 rounded-md font-semibold hover:opacity-90"
            >
              Send Message
            </button>

            {successMsg && <p className="text-green-600 text-sm mt-2">{successMsg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
