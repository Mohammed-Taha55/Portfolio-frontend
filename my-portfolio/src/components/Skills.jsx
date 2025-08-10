const skills = {
  Frontend: [
    "React", "TypeScript", "Tailwind CSS", 
     "HTML", "CSS", "JavaScript"
  ],
  Backend: ["Node.js", "Express", "Websocket", "Socket.io", "REST API"],
  "Database & ORM": ["PostgreSQL", "MongoDB", "Prisma", "Mongoose"],
  Devops: ["Git", "Docker", "Vercel", "AWS"],
  "Other Tools": ["Postman", "Github"],
};

export default function Skills() {
  return (
    <section className="relative py-20 bg-gray-950 text-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center text-purple-500 mb-12 animate-fadeDown">
          Skills
        </h2>

        <div className="space-y-10">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={category}
              className={`animate-slideUp`}
              style={{ animationDelay: `${idx * 0.2}s`, animationFillMode: 'both' }}
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition duration-300"
                    style={{ animation: `fadeIn 0.5s ease ${i * 0.05}s forwards`, opacity: 0 }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes fadeDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeDown {
            animation: fadeDown 0.6s ease forwards;
          }
          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp {
            animation: slideUp 0.6s ease forwards;
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
