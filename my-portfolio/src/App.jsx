import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
