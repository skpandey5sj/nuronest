import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const testimonialsData = [
  {
    name: 'Pradeep Tiwari',
    company: 'Luxor International.',
    feedback:
      'Nuronest is one of the best web designing company in market and two things which makes them different from market Budget & Service, Budget is very competitive in comparison to market and Services was very personal level',
    image: 'https://www.cssfounder.com/img/icon-3.png',
  },
  {
    name: 'A R Sahni, General Manager,',
    company: 'Exotica Housing',
    feedback:
      'I really appreciate quick response from Owner of this company, Nuronest Pvt Ltd is well professional company for website design, We are happy with our website Exotica Housing. All the best.',
    image: 'https://www.cssfounder.com/img/icon-5.png',
  },
  {
    name: 'Group Captain Sanjay Kr. Pandey',
    company: 'Indain Army',
    feedback:
      'I am 100% Satisfied with Team Nuronest they provide good looking website on time also they are doing great job by feeding slum children by their own profit I highly Recommend.',
    image: 'https://www.cssfounder.com/img/icon-4.png',
  },
   {
    name: 'Vinod Chaudhary',
    company: 'Director at Mittal Software Labs Ltd',
    feedback:
      'I was impressed with Nuronest  from start to finish. They listened to our ideas and brought them to life with a stunning website design. Their dedication to customer satisfaction is evident in every detail.  I highly recommend their services!',
    image: 'https://www.cssfounder.com/img/vinod_passport.png',
  },
   {
    name: 'Iqbal Khan',
    company: 'Director',
    feedback:
      'Nuronest is hands down the best website designing company in India.  If you"re looking for top-tier web design services in Dubai, CSS Founder is the company to trust',
    image: 'https://www.cssfounder.com/img/IqbalKhan.png',
  },
   {
    name: 'Majid Siddique',
    company: 'CTO',
    feedback:
      'I am 100% Satisfied with Team Nuronest they provide good looking website on time also they are doing great job by feeding slum children by their own profit I highly Recommend.',
    image: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
  },
];

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', feedback: '', image: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTestimonials([...testimonials, formData]);
    setFormData({ name: '', company: '', feedback: '', image: '' });
    setShowModal(false);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20 relative">
      {/* Add Review Button */}
      <button
        onClick={() => setShowModal(true)}
        className="absolute  top-6  right-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add Review
      </button>

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mt-2">What Our Clients Say</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Don’t just take our word for it. Here’s what our clients have to say about working with us.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="text-blue-600 text-3xl mb-4">“</div>
            <p className="text-gray-700 mb-6">{testimonial.feedback}</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <span className="text-sm text-gray-500">{testimonial.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Add Your Testimonial</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <textarea
                name="feedback"
                placeholder="Your Feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="url"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialSection;
