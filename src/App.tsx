import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Platforms from "./components/Platforms";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="relative w-full bg-white text-[#1a1a1a] font-sans overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Platforms />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
