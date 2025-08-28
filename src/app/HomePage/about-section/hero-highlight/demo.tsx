"use client";
import { HeroHighlight } from "./hero-highlight";

export default function AboutSectionDemo() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-transparent">
      <HeroHighlight className="relative w-full min-h-screen overflow-visible pt-[-10px] pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content Card - Left */}
            <div className="lg:col-span-7 xl:col-span-8 relative">
              <div 
                className="relative z-10 p-8 md:p-10 lg:p-12 border-2 border-[#4A595D] rounded-3xl min-h-[525px] flex flex-col"
                style={{
                  fontFamily: "Alexandria",
                  background: "linear-gradient(2deg, rgba(22, 59, 94, 0.73) 0%, rgba(14, 27, 36, 0.81) 12%)",
                }}
              >
                <div className="flex  ">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="w-[150px] h-[150px] object-cover mr-[20px]"
                />
                <div className="flex-col">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#C3E8EE] leading-tight mb-6">
                    <span className="block">DESIGN BEYOND</span>
                    <span className="block">THE SCREEN</span>
                  </h1>
                  <p className="text-lg md:text-xl text-[#B8DBE1] max-w-3xl leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
                    excepturi minus commodi aspernatur totam vel? Consequuntur,
                    doloremque inventore. Exercitationem ut repellendus eos inventore
                    nesciunt aliquam itaque quae impedit similique tenetur?
                  </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom Left Floating Card */}
              <div 
                className="absolute bottom-0 left-0 right-0 lg:right-auto lg:w-[calc(100%)] h-[465px] bg-[#1B2A36] border-2 border-[#4A595D] rounded-3xl p-6 flex flex-col items-center justify-center z-20"
                style={{ 
                  fontFamily: "Alexandria",
                  margin: '0 0',
                  maxWidth: 'calc(100% )'
                }}
              >
                <span className="text-2xl font-bold text-[#C3E8EE] mb-3">Bottom Left</span>
                <p className="text-[#B8DBE1] text-center max-w-md">
                  This is a big height, medium width container in the bottom left.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
              {/* Profile Image Card */}
              <div 
                className="w-full h-80 lg:h-96 rounded-3xl overflow-hidden border-2 border-[#4A595D] flex-shrink-0"
                style={{
                  background: "radial-gradient(circle, rgba(22, 59, 94, 0.73) 0%, rgba(14, 27, 36, 0.81) 5%)",
                }}
              >
                
              </div>

              {/* Profile Info Card */}
              <div 
                className="p-6 rounded-3xl border-2 border-[#4A595D] flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(22,59,94,0.73), rgba(14,27,36,0.81))",
                }}
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#C3E8EE] mb-1">Sonam Jain</h2>
                  <p className="text-lg text-[#B8DBE1]">Founder and CEO</p>
                </div>
              </div>

              {/* Grid Boxes */}
              <div className="grid grid-cols-2 gap-4 flex-shrink-0">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="aspect-square rounded-2xl border-2 border-[#4A595D] flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(22,59,94,0.73), rgba(14,27,36,0.81))",
                    }}
                  >
                    <span className="text-[#C3E8EE] font-bold">Box {item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
}