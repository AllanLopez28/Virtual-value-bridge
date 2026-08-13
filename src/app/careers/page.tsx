"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase, Clock, TrendingUp, MessageSquare } from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  workModel: string;
  hours: string;
}

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Supply Chain Analyst",
    department: "Operations",
    location: "San Salvador, El Salvador",
    workModel: "Remote / Hybrid",
    hours: "Full-time - US Hours",
  },
  {
    id: "2",
    title: "Procurement Coordinator",
    department: "Operations",
    location: "San Salvador, El Salvador",
    workModel: "Remote",
    hours: "Full-time - US Hours",
  },
  {
    id: "3",
    title: "Bilingual Virtual Assistant",
    department: "Support",
    location: "San Salvador, El Salvador",
    workModel: "Remote",
    hours: "Full-time - US Hours",
  },
  {
    id: "4",
    title: "Accounting Specialist",
    department: "Finance",
    location: "San Salvador, El Salvador",
    workModel: "On-site",
    hours: "Full-time - US Hours",
  },
  {
    id: "5",
    title: "Administrative Assistant",
    department: "Admin",
    location: "San Salvador, El Salvador",
    workModel: "Hybrid",
    hours: "Full-time - US Hours",
  },
];

const filters = ["All Roles", "Operations", "Finance", "Admin", "Support"];

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Roles");

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All Roles" || job.department === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center w-full">
      {/* Section 1: Header */}
      <section className="w-full bg-gradient-to-b from-white to-slate-50 pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B132B] mb-6">
            Available Job Openings
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Join our team and power US businesses from San Salvador.
          </p>
        </div>
      </section>

      {/* Section 2: Search & Filters */}
      <section className="w-full px-4 md:px-6 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-3 md:p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="relative w-full md:w-1/3 flex items-center">
            <Search className="absolute left-3 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search roles..."
              className="w-full pl-10 pr-4 py-2 outline-none text-slate-700 bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeFilter === filter
                  ? "bg-[#1e40af] text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Job Listings Grid */}
      <section className="w-full px-4 md:px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl p-7 shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow">
                  <div className="mb-5">
                    <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0B132B] px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                      <Briefcase className="w-3.5 h-3.5" />
                      {job.department}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0B132B] mb-6">{job.title}</h3>
                  <div className="flex flex-col gap-3.5 mb-8">
                    <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                      <MapPin className="w-4 h-4 text-[#84cc16]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                      <Briefcase className="w-4 h-4 text-[#84cc16]" />
                      <span>{job.workModel}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                      <Clock className="w-4 h-4 text-[#84cc16]" />
                      <span>{job.hours}</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button className="w-full bg-[#1e40af] text-white font-bold py-3.5 rounded-lg text-sm uppercase tracking-widest hover:bg-[#0B132B]/90 active:scale-95 transition-all">
                      VIEW DETAILS &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500">
              No jobs found matching your criteria.
            </div>
          )}
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="w-full bg-white py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B132B] mb-5">
              Why Join Virtual Value Bridge?
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              We offer a high-performance environment designed for specialists to thrive while serving top-tier US clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-slate-50/80 rounded-2xl p-10 text-center flex flex-col items-center border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100/50 text-[#0B132B] rounded-full flex items-center justify-center mb-6">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-4">US Time Zone Alignment</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Work synchronically with US-based clients, ensuring seamless communication and a balanced professional life.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-slate-50/80 rounded-2xl p-10 text-center flex flex-col items-center border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-sky-100/50 text-sky-500 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-4">Professional Growth</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Continuous learning opportunities and exposure to modern business practices with high-growth international companies.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="bg-slate-50/80 rounded-2xl p-10 text-center flex flex-col items-center border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100/50 text-[#84cc16] rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-4">English-Speaking Env</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Immerse yourself in a fully bilingual culture, refining your language skills in a professional business context daily.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
