import Image from "next/image";

export default function TeamHighlights() {
  const highlights = [
    {
      name: "Sofía",
      role: "Property Management Specialist",
      experience: "5 yrs experience",
      image: "/sofia2.png",
    },
    {
      name: "Diego",
      role: "Virtual Assistant",
      experience: "4 yrs experience",
      image: "/diego.png",
    },
    {
      name: "Valeria",
      role: "Customer Service Specialist",
      experience: "6 yrs experience",
      image: "/valeria.png",
    },
  ];

  return (
    <section className="relative z-20 -mt-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {highlights.map((person, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-row items-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default group"
          >
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
              <p className="text-sm text-gray-500 leading-snug mt-0.5 mb-2">
                {person.role}
              </p>
              <div className="inline-flex items-center gap-1.5 bg-[#ecfccb] text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full w-fit transition-colors duration-300 group-hover:bg-[#d9f99d]">
                <span className="w-2 h-2 rounded-full bg-[#84cc16]"></span>
                {person.experience}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
