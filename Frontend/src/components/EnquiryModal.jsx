import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from './ModalContext';

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const modal = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 20,
    },
  },
  exit: {
    x: '100vw',
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const EnquiryModal = () => {
  const { modals, closeModal } = useModal();

  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    budget: 50000,
  });
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, service, message } = form;
  
    if (name && email && service && message) {
      try {
        const response = await fetch('http://localhost:5000/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
  
        const data = await response.json();
        console.log('Server response:', data);
  
        setSuccessMsg('Message sent and saved!');
        setForm({ name: '', email: '', service: '', message: '', budget: 50000 });
  
      } catch (err) {
        console.error('Error:', err);
        setSuccessMsg('Something went wrong!');
      }
    } else {
      setSuccessMsg('Please fill all required fields.');
    }
  };
  

  const directions = {
    slideLeft: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 1 } } },
    slideRight: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 1.5 } } },
    slideUp: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1 } } },
    slideDown: { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1.6 } } },
    zoomIn: { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 2 } } },
    rotateIn: { hidden: { rotate: -180, opacity: 0 }, visible: { rotate: 0, opacity: 1, transition: { duration: 1.5 } } },
  };
    if (!modals.enquiryModal) return null;
  return (
    <AnimatePresence>
      {modals && (
        <motion.div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-40 backdrop-blur-sm z-[9999] flex justify-center items-center"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl w-full max-w-xl p-6 relative"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="flex justify-between items-center mb-6">
              <motion.h2
                className="text-2xl font-bold text-blue-600 mx-auto"
                variants={directions.slideDown}
                initial="hidden"
                animate="visible"
              >
                Enquiry Now!
              </motion.h2>
              <motion.button
                onClick={() => closeModal('enquiryModal')}
                className="absolute top-3 right-4 text-gray-500 hover:text-red-600 hover:cursor-pointer text-2xl font-bold"
                variants={directions.rotateIn}
                initial="hidden"
                animate="visible"
                style={{fontSize: "xx-large"}}
              >
                &times;
              </motion.button>
            </motion.div>
  
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border rounded-md p-2"
                variants={directions.slideLeft}
                initial="hidden"
                animate="visible"
              />
              <motion.input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border rounded-md p-2"
                variants={directions.slideRight}
                initial="hidden"
                animate="visible"
              />
              <motion.select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                variants={directions.slideUp}
                initial="hidden"
                animate="visible"
              >
                <option value="">Select a service</option>
                <option value="branding">Design & Branding</option>
                <option value="marketing">Social Media Marketing</option>
                <option value="ai">AI / Data Science</option>
                <option value="web">Web & App Development</option>
              </motion.select>
              <motion.textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message..."
                className="w-full border rounded-md p-2 h-24"
                variants={directions.zoomIn}
                initial="hidden"
                animate="visible"
              />
              <motion.div
                variants={directions.fade}
                initial="hidden"
                animate="visible"
              >
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Estimated Budget: ₹{form.budget}
                </label>
                <motion.input
                  type="range"
                  name="budget"
                  min="5000"
                  max="5000000"
                  step="5000"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full"
                  variants={directions.slideLeft}
                  initial="hidden"
                  animate="visible"
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
                variants={directions.slideUp}
                initial="hidden"
                animate="visible"
              >
                Send Message
              </motion.button>
              {successMsg && (
                <motion.p
                  className="text-green-600 font-medium text-center mt-2"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {successMsg}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
