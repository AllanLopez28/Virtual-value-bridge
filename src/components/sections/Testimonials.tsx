import Image from "next/image";
import Link from "next/link";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const secondaryTestimonials = [
    {
      quote: "Our VVBridge specialist runs the entire tenant inbox and AP queue. We added 400 doors without a single new local hire.",
      achievement: "+400 doors, 0 new admin hires",
      name: "Mark Thompson",
      title: "COO, Cedar PM (TX)",
      initial: "M",
    },
    {
      quote: "Felt like hiring locally — but for a third of the cost. The CST coverage matters more than I expected.",
      achievement: "Cut admin time by 40%",
      name: "Renee Carter",
      title: "Owner, Skyline Realty (FL)",
      initial: "R",
      color: "bg-emerald-500",
    },
    {
      quote: "Trained in AppFolio from day one. Reconciliations that used to take us two weeks now wrap in three days.",
      achievement: "Close cycle: 14d -> 3d",
      name: "Daniel Reyes",
      title: "Ops Director, Skyview PM (CA)",
      initial: "D",
      color: "bg-blue-800",
    },
    {
      quote: "Our owners noticed the difference. Reports are on time, and maintenance dispatch runs like a machine.",
      achievement: "100% on-time reports",
      name: "Sarah Jenkins",
      title: "Founder, Apex Properties",
      initial: "S",
      color: "bg-purple-600",
    },
  ];

  return (
    <section className="w-full relative flex flex-col items-center bg-slate-50">
      
      {/* Block 1: Header (Blue Background) */}
      <div className="w-full bg-primary pt-24 pb-48 px-4 flex justify-center">
        <div className="container mx-auto max-w-6xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-200 mb-6 border border-white/20 shadow-sm">
            • TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight flex flex-col items-start leading-[1.1] cursor-default">
            <span>Success stories from</span>
            <span className="inline-block bg-accent text-secondary px-4 py-1 md:py-2 mt-2 -rotate-1 rounded-sm hover:rotate-0 transition-transform duration-300 shadow-md">
              companies like yours.
            </span>
          </h2>
          <div className="flex items-center gap-3 cursor-default group">
            <div className="flex text-yellow-400 transition-transform duration-300 group-hover:scale-105">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-semibold group-hover:text-white transition-colors duration-300">
              4.9 / 5 average across 50+ U.S. clients
            </span>
          </div>
        </div>
      </div>

      {/* Block 2: Featured Case Study (Overlapping) */}
      <div className="w-full container mx-auto px-4 md:px-6 max-w-6xl relative z-20 -mt-32 mb-20 group">
        <div className="w-full bg-secondary rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row hover:shadow-[0_20px_50px_rgba(11,19,43,0.3)] transition-shadow duration-500">
          
          {/* Left Half: Photograph */}
          <div className="w-full lg:w-5/12 relative min-h-[400px] lg:min-h-full overflow-hidden">
            <Image 
              src="/mark.png" 
              alt="Mark Thompson" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            {/* Small icon badge top left */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-2 shadow-lg hover:bg-white transition-colors cursor-default">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">Live Pod</span>
            </div>
            {/* Dark gradient and text bottom left */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/95 via-black/50 to-transparent p-8 pt-24 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-xl font-extrabold text-white mb-1">Mark Thompson</h4>
              <p className="text-xs text-white/80 font-semibold mb-3">COO, Cedar PM — 2,100 units (TX)</p>
              <div className="flex text-accent">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Half: Quote & Metrics */}
          <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="inline-flex self-start items-center rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-8 border border-white/10 shadow-inner">
              • FEATURED CASE STUDY
            </span>
            
            <Quote className="w-12 h-12 text-accent mb-6 rotate-180 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold leading-snug mb-12">
              "In six months we went from drowning in tenant tickets and late owner reports to clearing them daily. Our VVBridge pod runs AP, the tenant inbox, and maintenance dispatch — and our local team finally took a real weekend off."
            </p>

            {/* Metrics Grid 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(132,204,22,0.15)] transition-all duration-300 cursor-default">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">TENANT RESPONSE</span>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-slate-500 line-through text-lg font-bold">18h</span>
                  <span className="text-4xl font-extrabold text-accent">2h</span>
                </div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  ↑ Improved
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(132,204,22,0.15)] transition-all duration-300 cursor-default">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">MONTH-END CLOSE</span>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-slate-500 line-through text-lg font-bold">14d</span>
                  <span className="text-4xl font-extrabold text-accent">3d</span>
                </div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  ↑ Improved
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(132,204,22,0.15)] transition-all duration-300 cursor-default">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">NEW ADMIN HIRES</span>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-slate-500 line-through text-lg font-bold">4</span>
                  <span className="text-4xl font-extrabold text-accent">0</span>
                </div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  ↑ Improved
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(132,204,22,0.15)] transition-all duration-300 cursor-default">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">OWNER REPORTS ON TIME</span>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-slate-500 line-through text-lg font-bold">60%</span>
                  <span className="text-4xl font-extrabold text-accent">100%</span>
                </div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  ↑ Improved
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Block 3: Secondary Testimonials Carousel */}
      <div className="w-full container mx-auto px-4 md:px-6 max-w-6xl pb-32">
        <span className="inline-flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 hover:text-slate-700 transition-colors cursor-default">
          • MORE WINS
        </span>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6">
          <h3 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight cursor-default">
            Built on outcomes, not<br />
            <span className="inline-block bg-accent px-2 py-1 mt-1 rounded-sm hover:-rotate-1 transition-transform duration-300 shadow-sm">promises.</span>
          </h3>
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors">Swipe or use the arrows →</span>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-secondary hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-sm">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary/90 hover:scale-105 active:scale-95 transition-all shadow-sm">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container (Horizontal Scroll) */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {secondaryTestimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 min-w-[320px] md:min-w-[400px] flex flex-col justify-between snap-start group hover:shadow-xl hover:-translate-y-2 hover:border-accent/30 transition-all duration-300 cursor-default">
              <div>
                <div className="flex text-accent mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-secondary/20 mb-4 rotate-180 group-hover:text-accent/40 group-hover:scale-110 transition-all duration-300" strokeWidth={2} />
                <p className="text-slate-700 font-medium leading-relaxed mb-6 group-hover:text-secondary transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
                <div className="inline-block bg-accent/20 text-secondary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-8 group-hover:bg-accent group-hover:shadow-md transition-all duration-300">
                  {testimonial.achievement}
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-6 group-hover:border-slate-200 transition-colors duration-300">
                <div className={`w-10 h-10 rounded-full ${testimonial.color || "bg-cyan-600"} flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300`}>
                  {testimonial.initial}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-secondary group-hover:text-primary transition-colors duration-300">{testimonial.name}</span>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide group-hover:text-slate-700 transition-colors duration-300">{testimonial.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Block 4: Final CTA */}
      <div className="w-full bg-secondary py-8 md:py-12 flex justify-center text-center px-4">
        <div className="max-w-3xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Want results like <span className="inline-block bg-accent text-secondary px-3 py-1 rounded-md -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-md">these?</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-medium mb-6 hover:text-white transition-colors cursor-default">
            Book a free 20-minute call. We'll tell you straight up whether VVBridge can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(132,204,22,0.4)] active:scale-95 transition-all duration-300 shadow-lg"
            >
              Book a free call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent border border-slate-500 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 hover:border-white/80 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95 transition-all duration-300"
            >
              Email us
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
