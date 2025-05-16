import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useModal } from './ModalContext';
const data = [
  { name: 'Design & Branding', value: 20 },
  { name: 'Social Media & Marketing', value: 20 },
  { name: 'AI / Data Science Solutions', value: 20 },
  { name: 'Consulting & Custom Solutions', value: 20 },
  { name: 'Web & App Development', value: 10 },
  { name: 'App Development Services', value: 10 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00C49F', '#FFBB28'];

const renderCustomizedLabel = ({ percent }) => `${(percent * 100).toFixed(0)}%`;

const features = [
  {
    icon: '🎯',
    title: 'Expert Team',
    description:
      'Our multidisciplinary team brings together experts in design, marketing, AI, and development.',
  },
  {
    icon: '🚀',
    title: 'Innovative Approach',
    description:
      'We stay at the forefront of technology and design trends to deliver cutting-edge solutions.',
  },
  {
    icon: '📈',
    title: 'Results-Driven',
    description:
      'Our focus is on delivering measurable results that impact your bottom line.',
  },
];

const WhyChooseUs = () => {
const { openModal } = useModal();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left side */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Why Choose Nuronest?</h2>
          <p className="text-gray-600 mb-6">
            We combine creative design, strategic marketing, and cutting-edge AI technologies
            to deliver comprehensive digital solutions that drive real business results.
          </p>

          <div className="space-y-4 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="text-2xl mr-4">{feature.icon}</div>
                <div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button  onClick={() => openModal('scheduleModal')} className="bg-blue-600 hover:bg-purple-700 hover:cursor-pointer text-white px-6 py-2 rounded-md transition duration-300">
            Schedule a Consultation
          </button>
        </div>

        {/* Right side (Pie Chart) */}
        <div className="w-full h-80">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
                label={renderCustomizedLabel}
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
