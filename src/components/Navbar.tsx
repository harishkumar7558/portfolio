import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full flex justify-between items-center py-6 px-6 md:px-12 z-50 mix-blend-difference text-white"
    >
      <div className="text-3xl font-black tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0,0)}>
        Harish<span className="text-pink-500">.</span>
      </div>
      <nav className="hidden md:flex gap-8 ml-15 text-sm font-medium">
        <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
        <a href="#projects" className="hover:text-pink-500 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
      </nav>
      <Button className="rounded-none bg-white text-black hover:bg-gray-200 hidden md:block">
        harishkumarsivaraman@gmail.com
      </Button>
    </motion.header>
  );
}