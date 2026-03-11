import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import imgs from "../assets/myimg2.png";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full bg-white overflow-hidden flex flex-col items-center justify-center pt-20">
      
      {/* --- HERO TEXT SECTION --- */}
      <div className="absolute top-[20%] w-full flex flex-col items-center justify-center z-10 pointer-events-none">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-lg md:text-xl mb-4 pointer-events-auto"
        >
          👋 , my name is <span className="font-semibold text-gray-800">Harish Kumar</span> and I am a freelance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="font-black text-[12vw] leading-[0.8] tracking-tighter text-[#1a1a1a] uppercase">
            WebDeveloper
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h1 className="font-black text-[12vw] leading-[0.8] tracking-tighter text-transparent uppercase [-webkit-text-stroke:1.5px_#1a1a1a] md:[-webkit-text-stroke:2px_#1a1a1a] mt-2">
            WebDesigner
          </h1>
        </motion.div>
      </div>

      {/* --- CENTER SUBJECT IMAGE --- */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] z-20 pointer-events-none flex justify-center"
      >
        <img
          src={imgs}
          alt="Harish Profile"
          className="w-auto h-[60vh] md:h-[75vh] object-contain object-bottom"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-25 pointer-events-none"></div>

      {/* --- BOTTOM UI ELEMENTS --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-0 w-full flex flex-col md:flex-row justify-between items-center px-8 md:px-12 z-30 pointer-events-none gap-6 md:gap-0"
      >
        <div className="text-gray-500 text-lg md:text-xl pointer-events-auto text-center md:text-left">
          based in Tamilnadu, India.
        </div>

        <div className="flex gap-2 pointer-events-auto shadow-sm">
          <Button className="bg-[#1a1a1a] hover:bg-black text-white rounded-none px-6 md:px-8 py-6 text-sm transition-colors">
            You need a developer
          </Button>
          <Button variant="outline" className="bg-white/80 backdrop-blur-md border-[#1a1a1a] text-[#1a1a1a] hover:bg-gray-50 hover:text-pink-500 rounded-none px-6 md:px-8 py-6 text-sm transition-colors">
            You need a designer
          </Button>
        </div>

        <div className="hidden lg:flex gap-6 opacity-40 grayscale pointer-events-auto items-center">
          <span className="text-sm font-bold font-serif italic">React</span>
          <span className="text-sm font-bold tracking-widest uppercase">Tailwind</span>
          <span className="text-sm font-bold uppercase">Shadcn</span>
        </div>
      </motion.div>
    </section>
  );
}