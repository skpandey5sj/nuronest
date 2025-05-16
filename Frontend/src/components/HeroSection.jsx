import React from 'react'
import OurServices from './OurServices'
import WhyChooseUs from './WhyChooseUs'
import RecentWork from './RecentWork'
import TestimonialSection from './TestimonialSection '
import Footer from './Footer'
import ContactSection from './ContactSection'
import { Link } from 'react-router-dom'
import { useModal } from './ModalContext';

const HeroSection = () => {
 const { openModal } = useModal();
 
    return (
        <div className="relative w-full h-screen">
             
             <video
                autoPlay
                muted
                loop
                playsInline
                className="relative top-0 left-0 w-full h-full object-cover"
            >
                <source src="homepage.mp4" type="video/mp4" />
                
            </video>
               <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl text-white font-extrabold mb-4 animate-fade-in-down transition-all duration-700">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Transform Your Digital Presence
                        </span>
                        <br />
                        <span className="text-white">with AI-Powered Solutions</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 max-w-2xl animate-fade-in-up transition-all duration-700">
                        Comprehensive digital services combining cutting-edge design, strategic marketing,
                        and advanced AI technologies to elevate your business.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <button onClick={() => openModal('scheduleModal')} className="bg-blue-600 hover:bg-purple-700 hover:cursor-pointer transition transform hover:scale-105 text-white px-6 py-2 rounded-full shadow-lg">
                          Contact Now !
                        </button>
                        <Link to='/webpackage' className="bg-white hover:bg-gray-200 transition transform hover:scale-105 text-black px-6 py-2 rounded-full shadow-lg">
                             Web Packages
                        </Link>
                    </div>
                </div>

        <OurServices />
        <WhyChooseUs />
        <RecentWork />
        <TestimonialSection />
        <ContactSection />
        <Footer />
        </div>

    )
}

export default HeroSection
