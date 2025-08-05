'use client';

import { Database, Cloud, BarChart3 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-medium text-gray-900 mb-8 tracking-tight">
            What is Big Data?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            {"Big Data refers to extremely large datasets that require advanced tools and techniques "}
            {"to capture, store, manage, and analyze. It's characterized by the three V's: Volume, "}
            {"Velocity, and Variety."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center group transform hover:scale-105 transition-all duration-500">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
              <Database className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Volume</h3>
            <p className="text-gray-600 leading-relaxed font-light">
              Massive amounts of data generated every second from various sources like social media, 
              sensors, and transactions.
            </p>
          </div>

          <div className="text-center group transform hover:scale-105 transition-all duration-500">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500">
              <Cloud className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Velocity</h3>
            <p className="text-gray-600 leading-relaxed font-light">
              The speed at which data is generated, processed, and analyzed in real-time or 
              near real-time scenarios.
            </p>
          </div>

          <div className="text-center group transform hover:scale-105 transition-all duration-500">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-indigo-500/25 transition-all duration-500">
              <BarChart3 className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Variety</h3>
            <p className="text-gray-600 leading-relaxed font-light">
              Different types of data including structured, unstructured, and semi-structured 
              data from multiple sources.
            </p>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-medium text-gray-900 mb-8 tracking-tight">
                Why Big Data Matters
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-gray-700 font-light leading-relaxed">
                    <strong className="font-medium">Data-Driven Decisions:</strong> Make informed business decisions based on 
                    comprehensive data analysis rather than intuition.
                  </p>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-gray-700 font-light leading-relaxed">
                    <strong className="font-medium">Operational Efficiency:</strong> Optimize processes, reduce costs, and 
                    improve performance through data insights.
                  </p>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-gray-700 font-light leading-relaxed">
                    <strong className="font-medium">Competitive Advantage:</strong> Stay ahead of competitors by leveraging 
                    data for innovation and strategic planning.
                  </p>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-gray-700 font-light leading-relaxed">
                    <strong className="font-medium">Customer Insights:</strong> Understand customer behavior, preferences, 
                    and needs to deliver personalized experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80" 
                alt="Big Data Infrastructure" 
                className="relative rounded-3xl shadow-2xl w-full h-80 object-cover transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
