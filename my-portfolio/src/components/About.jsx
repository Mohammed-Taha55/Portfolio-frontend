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
          I’m a passionate full stack developer skilled in JavaScript, React,
          Node.js, Express.js, Next.js, MongoDB, and more. I love creating
          responsive, user-friendly applications and delivering high-quality
          code that solves real-world problems. My goal is to build impactful
          digital products that people love to use.
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
