import React from 'react';
import { Search, Calendar, Clock, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/doctors', { state: { openBooking: true } });
  };

  return (
    <div className="relative bg-blue-600 dark:bg-blue-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070"
          alt="Medical background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Book appointments with the best doctors near you in just a few clicks.
            Quality healthcare made simple and accessible.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/doctors')}
              className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 px-8 py-3 rounded-md font-semibold transition-colors flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Find a Doctor
            </button>
            <button 
              onClick={handleBookCall}
              className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Book a Call
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 dark:bg-gray-800 backdrop-blur-lg rounded-lg p-6 text-center">
            <Search className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find Doctors</h3>
            <p className="text-gray-100 dark:text-gray-300">Search and filter through our network of qualified healthcare professionals.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 dark:bg-gray-800 backdrop-blur-lg rounded-lg p-6 text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Book Appointments</h3>
            <p className="text-gray-100 dark:text-gray-300">Schedule appointments at your convenience, 24/7.</p>
          </div>
          
          <div className="bg-white bg-opacity-10 dark:bg-gray-800 backdrop-blur-lg rounded-lg p-6 text-center">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Confirmation</h3>
            <p className="text-gray-100 dark:text-gray-300">Receive immediate confirmation and reminders for your appointments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}