import React from 'react';
import { Shield, Clock, Users, Heart } from 'lucide-react';

export function ValueProposition() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose MediBook?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're committed to providing the best healthcare experience for our patients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Verified Doctors</h3>
            <p className="text-gray-600 dark:text-gray-300">All our doctors are verified professionals with proven track records</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">24/7 Booking</h3>
            <p className="text-gray-600 dark:text-gray-300">Book appointments anytime, anywhere with our easy-to-use platform</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Large Network</h3>
            <p className="text-gray-600 dark:text-gray-300">Access to a wide network of specialists across multiple disciplines</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Patient Care</h3>
            <p className="text-gray-600 dark:text-gray-300">Dedicated support team to assist you throughout your healthcare journey</p>
          </div>
        </div>
      </div>
    </section>
  );
}