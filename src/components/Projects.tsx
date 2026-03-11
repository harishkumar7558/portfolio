import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id: 1, title: "Fintech Dashboard", category: "Web App", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "E-Commerce Store", category: "Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Creative Agency", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[6vw] md:text-[4vw] font-black uppercase tracking-tighter mb-16 border-b border-gray-800 pb-8"
        >
          Selected Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-900 h-[400px] w-full mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">{project.category}</p>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}