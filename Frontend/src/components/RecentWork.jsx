import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Rebrand & Platform',
    category: 'Design & Development',
    description: 'Complete brand refresh and custom e-commerce solution with AI-powered product recommendations.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20displayed%20on%20multiple%20devices%20showing%20product%20listings%20and%20brand%20elements%2C%20professional%20product%20photography%20with%20clean%20background%2C%20elegant%20user%20interface%20design%20with%20shopping%20cart%20functionality&width=400&height=300&seq=9&orientation=landscape', // replace with your image paths
  },
  {
    title: 'Financial Services Dashboard',
    category: 'UI/UX & Data Science',
    description: 'Intuitive financial analytics dashboard with predictive modeling and real-time data visualization.',
    image: 'https://readdy.ai/api/search-image?query=Financial%20dashboard%20interface%20with%20charts%2C%20graphs%20and%20data%20visualizations%20on%20multiple%20screens%2C%20professional%20fintech%20application%20design%20with%20dark%20mode%20interface%2C%20clean%20data%20presentation%20with%20stock%20market%20and%20investment%20analytics&width=400&height=300&seq=10&orientation=landscape',
  },
  {
    title: 'Healthcare AI Assistant',
    category: 'AI Solutions',
    description: 'Conversational AI system for patient screening and appointment scheduling with EMR integration.',
    image: 'https://readdy.ai/api/search-image?query=Medical%20application%20interface%20showing%20patient%20data%20and%20AI%20assistant%20chat%20functionality%20on%20tablet%20and%20desktop%2C%20healthcare%20dashboard%20with%20clean%20medical%20design%20elements%2C%20professional%20clinical%20software%20with%20appointment%20scheduling%20system&width=400&height=300&seq=11&orientation=landscape',
  },
];

const RecentWork = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Our Recent Work</h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Explore our portfolio of successful projects across various industries and services.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-blue-600 hover:underline">View Case Study</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-blue-600 hover:bg-purple-700 hover:cursor-pointer text-white px-6 py-2 rounded-full shadow-md transition">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
