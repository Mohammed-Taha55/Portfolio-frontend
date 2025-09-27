import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 flex flex-col justify-center px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-16 left-10 w-80 h-80 bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-gradient-to-br from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E] rounded-full blur-3xl opacity-25 animate-pulse"></div>
      </div>

      <div
        className="
          relative z-10
          max-w-4xl
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
          w-full
        "
      >
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Get in Touch
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col gap-8 text-lg sm:text-xl items-center">
          <p className="flex items-center gap-3">
            <MdEmail className="text-pink-400 text-2xl" />
            <a
              href="mailto:mohammedtaha10683@gmail.com"
              className="hover:text-pink-400 transition"
            >
              mohammedtaha10683@gmail.com
            </a>
          </p>

          <p className="flex items-center gap-3">
            <FaPhone className="text-pink-400 text-2xl" />
            <a
              href="tel:+919019534549"
              className="hover:text-pink-400 transition"
            >
              +91 90195 34549
            </a>
          </p>

          {/* Extra links (GitHub + LinkedIn) */}
          <div className="flex gap-8 mt-6">
            <a
              href="https://github.com/Mohammed-Taha55"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition text-2xl flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-taha-aa449733a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition text-2xl flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
