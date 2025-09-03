'use client';
export default function Journey() {
  const timelineItems = [
    {y:"2016",t:"Invertase is founded as a GitHub organization developing open-source software for React Native"},
    {y:"2018",t:"React Native SDK is featured at conferences"},
    {y:"2020",t:"Google Partners with Invertase to develop FlutterFire"},
    {y:"2023",t:"Hosts RNFirebase Fest and FlutterFire Fest"},
    {y:"2025",t:"Mission to transform cross‑platform developer experiences"},
  ];

  return (
    <section className="relative text-black">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f6f6f9_0%,#eef1f6_100%)]">
        <div className="pointer-events-none absolute -top-8 left-10 h-40 w-40 rounded-full bg-slate-300/20 blur-2xl" />
        <div className="pointer-events-none absolute top-0 right-10 h-32 w-32 rounded-full bg-cyan-300/20 blur-2xl" />
      </div>
      <div className="section-container py-20">
        <h2 className="text-3xl font-semibold text-center">Our journey</h2>
        <div className="mt-12 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-4 h-[2px] bg-gray-300" />
            <div className="grid grid-cols-5 gap-6">
              {timelineItems.map((i)=> (
                <div key={i.y} className="text-center px-3">
                  <div className="mx-auto mb-3 h-3 w-3 rounded-full bg-rose-500 shadow" />
                  <div className="font-semibold">{i.y}</div>
                  <p className="mt-2 text-sm text-gray-600">{i.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile vertical timeline */}
        <div className="md:hidden mt-10 space-y-6">
          {timelineItems.map((i)=> (
            <div key={i.y} className="relative pl-6">
              <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-rose-500" />
              <div className="font-semibold">{i.y}</div>
              <p className="text-sm text-gray-700">{i.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}