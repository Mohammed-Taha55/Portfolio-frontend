import profile from "../assets/profile.jpg";
import Mohammed_Taha_CV from "../assets/Mohammed_Taha_CV.pdf";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      
      {/* Animated Gradient Blobs - Matching About */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Profile Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 max-w-lg">
        <img
          src={profile}
          alt="Mohammed Taha"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg mx-auto"
        />

        {/* Name with Gradient Text */}
        <h1 className="text-5xl font-bold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Mohammed Taha
        </h1>

        <p className="text-xl mb-6 text-gray-300">
          Full Stack Developer | Crafting Scalable Web Apps
        </p>

        {/* Buttons with Glow */}
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition shadow-lg hover:shadow-blue-500/50"
          >
            View My Work
          </a>
          <a
            href={Mohammed_Taha_CV}
            download="Mohammed_Taha_CV.pdf"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 rounded-lg transition shadow-lg hover:shadow-pink-500/50"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
