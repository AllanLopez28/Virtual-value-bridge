import { Check } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Hired, Matched, and <span className="text-blue-600 italic">Working With Your Team</span>
          </h2>
          <p className="text-lg text-gray-500">
            A simple, direct process for bringing a Virtual Value Bridge specialist into your business — with real support at every step, for any role you need to fill.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}
          <div className="bg-slate-50 rounded-3xl p-8">
            <h3 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">GETTING STARTED</h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Tell us what you need</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 leading-snug">Share the role, tools, and tasks you need covered</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 leading-snug">Walk us through your workflows and software</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 leading-snug">Talk directly with a Virtual Value Bridge founder</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 rounded-3xl p-8">
            <h3 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">THE MATCH</h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Meet your specialist</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 leading-snug">Hand-picked for your industry and tools</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 leading-snug">Free replacement, no long-term contract</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 leading-snug">See real work before you commit to anything</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 leading-snug">Direct line to your specialist and to Virtual Value Bridge</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 rounded-3xl p-8">
            <h3 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">WORKING TOGETHER</h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Watch your business run smoother</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 leading-snug">Your specialist plugs fully into your team</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 leading-snug">Scale up or down as your needs change</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 leading-snug">Ongoing support from the Virtual Value Bridge team</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
