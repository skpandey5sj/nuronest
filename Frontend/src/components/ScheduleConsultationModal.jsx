import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from './ModalContext';

const directions = {
  slideLeft: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6 } } },
  slideRight: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6 } } },
  slideDown: { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } },
  slideUp: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } },
  zoomIn: { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } } },
};

const ScheduleConsultationModal = () => {

const { modals, closeModal } = useModal();

  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [success, setSuccess] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, service, date, time } = form;
  
    if (name && email && service && date && time) {
      fetch('http://localhost:5000/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
        .then(res => res.json())
        .then(data => {
          setSuccess('Consultation scheduled successfully!');
          setForm({ name: '', email: '', service: '', date: '', time: '', message: '' });
        })
        .catch(err => {
          setSuccess('Something went wrong. Try again.');
          console.error(err);
        });
    } else {
      setSuccess('Please fill all required fields.');
    }
  };
  if (!modals.scheduleModal) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-6 rounded-xl max-w-lg w-full shadow-2xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 70 }}
        >
          <motion.div className="flex justify-between items-center mb-5">
            <motion.h2 className="text-2xl font-semibold text-indigo-600 mx-auto" variants={directions.slideDown} initial="hidden" animate="visible">
              Schedule a Consultation
            </motion.h2>
            <motion.button
               onClick={() => closeModal('scheduleModal')}
              className="text-gray-600 text-2xl hover:text-red-600 hover:cursor-pointer"
              variants={directions.slideRight}
              initial="hidden"
              animate="visible"
              style={{fontSize:"xx-large"}}
            >
              &times;
            </motion.button>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border p-2 rounded"
              variants={directions.slideLeft}
              initial="hidden"
              animate="visible"
            />
            <motion.input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border p-2 rounded"
              variants={directions.slideRight}
              initial="hidden"
              animate="visible"
            />
            <motion.select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              variants={directions.zoomIn}
              initial="hidden"
              animate="visible"
            >
              <option value="">Select Service</option>
              <option value="branding">Design & Branding</option>
              <option value="development">Web & App Development</option>
              <option value="marketing">Marketing & Ads</option>
              <option value="consulting">AI / Tech Consulting</option>
            </motion.select>
            <div className="flex gap-4">
              <motion.input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-1/2 border p-2 rounded"
                variants={directions.slideUp}
                initial="hidden"
                animate="visible"
              />
              <motion.input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-1/2 border p-2 rounded"
                variants={directions.slideDown}
                initial="hidden"
                animate="visible"
              />
            </div>
            <motion.textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message (Optional)"
              className="w-full border p-2 rounded"
              rows={3}
              variants={directions.zoomIn}
              initial="hidden"
              animate="visible"
            />
            <motion.button
              type="submit"
              className="w-full hover:cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded shadow-md"
              variants={directions.slideUp}
              initial="hidden"
              animate="visible"
            >
              Schedule Now
            </motion.button>
            {success && (
              <motion.p
                className="text-green-600 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {success}
              </motion.p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScheduleConsultationModal;
