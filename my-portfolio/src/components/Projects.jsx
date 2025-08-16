export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E] rounded-full blur-3xl opacity-25 animate-pulse"></div>
      </div>

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
        transition-shadow duration-500
        hover:shadow-pink-500/50
      ">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Project Card */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-105 hover:shadow-pink-500/40 transition-transform duration-300">
            <img
              src="https://img.icons8.com/?size=512&id=hp54uGDlrEZB&format=png"
              alt="DevTinder Project"
              className="w-full rounded-md mb-6 object-cover"
            />
            <h3 className="text-2xl font-bold mb-3 text-white">DevTinder</h3>
            <p className="text-gray-300 mb-5">
              A developer networking platform to connect coders with similar interests.
            </p>
            <a
              href="https://share.google/0hNLvxlcxzf1zZILV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline font-semibold"
            >
              View Project →
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-105 hover:shadow-pink-500/40 transition-transform duration-300">
            <img
              src="https://yt3.googleusercontent.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s900-c-k-c0x00ffffff-no-rj"
              alt="DevTinder Project"
              className="w-full rounded-md mb-6 object-cover"
            />
            <h3 className="text-2xl font-bold mb-3 text-white">DevTinder</h3>
            <p className="text-gray-300 mb-5">
              Developed a Netflix clone with GPT-search integration which recommends movies of user interests using OpenAI. 
            </p>
            <a
              href="http://netflix-gpt-bice-kappa.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline font-semibold"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
