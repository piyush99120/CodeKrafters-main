'use client';
import Image from "next/image";

export default function Culture() {
  const participants = [
    {n:'Ben Cook',i:'assets/images/ben_cook.jpg',type:'img'},
    {n:'Nabeel Parker',i:'NP',type:'init'},
    {n:'Alex Wong',i:'assets/images/alex_wong.jpg',type:'img'},
    {n:'Darren Ackers',i:'DA',type:'init'},
    {n:'Guillaume Bernos',i:'assets/images/Guillaume_Bernos.jpg',type:'img'},
    {n:'Gustavo Ricou',i:'GR',type:'init'},
    {n:'Nastia Piven',i:'NP',type:'init'},
    {n:'Rakesh Mohan',i:'assets/images/rakesh_mohan.jpg',type:'img'},
    {n:'Elliot Hesp',i:'assets/images/elliot_hesp.jpg',type:'img'},
  ];

  return (
    <section className="relative text-black">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f6f6f9_0%,#eef1f6_100%)]">
        <div className="pointer-events-none absolute -top-6 left-16 h-44 w-44 rounded-full bg-slate-300/20 blur-2xl" />
        <div className="pointer-events-none absolute top-10 right-24 h-36 w-36 rounded-full bg-cyan-300/20 blur-2xl" />
      </div>
      <div className="section-container py-20">
        <h2 className="text-3xl font-semibold text-center">Our culture</h2>
        <p className="text-center text-gray-600 mt-2 text-sm max-w-3xl mx-auto">
          We embrace freedom, flexibility, and global collaboration. As a fully remote company, our team is empowered to do their best work, from anywhere in the world. Together we&apos;re transforming developer experiences.
        </p>
        <div className="mt-10 mx-auto max-w-5xl rounded-[28px] bg-white shadow-2xl ring-1 ring-black/5 p-3 md:p-4">
          <div className="rounded-[22px] bg-white ring-1 ring-black/5 p-3 md:p-4 md:h-[560px]">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:h-full">
              {/* Left large tile */}
              <div className="md:col-span-2 h-64 md:h-full rounded-2xl overflow-hidden bg-gray-200 relative">
                <Image
                  src="/assets/images/georgina_hesp.jpg"
                  alt="Georgina Hesp"
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
                <div className="absolute left-3 top-3 rounded-full bg-black/60 text-white text-[12px] px-3 py-1">Georgina Hesp 🇬🇧</div>
                {/* Controls */}
                <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3">
                  {['◼','🎤','✕','📷','⋯'].map((c,i)=> (
                    <div key={i} className={`h-10 w-10 rounded-full grid place-items-center text-white shadow ${i===2? 'bg-rose-500' : 'bg-black/70'}`}>{c}</div>
                  ))}
                </div>
              </div>
              {/* Right 3x3 grid */}
              <div className="md:col-span-2 grid grid-cols-3 gap-3">
                {participants.map((p,idx)=> (
                  <div key={idx} className="relative">
                    <div className={`aspect-square rounded-xl overflow-hidden ${p.type==='img' ? 'bg-gray-300' : 'bg-gradient-to-br from-slate-600 to-slate-800 grid place-items-center'}`}>
                      {p.type==='init' && (
                        <div className="text-2xl font-semibold text-white/90">{p.i}</div>
                      )}
                      {p.type==='img' && (
                        <Image
                          src={`/${p.i}`}
                          alt={p.n}
                          className="w-full h-full object-cover"
                          width={400}
                          height={400}
                        />
                      )}
                      {/* corner mic icon */}
                      <div className="absolute right-2 top-2 h-6 w-6 rounded-full grid place-items-center text-xs text-white bg-black/60">🔇</div>
                    </div>
                    <div className="mt-1 text-[12px] text-gray-700 truncate">{p.n}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}