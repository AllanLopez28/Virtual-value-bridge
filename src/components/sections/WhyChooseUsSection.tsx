import { MessageSquare, Layers, Clock, Settings, Target } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Block */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#84cc16]"></div>
              <span className="text-xs font-bold tracking-wider text-gray-500 uppercase">
                WHY TEAMS CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              A specialist that <span className="bg-[#84cc16] rounded-md px-2 py-0.5 text-gray-900 inline-block mt-1">fits right in</span>.
            </h2>
          </div>
          
          {/* Right Block */}
          <div className="lg:max-w-md lg:justify-self-end">
            <p className="text-lg text-gray-500">
              Every Virtual Value Bridge specialist is matched, trained, and set up to work the way your business already does.
            </p>
          </div>
        </div>

        {/* Grid Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="bg-[#0B132B] w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0">
              <MessageSquare color="#84cc16" className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Fluent English</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Clear, professional communication on every call and message.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="bg-[#0B132B] w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0">
              <Layers color="#84cc16" className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">A Real Match</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Paired by industry, software, and work style.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="bg-[#0B132B] w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0">
              <Clock color="#84cc16" className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Your Time Zone</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Working hours that stay in sync with your team.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="bg-[#0B132B] w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0">
              <Settings color="#84cc16" className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Trained on Your Systems</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Set up on your exact tools and workflows.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="bg-[#0B132B] w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0">
              <Target color="#84cc16" className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Results-Driven</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Focused on clear goals, not just hours logged.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
