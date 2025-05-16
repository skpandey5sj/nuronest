import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const service = [
  {
    title: 'Design & Branding',
    description: 'Elevate your brand with stunning visuals and cohesive identity systems.',
    points: [
      'Social Media Post Identity & Guidelines',
      'Logo Design & Brand Identity',
      'Static, Reels & Carousel Designs',
    ],
    img: 'https://i.ibb.co/sJjTB8jv/187d6cd5-4bd5-4b56-bec6-fc914cbd6f44.jpg',
    icon: '🖥️',
    to : '/design-branding'
  },
  {
    title: 'Social Media & Marketing',
    description: 'Grow your audience and engagement with strategic social media management.',
    points: [
      'Social Media Management (Instagram, Facebook, LinkedIn)',
      'Ads Creation (Facebook, Instagram, Google)',
      'Content Strategy & Calendar Planning',
    ],
    img: 'https://media.istockphoto.com/id/1346575545/photo/3d-render-of-social-media-business-concept.jpg?s=612x612&w=0&k=20&c=1083IFHVsot9K6aguY59kOLCWIijhPQT69oYJB9SYS0=',
    icon: '🌐',
    to : '/social-media-marketing'
  },
  {
    title: 'AI / Data Science Solutions',
    description: 'Leverage cutting-edge AI technologies to transform your business operations.',
    points: [
      'Chatbot Development using LLMs like ChatGPT',
      'Recommendation Systems & Personalization',
      'Image Processing & Computer Vision',
    ],
    img: 'https://www.pangaeax.com/wp-content/uploads/2024/11/shutterstock_2327096251-1-1.jpg',
    icon: '🤖',
    to : '/ai-solutions'
  },
  {
    title: 'Consulting & Custom Solutions',
    description: 'Expert guidance to optimize your technology strategy and business processes.',
    points: [
      'AI & Automation Strategy',
      'Product MVP for Startups',
      'Brand + Tech Stack Consultation',
    ],
    img: 'https://readdy.ai/api/search-image?query=Professional%20consulting%20meeting%20with%20business%20experts%20around%20a%20conference%20table%20discussing%20strategy%20documents%20and%20digital%20transformation%20plans%2C%20modern%20corporate%20office%20with%20glass%20walls%2C%20business%20professionals%20in%20formal%20attire%20examining%20reports%20and%20diagrams&width=600&height=400&seq=4&orientation=landscape',
    icon: '🤖',
    to : '/consulting-custom'
  },
  {
    title: 'Web & App Development',
    description: 'Build powerful, scalable digital products with modern technologies.',
    points: [
      'Custom Websites (React, Next.js)',
      'Admin Panels & Authorization Systems',
      'Automation Tools & Workflow Solutions',
    ],
    img: 'https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg',
    icon: '⌨️',
    to : '/web-app-development'
  },
  {
    title: 'App Development Services',
    description: 'We build powerful and scalable mobile apps tailored to your business needs.',
    points: [
      'Android App Development (Java, Kotlin)',
      'Android App Development (Java, Kotlin)',
      'Progressive Web Apps (PWA)',
    ],
    img: 'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?semt=ais_hybrid&w=740',
    icon: '📲',
    to : '/app-development'
  },
]
const ServiceModal = ({ service, onClose }) => (
  <div className="fixed inset-0 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50">
  <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl p-6 mx-4 relative animate-fadeIn">
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl hover:cursor-pointer"
    >
      ✖
    </button>
    <div className="flex flex-col md:flex-row gap-6 m-4">
      <img
        src={service.img}
        alt={service.title}
        className="w-full md:w-1/2 rounded-lg object-cover  "
      />
      <div className="flex-1 mt-4">
        <h2 className="text-2xl font-bold mb-2 text-blue-600 flex items-center">
          <span className="mr-2">{service.icon}</span> {service.title}
        </h2>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2 mb-4">
          {service.points.map((point, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-green-500 mr-2">✔️</span>
              {point}
            </li>
          ))}
        </ul>
        <Link to={service.to} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition">
          Learn More
        </Link>
      </div>
    </div>
  </div>
</div>
);

const ServiceCard = ({ service, onLearnMore }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
    <img src={service.img} alt={service.title} className="h-48 w-full object-cover" />
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-semibold mb-2 flex items-center">
        <span className="mr-2">{service.icon}</span> {service.title}
      </h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="mb-4 space-y-1">
        {service.points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✔️</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onLearnMore(service)}
        className="mt-auto bg-blue-600 hover:bg-purple-700 hover:cursor-pointer text-white px-4 py-2 rounded-md"
      >
        Learn More
      </button>
    </div>
  </div>
);

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Our Comprehensive Services</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          From brand identity to advanced AI solutions, we provide end-to-end digital services to help your business thrive in the digital landscape.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 gap-8">
          {service.map((service, index) => (
            <ServiceCard key={index} service={service} onLearnMore={handleLearnMore} />
          ))}
        </div>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={handleCloseModal} />
        )}
      </div>
    </section>
  );
};

export default OurServices;
