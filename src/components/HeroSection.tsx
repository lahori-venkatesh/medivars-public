import React, { useState } from 'react';
import { Search, Calendar, Clock, PhoneCall, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BookCallModal } from './BookCallModal';

export function HeroSection() {
  const navigate = useNavigate();
  const [showBookCallModal, setShowBookCallModal] = useState(false);

  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert Healthcare at Your Fingertips
              <span className="block text-blue-200">Anytime, Anywhere!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Instant online consultations with certified doctors. Get medical advice, prescriptions, and health support from the comfort of your home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => navigate('/doctors')}
                className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Search className="w-5 h-5" />
                Find Your Doctor
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setShowBookCallModal(true)}
                className="group bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                Book Instant Call
                <span className="text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                  5 min
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-4 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold mb-1">1000+</div>
                <div className="text-sm text-blue-200">Verified Doctors</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-4 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold mb-1">50K+</div>
                <div className="text-sm text-blue-200">Happy Patients</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-4 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold mb-1">4.9/5</div>
                <div className="text-sm text-blue-200">Patient Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Images */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=500"
                  alt="Doctor"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 object-cover h-[280px]"
                />
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=300"
                  alt="Doctor with patient"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 object-cover h-[200px]"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=300"
                  alt="Medical consultation"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 object-cover h-[200px]"
                />
                <img
                  src="https://images.unsplash.com/photo-1638202993928-7d113c25d32f?auto=format&fit=crop&q=80&w=400&h=500"
                  alt="Doctor with stethoscope"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 object-cover h-[280px]"
                />
              </div>
            </div>
            {/* Floating Achievement Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-600 px-6 py-3 rounded-full shadow-xl font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5" />
              24/7 Care Available
            </div>
          </div>
        </div>
      </div>

      {showBookCallModal && (
        <BookCallModal onClose={() => setShowBookCallModal(false)} />
      )}
    </div>
  );
}