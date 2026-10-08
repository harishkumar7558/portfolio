import { education, proficiency, skillGroups } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-gray-200 pb-8"
        >
          <p className="font-bold text-black mb-6 uppercase tracking-widest text-sm">
            <span className="text-pink-500">05 /</span> Skills & education
          </p>
          <h2 className="text-[12vw] md:text-[6vw] font-black leading-[0.85] uppercase tracking-tighter text-[#1a1a1a]">
            Tool<span className="text-transparent [-webkit-text-stroke:2px_#1a1a1a]">kit</span>
          </h2>
        </motion.div>

        <div className="divide-y divide-gray-200 border-b border-gray-200">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-4 py-6 items-center"
            >
              <h3 className="text-2xl font-black uppercase tracking-tighter">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Proficiency */}
          <div>
            <h3 className="font-bold text-black mb-8 uppercase tracking-widest text-sm">Proficiency</h3>
            <motion.div className="space-y-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              {proficiency.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="uppercase tracking-widest text-gray-500 text-xs">{skill.level}</span>
                  </div>
                  <div className="h-[3px] bg-gray-200 overflow-hidden">
                    <motion.div
                      className="h-full bg-[#1a1a1a]"
                      variants={{ hidden: { width: 0 }, show: { width: `${skill.value}%` } }}
                      transition={{ duration: 1.2, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="mt-10 flex gap-3 text-sm">
              <span className="px-4 py-2 bg-[#1a1a1a] text-white rounded-full">English</span>
              <span className="px-4 py-2 bg-[#1a1a1a] text-white rounded-full">தமிழ் Tamil</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-bold text-black mb-8 uppercase tracking-widest text-sm">Education</h3>
            <ol className="relative border-l border-gray-300 ml-2">
              {education.map((ed, i) => (
                <motion.li
                  key={ed.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="pl-8 pb-10 last:pb-0 relative"
                >
                  <span className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#1a1a1a] ${i === 0 ? "bg-pink-500" : "bg-white"}`} />
                  <p className="text-xs uppercase tracking-widest text-gray-500">{ed.period}</p>
                  <h4 className="mt-1 text-xl font-black uppercase tracking-tight leading-tight">{ed.title}</h4>
                  <p className="text-gray-600">{ed.school}</p>
                  <p className="mt-2 inline-block text-sm font-bold border-b-2 border-pink-500">{ed.score}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
