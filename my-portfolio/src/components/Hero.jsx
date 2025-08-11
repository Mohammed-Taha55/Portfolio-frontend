import SectionWrapper from "./SectionWrapper";
import profile from "../assets/profile.jpg";
import Mohammed_Taha_CV from "../assets/Mohammed_Taha_CV.pdf";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <SectionWrapper id="hero">
      <div className="flex flex-col items-center">
        <img
          src={profile}
          alt="Mohammed Taha profile photo"
          className="w-52 h-52 sm:w-64 sm:h-64 rounded-full border-8 border-white shadow-xl mb-8"
        />

        <h1 className="text-6xl sm:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-6">
          Mohammed Taha
        </h1>

        <p className="text-2xl sm:text-3xl text-center max-w-3xl mb-12">
          Full Stack Developer | Crafting Scalable Web Apps
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <a
            href="#projects"
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-xl font-semibold shadow-lg transition shadow-blue-600/50 text-white text-center"
          >
            View My Work
          </a>
          <a
            href={Mohammed_Taha_CV}
            download="Mohammed_Taha_CV.pdf"
            className="px-10 py-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 rounded-full text-xl font-semibold shadow-lg transition shadow-pink-500/50 text-white text-center"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>

        <div className="flex gap-6 justify-center mt-4">
          <a
            href="https://www.linkedin.com/in/mohammed-taha-aa449733a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-blue-500 transition text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Mohammed-Taha55"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-gray-100 transition text-3xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
