import { motion } from "framer-motion";

export default function About() {
  const skills = ["React.js", "Tailwind CSS", "TypeScript", "Node.js","Express", "Mongodb", "MSSql","Postgresql",];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gray-50 min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Big Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[8vw] md:text-[5vw] font-black leading-none uppercase tracking-tighter mb-6">
            Design <br/> Meets <br/> <span className="text-transparent [-webkit-text-stroke:2px_#1a1a1a]">Logic.</span>
          </h2>
        </motion.div>

        {/* Right: Text & Skills */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-lg text-gray-600"
        >
          <p>
            I bridge the gap between pixel-perfect design and robust frontend engineering. 
            I specialize in building SaaS interfaces, complex dashboards, and luxurious marketing 
            websites using modern web technologies.
          </p>
          
          <div className="pt-6">
            <h3 className="font-bold text-black mb-4 uppercase tracking-widest text-sm">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}