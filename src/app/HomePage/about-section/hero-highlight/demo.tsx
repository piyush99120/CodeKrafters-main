"use client";
import { HeroHighlight } from "./hero-highlight";

export default function AboutSectionDemo() {
  return (
    <>
      <HeroHighlight className="absolute inset-0 min-h-screen overflow-hidden">
        <div className="flex flex-row items-start justify-center w-full h-full">
          {/* top left container */}
          <div
            className="container mx-auto max-w-[85rem] px-4 relative z-10 bg-transparent border-2 border-[#4A595D] rounded-[30px] mt-10 ml-5"
            style={{
              fontFamily: "Alexandria",
              height: "550px",
              background:
                "linear-gradient(2deg,rgba(22, 59, 94, 0.73) 0%, rgba(14, 27, 36, 0.81) 12%)",
            }}
          >
            <h1 className="font-bold mb-25 ml-5 text-[98px] text-[#C3E8EE]">
              <div>DESIGN BEYOND </div>
              <div>THE SCREEN</div>
            </h1>
            <p className="mb-15 ml-5 text-[20px] text-[#B8DBE1]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              excepturi minus commodi aspernatur totam vel? Consequuntur,
              doloremque inventore. Exercitationem ut repellendus eos inventore
              nesciunt aliquam itaque quae impedit similique tenetur?
            </p>
          </div>

          {/* right column container */}
          <div className="flex flex-col space-y-4 mt-10">
            {/* top right container */}
            <div
              className="container mx-auto w-120 px-4 relative z-10 border-2 border-[#4A595D] rounded-[30px] mr-5"
              style={{
                fontFamily: "Alexandria",
                height: "359px",
                background:
                  "radial-gradient(circle,rgba(22, 59, 94, 0.73) 0%, rgba(14, 27, 36, 0.81) 5%)",
              }}
            >
              <img
                src="/images/logo.png"
                alt="Description of the image"
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>

            {/* right container */}
            <div
              className="w-120 px-4 relative z-10 bg-transparent border-2 border-[#4A595D] rounded-[30px] mt-3 mr-5"
              style={{
                fontFamily: "Alexandria",
                height: "361px",
              }}
            >
              <h2
                className="text-27 font-bold mb-4"
                style={{
                  color: "#C3E8EE",
                }}
              >
                Sonam Jain
              </h2>
              <p
                className="text-17 mb-4"
                style={{
                  color: "#B8DBE1",
                }}
              >
                Founder and CEO
              </p>
            </div>

            {/* bottom right containers*/}
            <div className="grid grid-cols-2 gap-4 mt-4 mr-5">
              <div
                className="w-[230px] h-[230px] bg-transparent border-2 border-[#4A595D] rounded-[30px] flex items-center justify-center"
                style={{
                  fontFamily: "Alexandria",
                  background:
                    "linear-gradient(135deg, rgba(22,59,94,0.73), rgba(14,27,36,0.81))",
                }}
              >
                <span className="text-[#C3E8EE] font-bold text-sm">Box 1</span>
              </div>
              <div
                className="w-[230px] h-[230px] bg-transparent border-2 border-[#4A595D] rounded-[30px] flex items-center justify-center"
                style={{
                  fontFamily: "Alexandria",
                  background:
                    "linear-gradient(135deg, rgba(22,59,94,0.73), rgba(14,27,36,0.81))",
                }}
              >
                <span className="text-[#C3E8EE] font-bold text-sm">Box 2</span>
              </div>
              <div
                className="w-[230px] h-[230px] bg-transparent border-2 border-[#4A595D] rounded-[30px] flex items-center justify-center"
                style={{
                  fontFamily: "Alexandria",
                  background:
                    "linear-gradient(135deg, rgba(22,59,94,0.73), rgba(14,27,36,0.81))",
                }}
              >
                <span className="text-[#C3E8EE] font-bold text-sm">Box 3</span>
              </div>
              <div
                className="w-[230px] h-[230px] bg-transparent border-2 border-[#4A595D] rounded-[30px] flex items-center justify-center"
                style={{
                  fontFamily: "Alexandria",
                  background:
                    "linear-gradient(135deg, rgba(22,59,94,0.73), rgba(14,27,36,0.81))",
                }}
              >
                <span className="text-[#C3E8EE] font-bold text-sm">Box 4</span>
              </div>
            </div>

            {/* Bottom left container */}
            <div
              className="absolute left-0 h-[71vh] w-[28vw] min-w-[260px] bg-[#1B2A36]  z-30 flex flex-col items-center justify-center border-2 border-[#4A595D] rounded-[30px] ml-5 mt-145"
              style={{
                fontFamily: "Alexandria",
              }}
            >
              <span className="text-[#C3E8EE] font-bold text-2xl mb-2">
                Bottom Left
              </span>
              <p className="text-[#B8DBE1] text-base px-4 text-center">
                This is a big height, medium width container in the bottom left.
              </p>
            </div>
          </div>
        </div>
      </HeroHighlight>
    </>
  );
}
