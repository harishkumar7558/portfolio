
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    // 'scroll-smooth' enables smooth scrolling when clicking nav links
    <div className="relative w-full bg-white text-[#1a1a1a] font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}