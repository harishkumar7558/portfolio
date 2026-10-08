import { experience } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
  const [active, setActive] = useState(0);
  const product = experience.products[active];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-gray-200 pb-8"
        >
          <p className="font-bold text-black mb-6 uppercase tracking-widest text-sm">
            <span className="text-pink-500">02 /</span> Where I work
          </p>
          <h2 className="text-[12vw] md:text-[6vw] font-black leading-[0.85] uppercase tracking-tighter text-[#1a1a1a]">
            Experi<span className="text-transparent [-webkit-text-stroke:2px_#1a1a1a]">ence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-16">
          {/* Role */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:sticky md:top-28 self-start"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
              </span>
              {experience.period}
            </span>
            <h3 className="mt-6 text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">{experience.role}</h3>
            <p className="mt-3 text-xl text-gray-500">@ {experience.company}</p>
            <p className="mt-1 text-sm uppercase tracking-widest text-gray-400">{experience.location}</p>
          </motion.div>

          {/* Highlights */}
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {experience.highlights.map((h, i) => (
              <motion.div
                key={h.metric + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-baseline gap-6 py-6"
              >
                <span className="w-28 shrink-0 text-5xl md:text-6xl font-black tracking-tighter text-transparent [-webkit-text-stroke:1.5px_#1a1a1a] group-hover:text-[#1a1a1a] transition-colors duration-500">
                  {h.metric}
                </span>
                <p className="text-lg text-gray-600">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Products I've built</h3>
            <div className="flex gap-2">
              {experience.products.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => setActive(i)}
                  className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest border transition-colors ${
                    active === i ? "bg-[#1a1a1a] border-[#1a1a1a] text-white" : "border-gray-300 text-black hover:border-black"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0a0a] text-white p-6 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-10 border-b border-gray-800 pb-8">
                  <span className="text-6xl md:text-8xl font-black tracking-tighter">{product.name}</span>
                  <span className="text-gray-400 uppercase tracking-widest text-sm">{product.full}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
                  {product.points.map((p, i) => (
                    <motion.div
                      key={p.text}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                      className="group bg-[#0a0a0a] p-6 hover:bg-white transition-colors duration-500"
                    >
                      <div className="text-4xl font-black tracking-tighter text-pink-500">{p.metric}</div>
                      <p className="mt-3 text-gray-400 group-hover:text-gray-700 transition-colors">{p.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
