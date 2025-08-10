export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gray-950 text-white overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center text-purple-500 mb-8 animate-fadeDown">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg animate-slideUp">
         A self-driven and highly motivated BCA graduate with a strong
foundation in computer applications and a deep interest in
full-stack web development. I have independently built and
deployed a production-ready full-stack project on AWS,
showcasing hands-on experience in React, Node.js, MongoDB,
and DevOps basics. Seeking an entry-level position where I
can contribute to real-world projects, learn from experienced
developers, and grow into a well-rounded software engineer.
Passionate about solving problems, continuously improving,
and adding value to a dynamic tech team.
        </p>
      </div>

      {/* Animations */}
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
            animation: slideUp 0.8s ease forwards;
          }
        `}
      </style>
    </section>
  );
}
