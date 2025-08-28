import { FaArrowRight, FaInfoCircle } from "react-icons/fa";

export default function AboutSection() {
  return (
    <div className="relative min-w-[320px] max-w-[2000px] bg-gradient-to-br from-[#f0f8ff] via-white to-[#f0f4ff] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Single Image Column */}
          <div className="flex items-center justify-center relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border-2 border-[#4A595D]/20">
              <img
                src="/images/careerprofile.png"
                alt="Team members"
                className="w-full h-auto max-w-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163B5E]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8 lg:py-8" style={{ fontFamily: 'Alexandria, sans-serif' }}>
            <div className="space-y-1">
              <span className="text-sm font-medium text-[#4A595D] tracking-wider uppercase">About Us</span>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#1B2A36] leading-tight">
                Our Story
              </h2>
            </div>
            
            <div className="space-y-6 text-[#4A595D] leading-relaxed">
              <p className="text-lg">
                CodeKrafters is a boutique IT servicing company offering cutting-edge Web 2.5, 3.0, and 3.5 solutions, along with contract-based augmentation employment services.
              </p>
              <p className="text-lg">
                With minimal hierarchy, every project gets the direct involvement of our CXOs and core team—ensuring speed, transparency, and true personalization.
              </p>
              <p className="text-lg">
                Operating primarily remotely, and with a presence in Mumbai and Indore, we blend flexibility with focus to deliver tech solutions that are lean, agile, and high-impact.
              </p>
              <p className="text-lg font-semibold text-[#1B2A36]">
                Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                className="inline-flex items-center gap-2 px-8 py-3 text-base font-medium text-white bg-[#1B2A36] rounded-lg hover:bg-[#4A595D] focus:outline-none transition-all duration-300 border-2 border-transparent hover:border-[#4A595D]/20"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                <span>Read our principles</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
              <button 
                className="inline-flex items-center gap-2 px-8 py-3 text-base font-medium text-[#1B2A36] bg-transparent rounded-lg hover:bg-[#1B2A36]/5 focus:outline-none transition-all duration-300 border-2 border-[#4A595D]/30"
                style={{ fontFamily: 'Alexandria, sans-serif' }}
              >
                <span>About us</span>
                <FaInfoCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
