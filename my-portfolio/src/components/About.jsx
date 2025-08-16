export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="
        relative z-10
        max-w-5xl
        mx-auto
        bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40
        backdrop-blur-lg
        p-12 sm:p-16
        rounded-3xl
        shadow-2xl
        border border-white/30
        text-gray-200
        hover:shadow-purple-500/50
        transition-shadow duration-500
      ">
        <h2 className="text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          About Me
        </h2>
        <p className="text-xl leading-relaxed max-w-4xl mx-auto tracking-wide">
          A motivated BCA graduate with a strong foundation in computer applications and a keen interest in full-stack web development. Built and deployed a production-ready project on AWS, gaining hands-on experience in React, Node.js, MongoDB, and DevOps basics. Seeking an entry-level role to contribute, learn from experienced developers, and grow into a skilled software engineer.
        </p>
      </div>
    </section>
  );
}
