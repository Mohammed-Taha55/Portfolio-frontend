import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 flex flex-col justify-center px-4 sm:px-8 lg:px-20 relative overflow-hidden"
    >
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-16 left-10 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E] rounded-full blur-3xl opacity-25 animate-pulse"></div>
      </div>

      <div
        className="
          relative z-10
          max-w-4xl
          mx-auto
          bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40
          backdrop-blur-lg
          p-6 sm:p-12 lg:p-16
          rounded-3xl
          shadow-2xl
          border border-white/30
          text-gray-200
          transition-shadow duration-500
          hover:shadow-pink-500/50
          w-full
        "
      >
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Get in Touch
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 sm:gap-8 text-base sm:text-lg lg:text-xl items-center">
          <p className="flex items-center gap-3 text-center sm:text-left">
            <MdEmail className="text-pink-400 text-xl sm:text-2xl" />
            <a
              href="mailto:mohammedtaha10683@gmail.com"
              className="hover:text-pink-400 transition break-all"
            >
              mohammedtaha10683@gmail.com
            </a>
          </p>

          <p className="flex items-center gap-3 text-center sm:text-left">
            <FaPhone className="text-pink-400 text-xl sm:text-2xl" />
            <a
              href="tel:+919019534549"
              className="hover:text-pink-400 transition"
            >
              +91 90195 34549
            </a>
          </p>

          {/* Extra links (GitHub + LinkedIn) */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-6">
            <a
              href="https://github.com/Mohammed-Taha55"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition text-xl sm:text-2xl flex items-center gap-2 justify-center"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-taha-aa449733a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition text-xl sm:text-2xl flex items-center gap-2 justify-center"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
