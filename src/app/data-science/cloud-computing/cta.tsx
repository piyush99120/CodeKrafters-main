'use client'
import { ArrowRight } from 'lucide-react';

export default function Cta() {
  return (
    <div className="flex items-center justify-center">
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white w-full flex items-center justify-center min-h-[45vh]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the next step in your cloud journey with me and unlock the full potential of your business with expert guidance and proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center px-3 py-1.5 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="inline-flex items-center px-4 py-1.5 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm">
              View Case Studies
            </button>
          </div>
          </div>
      </section>
    </div>
  );
}