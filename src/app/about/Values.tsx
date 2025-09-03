'use client';
export default function Values() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent),linear-gradient(180deg,#f6f6f9_0%,#eef1f6_100%)]" />
      <div className="section-container py-20">
        <h2 className="text-3xl font-semibold text-center text-[#000000]">Our values</h2>
        <p className="text-center text-gray-600 mt-2 text-sm">Embracing openness, expecting excellence, and establishing trust are the principles that guide how we work.</p>

        {/* Our values cards container */}
        <div className="mt-8 mx-4 sm:mx-8 lg:mx-[16rem] grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left tall card - Openness */}
          <div className="relative rounded-2xl overflow-hidden bg-[#080c14] h-[440px] md:h-[480px] lg:h-[520px] ring-1 ring-white/10 shadow-2xl shadow-black/40">
            {/* Refined atmospheric "aurora" backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(150%_100%_at_20%_10%,#18253d_10%,#080c14_50%),radial-gradient(80%_40%_at_75%_25%,rgba(17,24,39,0.4)_20%,rgba(8,12,20,0)_60%)]" />

            {/* Background faded UI elements with blur */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-[12%] left-[30%] flex items-center space-x-3">
                <div className="w-7 h-7 rounded-full bg-white/5 blur-sm"></div>
                <div className="text-slate-400 text-sm blur-sm font-medium">Conduct.code.review</div>
              </div>
            </div>
            
            {/* Centering container for chat bubbles */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 -mt-8">
              <div className="space-y-6 opacity-50">
                  {/* First Chat Bubble */}
                  <div className="group relative">
                      <div className="flex items-start space-x-3">
                          <div className="w-7 h-7 rounded-full bg-slate-700 flex-shrink-0 ring-1 ring-white/10 flex items-center justify-center" />
                          <div className="relative w-full p-3 rounded-lg bg-[#1a1f2c]/50 backdrop-blur-md shadow-2xl shadow-black/50">
                              <div className="absolute inset-0 rounded-lg" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent), radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent)'}}></div>
                              <div className="relative flex items-center space-x-2 text-xs">
                                  <h4 className="font-semibold text-slate-100">Israel Spencer</h4>
                                  <span className="text-slate-500">5:21 PM</span>
                              </div>
                              <p className="mt-1 text-slate-300 text-sm">
    I&apos;ve pushed the latest changes – check it out.
                              </p>
                          </div>
                      </div>
                  </div>

                  {/* Second Chat Bubble */}
                  <div className="group">
                      <div className="relative flex items-start space-x-3 ml-10">
                          <div className="w-7 h-7 rounded-full bg-slate-700 flex-shrink-0 ring-1 ring-white/10 flex items-center justify-center" />
                          <div className="relative w-full p-3 rounded-lg bg-[#1a1f2c]/50 backdrop-blur-md shadow-2xl shadow-black/50">
                              <div className="absolute inset-0 rounded-lg" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent), radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent)'}}></div>
                              <div className="relative flex items-center space-x-2 text-xs">
                                  <h4 className="font-semibold text-slate-100">Forest Bode</h4>
                                  <span className="text-slate-500">5:22 PM</span>
                              </div>
                              <p className="mt-1 text-slate-300 text-sm">
    Looks great, had a quick look. Didn&apos;t find anything.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

            {/* Bottom gradient for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 z-20">
              <h3 className="text-white font-semibold">Openness</h3>
              <p className="text-white/80 text-sm mt-2 max-w-md">
    We&apos;re an open‑source first company, and believe transparency and collaboration fuels our innovation. This extends to
    everything we do, from our development processes to how we interact with our community.
              </p>
            </div>
          </div>

          {/* Right stacked column */}
          <div className="grid grid-rows-2 gap-6">
            {/* Trust card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0f1219] ring-1 ring-black/10 shadow-xl h-[300px] md:h-[228px] lg:h-[248px]">
              {/* warm radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_60%_20%,rgba(248,180,84,0.45),transparent_60%),radial-gradient(90%_70%_at_40%_10%,#1a1e28,transparent_55%)]" />
              {/* icons cluster */}
              <div className="absolute left-1/2 -translate-x-1/2 top-10 flex items-center gap-3">
                {['💬','🔒','🎧'].map((i)=> (
                  <div key={i} className="h-10 w-10 rounded-full grid place-items-center text-[18px] bg-black/55 ring-1 ring-white/10 text-white/90" aria-hidden="true">{i}</div>
                ))}
              </div>
              {/* Bottom text block */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pointer-events-none" />
                  <div className="relative z-10">
                      <h3 className="text-white font-semibold">Trust</h3>
                      <p className="text-white/80 text-sm mt-2">
    We&apos;re committed to building lasting relationships with our community and partners, based on trust and demonstrated results.
                      </p>
                  </div>
              </div>
            </div>

            {/* Excellence card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0b1014] ring-1 ring-black/10 shadow-xl h-[300px] md:h-[228px] lg:h-[248px]">
              {/* teal glow grid */}
              <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_10%,rgba(34,211,238,0.22),transparent_60%),radial-gradient(70%_60%_at_50%_65%,rgba(16,185,129,0.20),transparent_60%),linear-gradient(180deg,#0a0f14_0%,#0b1014_100%)]" />
              {/* faux tiles */}
              <div className="absolute inset-x-0 top-10 mx-auto max-w-[520px] grid grid-cols-3 gap-3 px-6">
                <div className="h-24 rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm grid place-items-center text-white/80">Zapp!</div>
                <div className="h-24 rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm grid place-items-center">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-white/80 to-white/60 opacity-80" />
                </div>
                <div className="h-24 rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm grid place-items-center text-white/80">docs</div>
              </div>
              {/* Bottom text block */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pointer-events-none" />
                  <div className="relative z-10">
                      <h3 className="text-white font-semibold">Excellence</h3>
                      <p className="text-white/80 text-sm mt-2">
    We&apos;re dedicated to engineering exceptional experiences for developers, ensuring our tools and resources are powerful,
    intuitive, and enjoyable to use.
                      </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}