export default function Projects() {
  return (
    <section
      id="projects"
      className="relative max-w-6xl mx-auto py-20 px-4 overflow-hidden"
    >
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E] rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {/* DevTinder Project Card */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20 hover:scale-105 hover:shadow-pink-500/40 transition">
          {/* Project Image */}
          <img
            src="https://img.icons8.com/?size=512&id=hp54uGDlrEZB&format=png"
            alt="DevTinder Project"
            className="w-full rounded-md mb-4 object-cover"
          />

          <h3 className="text-xl font-bold mb-2 text-white">DevTinder</h3>
          <p className="text-gray-300 mb-4">
            A developer networking platform to connect coders with similar
            interests.
          </p>
          <a
            href="https://share.google/0hNLvxlcxzf1zZILV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            View Project →
          </a>
        </div>
      </div>
    </section>
  );
}

