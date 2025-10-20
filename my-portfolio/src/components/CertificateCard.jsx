export default function CertificateCard() {
  const certificateUrl =
    "https://ik.imagekit.io/5hquntidz/Taha.Full-stack.Certificate.png?updatedAt=1760971080616";

  return (
    <section
      id="certificate"
      className="py-12 flex flex-col justify-center px-4 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-5 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-5 right-5 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div
        className="
        relative z-10
        max-w-5xl
        mx-auto
        bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40
        backdrop-blur-lg
        p-6 sm:p-12 lg:p-16
        rounded-3xl
        shadow-2xl
        border border-white/30
        text-gray-200
        transition-shadow duration-500
        hover:shadow-blue-500/50
      "
      >
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Certification
        </h2>

        {/* Certificate Card */}
        <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-2xl shadow-lg border border-white/20 hover:scale-[1.02] transition-transform duration-300">
          <div className="mb-6 overflow-hidden rounded-xl shadow-2xl">
            <img
              src={certificateUrl}
              alt="ChaiCode Web Dev Cohort Certificate - Mohammed Taha"
              className="w-full h-auto object-contain mx-auto"
              loading="lazy"
            />
          </div>

          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Full Stack Web Dev Cohort - Live 1.0
            </h3>

            <p className="text-lg sm:text-xl text-purple-300 font-semibold">
              ChaiCode
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Successfully completed a comprehensive 160+ hour program covering
              full-stack web development with dedication and commitment to
              excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a
                href="https://courses.chaicode.com/learn/certificate/11525888-214298"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 rounded-full font-semibold shadow-lg transition text-center text-white text-sm sm:text-base"
              >
                Verify Certificate
              </a>

              <button
                onClick={() => window.open(certificateUrl, "_blank")}
                className="px-5 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold shadow-lg transition text-center text-white text-sm sm:text-base"
              >
                View Full Certificate
              </button>
            </div>

            <div className="pt-4 border-t border-white/20">
              <p className="text-xs sm:text-sm text-gray-400">
                Certificate Number: 11525888214298171024985
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
