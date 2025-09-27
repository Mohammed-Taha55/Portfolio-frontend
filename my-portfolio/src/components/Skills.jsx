import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostgresql, SiMongodb, SiPrisma, SiTypescript, SiPostman, SiNextdotjs } from "react-icons/si";
import { MdApi, MdEmail } from "react-icons/md";
import { DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di";
import { FaCircle } from "react-icons/fa";

const skills = {
  Frontend: ["React.js", "JavaScript", "Next.js", "Tailwind CSS", "HTML", "CSS","TypeScript"],
  Backend: ["Node.js", "Express", "REST API"],
  "Database & ORM": ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "SQL"],
  Devops: ["Git", "Docker", "Vercel", "AWS"],
  "Other Tools": ["Postman", "Github"],
};

// Mapping skills to icons
const skillIcons = {
  "React.js": <FaReact className="text-sky-400" />,
  JavaScript: <DiJavascript1 className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  HTML: <DiHtml5 className="text-orange-400" />,
  CSS: <DiCss3 className="text-blue-500" />,
 "Next.js": <SiNextdotjs className="text-white" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <SiExpress className="text-gray-300" />,
  "REST API": <MdApi className="text-purple-400" />,
  PostgreSQL: <SiPostgresql className="text-sky-500" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Prisma: <SiPrisma className="text-indigo-400" />,
  Mongoose: <FaDatabase className="text-pink-400" />,
  SQL: <FaDatabase className="text-yellow-300" />,
  Git: <FaGitAlt className="text-orange-500" />,
  Docker: <FaDocker className="text-sky-400" />,
  AWS: <FaAws className="text-yellow-400" />,
  Vercel: <FaCircle className="text-white" />, // Vercel simple icon
  Postman: <SiPostman className="text-orange-400" />,
  Github: <FaGithub className="text-gray-200" />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 flex flex-col justify-center px-6 sm:px-10 lg:px-20 relative overflow-hidden w-full"
    >
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[#FDE68A] via-[#FCA5A5] to-[#F43F5E] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div
        className="
          relative z-10
          max-w-5xl
          mx-auto
          w-full
          bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40
          backdrop-blur-lg
          p-12 sm:p-16
          rounded-3xl
          shadow-2xl
          border border-white/30
          text-gray-200
          transition-shadow duration-500
          hover:shadow-indigo-500/50
        "
      >
        <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Skills
        </h2>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">{category}</h3>
            <div className="flex flex-wrap gap-4">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-2 px-5 py-3 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition duration-300 cursor-default select-none"
                >
                  {skillIcons[skill] || <FaCircle className="text-gray-400" />}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
